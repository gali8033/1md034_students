'use strict';
const socket = io();

const vm = new Vue({
  el: 'main',
  data: {
  	menu: food,
    selectedBurgers: [],
    name: '',
    email: '',
    paymentOption: '',
    gender: '',
    finalOrder: '',
    orders: {},
    localOrder: {
      orderID: '',
      details: {x: '', y: ''},
      orderItems: []
    },
    noOrders: 0
  },
  methods: {
    getOrder: function() {
      this.finalOrder = [this.selectedBurgers.join(", "), this.name, this.email, this.paymentOption, this.gender];
    },
    getNext: function() {
      return ++this.noOrders;
    },
    addOrder: function() {
      // Candidate for removal
      this.getOrder();
      
      socket.emit("addOrder", { 
        orderId: this.getNext(),
        details: this.localOrder.details,
        orderItems: this.selectedBurgers
      });
    },
    displayOrder: function (event) {
      let offset = {
        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top
      };
      this.localOrder = { 
        orderId: 'T',
        details: { 
          x: event.clientX - 10 - offset.x,
          y: event.clientY - 10 - offset.y 
        },
        orderItems: []
      };
    }
  }
});

