function menuItem(name, image, kcal, ingredients, allergies) {
  this.name = name;
  this.image = image;
  this.kcal = kcal;
  this.ingredients = ingredients;
  this.allergies = allergies;
  this.getBurger = function() {
    return this.name + " " + this.kcal+" kCal";
  }
}

// The Fire Burger
let burger1 = new menuItem("The Fire Burger", "https://media.apnarm.net.au/media/images/2018/07/02/twb020718hot-vg0ryvm2nzp3g4cejq2_t1880.JPG", 750, ["300g beef patty", "tomatoes", "lettuce", "majonaise", "sriracha"], ["lactose", "gluten"]);

// The Vegan Dream
let burger2 = new menuItem("The Vegan Dream", "https://sweetsimplevegan.com/wp-content/uploads/2019/06/Easy-5-Ingredient-Veggie-Burgers-Sweet-Simple-Vegan-thumbnail.jpg", 600, ["250g oumph patty","tomatoes", "lettuce", "red onion", "vegan majonaise"], ["gluten"]);

// The Cheesy Joke
let burger3 = new menuItem("The Cheesy Joke", "https://tasteandsee.com/wp-content/uploads/2017/06/Easy-Pimento-Cheese-and-Bacon-Burger-EL-burger-great.jpg", 850, ["250g beef patty", "tomatoes", "lettuce", "red onion", "pepper jack cheese", "cheddar cheese"], ["lactose", "gluten"]);

// The Beef Haven
let burger4 = new menuItem("The Beef Haven", "http://www.mikaelasmenu.com/uploads/6/7/7/4/67744993/dsc05253_orig.jpg", 750, ["2x 300g beef patty", "tomatoes", "cheddar cheese", "caramelized onion", "majonaise"], ["lactose", "gluten"]);

// The Mushroom Diplomacy
let burger5 = new menuItem("The Mushroom Diplomacy", "https://s23991.pcdn.co/wp-content/uploads/2019/08/spinach-tomato-mushroom-burger.jpg", 700, ["portabello mushroom", "red onion", "vegan majonaise", "pickled cucumber", "cumberland jam"], ["gluten"]);

let menu = [burger1, burger2, burger3, burger4, burger5];

let myList = document.getElementById("myList");

for(let i = 0; i < menu.length; i++) {
	let li = document.createElement("li");
  let allergy = " | Allergies: " + (menu[i].allergies.includes("gluten") ? "gluten " : "") + (menu[i].allergies.includes("lactose") ? "lactose " : "");
  let textNode = document.createTextNode(menu[i].getBurger() + allergy);
  li.appendChild(textNode);
  myList.appendChild(li);
}


/*const vm = new Vue({
  el: '#myID',
  data: {
     
   }
})*/


