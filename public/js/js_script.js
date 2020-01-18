let button = document.getElementById("sendDeliveryBtn");

function getOrder() {
  let name = document.getElementById("fnln").value;
  let email = document.getElementById("em").value;
  let paymentOption = document.getElementById("paymentOption").value;
  let genders = document.getElementsByName("gender");

  let checked;
  for(let i = 0; i < genders.length; i++){
    if(genders[i].checked){
      checked = genders[i].value;
    }
  }

  let returnArray = [name, email, paymentOption, checked];
  return returnArray;
}

button.addEventListener("click", getOrder);
















