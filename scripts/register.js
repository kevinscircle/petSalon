let pets = []; 
//pets array

//constructor
function Pet(name, age, gender, breed, owner) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.breed = breed;
  this.owner = owner;
}

let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputOwner = document.getElementById("txtOwner");
console.log(inputName, inputAge, inputGender, inputBreed);
//input data and push

function isValid(pet) {
  let validation = true;

  // color error

  inputName.classList.remove("error");
  inputAge.classList.remove("error");
  inputGender.classList.remove("error");
  inputBreed.classList.remove("error");
  inputOwner.classList.remove("error");

  if (pet.name == "") {
    validation = false;
    inputName.classList.add("error");
  }
  if (pet.age == "") {
    validation = false;
    inputAge.classList.add("error");
  }
  if (pet.gender == "") {
    validation = false;
    inputGender.classList.add("error");
  }
  if (pet.breed == "") {
    validation = false;
    inputBreed.classList.add("error");
  }
  if (pet.owner == "") {
    validation = false;
    inputOwner.classList.add("error");
  }
  return validation;
}

function register() {
  let newPet = new Pet(
    inputName.value,
    inputAge.value,
    inputGender.value,
    inputBreed.value,
    inputOwner.value
  );

  if (isValid(newPet) == true) {
    pets.push(newPet);

    console.log(pets);
    displayRow();
    displayInfo();
  }

  savePets(newPet);
  console.log("pets", pets);
}



function getServices() {
  // get the list from local storage
  let servicesList = readServices();
  //  console.log('services', servicesList);
  let option;
  // travel the array of services
  for (let i = 0; i < servicesList.length; i++) {
    let service = servicesList[i];

    //create the template
    option += `<option>${service.description}</option>`;
  }
  //display the row on the html
  $("#txtServices").append(option);
  // create the html <option>

  // document.getElementsByTagName('option')
}


function init() {
  // read pets from local storage
  pets = readPets(); // Correctly assign the result to the pets array
  // pets.push(pets)
  displayRow();
  displayInfo();
  getServices();
}


window.onload = init;
