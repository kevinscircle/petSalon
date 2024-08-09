let pets = []; //pets array

//constructor
function Pet(name, age, gender, breed) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.breed = breed;
}

let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
console.log(inputName, inputAge, inputGender, inputBreed);
//input data and push
function register() {
  let newPet = new Pet(
    inputName.value,
    inputAge.value,
    inputGender.value,
    inputBreed.value
  );

  pets.push(newPet);

  displayRow();

  console.log("pets", pets);
}

function init() {
  let pet1 = new Pet("Scooby", 10, "Male", "Husky");
  let pet2 = new Pet("Scrappy", 9, "Male", "Mixed");

  console.log("pet1 and pet2", pet1, pet2);

  pets.push(pet1, pet2);
  displayRow();
}

window.onload = init;

// export {pets};
