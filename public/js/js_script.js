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

let button = document.getElementById("sendDeliveryBtn");

/*
button.addEventListener("click", function() {
  console.log("Button clicked!");
});
*/

/*
function getOrder() {
  let name = document.getElementById("fnln").value;
  let email = document.getElementById("em").value;
  let street = document.getElementById("st").value;
  let houseNumber = document.getElementById("hn").value;
  let paymentOption = document.getElementById("paymentOption").value;
  var genders = document.getElementsByName('gender');
  let checked;
  for (let i = 0; i < genders.length; i++){
    if (genders[i].checked){
      checked = genders[i].value;
    }
  }


  let returnArray = [name, email, street, houseNumber, paymentOption, checked];
  return returnArray;
}

button.addEventListener("click", getOrder);
*/















