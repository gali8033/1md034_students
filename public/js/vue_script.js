const vm = new Vue({
  el: 'main',
  data: {
  	menu: food,
    selectedBurgers: [],
    name: '',
    email: '',
    street: '',
    houseNumber: '',
    paymentOption: '',
    gender: '',
    finalOrder: ''
  },
  methods: {
    getOrder: function() {
      this.finalOrder = [this.selectedBurgers.join(", "), this.name, this.email, this.street, this.houseNumber, this.paymentOption, this.gender];
    }
  }
})















