let pets = []; //pets array

function Pet(name,age,gender,breed) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.breed = breed;
}
function register() {
  let inputName = document.getElementById("txtName").value;
  let inputAge = document.getElementById("txtAge").value;
  let inputGender = document.getElementById("txtGender").value;
  let inputBreed = document.getElementById("txtBreed").value;
  console.log(inputName, inputAge, inputGender, inputBreed);

  let newPet = new Pet(inputName, inputAge, inputGender, inputBreed);

  pets.push(newPet);
  console.log('pets',pets);
}

function init() {
  let pet1 = new Pet("Scooby", 10, "Male", "Husky");
  let pet2 = new Pet("Scrappy", 9, "Male", "Mixed");
  console.log("pet1 and pet2", pet1, pet2);

  pets.push(pet1,pet2)
}

window.onload = init;
