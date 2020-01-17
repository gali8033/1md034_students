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

/*
let menu = [burger1, burger2, burger3, burger4, burger5];

let burgersWrapper = document.getElementById("burgersWrapper");
burgersWrapper.style.display = "grid";
burgersWrapper.style.gridTemplateColumns = "auto";
burgersWrapper.style.gridGap = "2%";

for(let i = 0; i < menu.length; i++) {
	// The Heading
  let heading = document.createElement("h4");
  heading.appendChild(document.createTextNode(menu[i].name));
  
  // The Image
  let image = document.createElement("img");
  image.src = menu[i].image;
  image.height = 150;
  image.alt = menu[i].name;

  // The list of information
  let list = document.createElement("ul");
  
  // The ingredients
  let ingredients = "";
  for (let j = 0; j < menu[i].ingredients.length; j++) {
    let end = ""; 
    if (j < menu[i].ingredients.length-1) {
      end = ", ";
    } else {
      end = "";
    } 
    ingredients += menu[i].ingredients[j]+end;
  }

  // The allergies
  let allergies = "";
  for (let j = 0; j < menu[i].allergies.length; j++) {
    let end = "";
    if (j < menu[i].allergies.length-1) {
      end = ", ";
    } else {
      end = "";
    } 
    allergies += menu[i].allergies[j]+end; 
  }
  
  // The text nodes
  let liTxt1 = document.createTextNode(ingredients);
  let liTxt2 = document.createTextNode(menu[i].kcal + " kCal");
  let liTxt3 = document.createTextNode(allergies);

  // The list items
  let li1 = document.createElement("li");
  li1.appendChild(liTxt1);
  let li2 = document.createElement("li");
  li2.appendChild(liTxt2);
  let li3 = document.createElement("li");
  li3.appendChild(liTxt3);

  // Append the list items to the list
  list.appendChild(li1);
  list.appendChild(li2);
  list.appendChild(li3);

  let box = document.createElement("div");
  box.className = "box";
  box.style.gridColumn = (i+1)+" / "+(i+1);

  // Append to box
  box.appendChild(heading);
  box.appendChild(image);
  box.appendChild(list);

  // Append everything to the burgersWrapper div
  burgersWrapper.appendChild(box);
}
*/

