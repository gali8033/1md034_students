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

let div = document.getElementById("myID");
let p1 = document.createElement("p");
let p2 = document.createElement("p");
let p3 = document.createElement("p");
let p4 = document.createElement("p");
let p5 = document.createElement("p");

let b1 = document.createTextNode(burger1.getBurger());
let b2 = document.createTextNode(burger2.getBurger());
let b3 = document.createTextNode(burger3.getBurger());
let b4 = document.createTextNode(burger4.getBurger());
let b5 = document.createTextNode(burger5.getBurger());

p1.appendChild(b1);
p2.appendChild(b2);
p3.appendChild(b3);
p4.appendChild(b4);
p5.appendChild(b5);

/*
div.appendChild(p1);
div.appendChild(p2);
div.appendChild(p3);
div.appendChild(p4);
div.appendChild(p5);
*/

const vm = new Vue({
  el: '#myID',
  data: {
    html: p1.outerHTML + p2.outerHTML + p3.outerHTML + p4.outerHTML + p5.outerHTML  }
})


