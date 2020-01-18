const vm = new Vue({
  el: 'main',
  data: {
  	menu: food,
    selectedBurgers: [],
    name: '',
    email: '',
    paymentOption: '',
    gender: '',
    finalOrder: ''
  },
  methods: {
    getOrder: function() {
      this.finalOrder = [this.selectedBurgers.join(", "), this.name, this.email, this.paymentOption, this.gender];
    }
  }
})















