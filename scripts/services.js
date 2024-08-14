/// my contatiner

const services = [];

// to capture user input

let inputDescription = document.getElementById("txtDescription");
let inputPrice = document.getElementById("txtPrice");

        // jQuery
        // let inputDescription = $("txtDescription").val();
        // let inputPrice = $("txtPrice").val();

//constructor
function Service(description, price) {
  this.description = description;
  this.price = price;
}

//use jQuery\
function register() {
  console.log("Register");

  let newService = new Service(inputDescription.value, inputPrice.value);

  save(newService); // for local storage script 
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

function clearInput() {}

function init() {
  // hooks
  $("#btnRegister").on("click", register);
}

window.onload = init;
