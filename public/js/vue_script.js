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
    },
    locationSelected: false,
    errorMessage: ''
  },
  methods: {
    getOrder: function() {
      this.customerCredentials = [this.name, this.email, this.paymentOption, this.gender];
    },
    credentialsFilled: function() {
      this.getOrder();
      let filled = true;
      for (let i = 0; i < this.customerCredentials.length; i++) {
        if (this.customerCredentials[i].length == 0) {
          filled = false;
          break;
        }
      }
      return filled;
    },
    addOrder: function() {
      if (this.selectedBurgers.length > 0) {
        if (this.credentialsFilled()){
          if (this.locationSelected) {
            socket.emit("addOrder", { 
              details: this.localOrder.details,
              orderItems: this.selectedBurgers,
              credentials: this.customerCredentials
            });
            this.locationSelected = false;
            this.errorMessage = '';
            this.customerCredentials = [];
            this.selectedBurgers = [];
          } else {
            this.errorMessage = 'Please select location for delivery on map!';
          }
        } else {
          this.errorMessage = 'Please enter your credentialas!';
        } 
      } else {
        this.errorMessage = 'Please select an item from the menu!';
      }
    },
    displayOrder: function (event) {
      this.locationSelected = true;
      let offset = {
        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top
      };
      this.localOrder = { 
        details: { 
          x: event.clientX - 10 - offset.x,
          y: event.clientY - 10 - offset.y 
        }
      };
    }
  }
});

