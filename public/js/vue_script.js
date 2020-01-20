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
    customerCredentials: '',
    orders: {},
    localOrder: {
      orderID: '',
      details: {x: '', y: ''},
      orderItems: []
    }
  },
  methods: {
    getOrder: function() {
      this.customerCredentials = [this.name, this.email, this.paymentOption, this.gender];
    },
    addOrder: function() {
      this.getOrder();
      
      if (this.selectedBurgers.length > 0 && this.customerCredentials.length > 3) {
        socket.emit("addOrder", { 
          details: this.localOrder.details,
          orderItems: this.selectedBurgers,
          credentials: this.customerCredentials
        });
      }
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

