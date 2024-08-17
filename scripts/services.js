/// my contatiner

const services = [];

// to capture user input

let inputDescription = document.getElementById("txtDescription");
let inputPrice = document.getElementById("txtPrice");

        // jQuery
        // let inputDescription = $("#txtDescription").val();
        // let inputPrice = $("#txtPrice").val();

//constructor
function Service(description, price) {
  this.description = description;
  this.price = price;
}

//use jQuery\
function serviceForm() {
  console.log("serviceForm");

  let newService = new Service(inputDescription.value, inputPrice.value);

  saveServices(newService); // for local storage script 
  console.log("service", newService);
// storage local



// localStorage.setItem("service");  // what is this for prof deleted 


  // jQuery

  $("input").val(""); // clear input

  if (isValid(newService) == true) {
    services.push(newService);
  }

  //   else {
  //     alert("incorrect try again");
  //   }

  services.push(newService);
  console.log("adding service", services);
}

// to validate
function isValid(service) {
  let validation = true;
  inputDescription.classList.remove("error");
  inputPrice.classList.remove("error");

  // jQuery 


  if (service.description == "") {
    validation = false;
    inputDescription.classList.add("error");
  }
  if (service.price == "") {
    validation = false;
    inputPrice.classList.add("error");
  }
}

// function clearInput() {
//     inputDescription.value = "";
//     inputPrice.value = "";
// }

function init() {
  // hooks
  $("#btnService").on("click", serviceForm);
}

window.onload = init;






    function isValidService(service){
        let validDescription=true;
        let validPrice=true;
        if(service.description==""){
            validDescription=false;
            $(".descriptionvalidationMsg").css("color","red").show();
        }else{
            $(".descriptionvalidationMsg").hide();
        }
        if(service.price==""){
            validPrice=false;
            $(".priceValidationMsg").css("color","red").show();
        }else{
            $(".priceValidationMsg").hide();
        }
        return validDescription && validPrice;
    }
