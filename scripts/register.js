let pets = []; //pets array

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

    displayRow();
  }

  console.log("pets", pets);
}

function deletePet(id) {
  console.log("Deleting", id);
  pets.splice(id, 1);

  document.getElementById(id).remove();
  displayRow(); // refresh display
}

function init() {
  let pet1 = new Pet("Scooby", 10, "Male", "Husky", "May");
  let pet2 = new Pet("Scrappy", 9, "Male", "Mixed", "Dave");

  console.log("pet1 and pet2", pet1, pet2);

  pets.push(pet1, pet2);
  displayRow();
}

window.onload = init;

// export {pets};
