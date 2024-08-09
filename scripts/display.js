// import {pets} from './register'

// function displayCards(){

// }

function displayRow() {
  let table = document.getElementById("pets");

  let row = "";

  //travel the array for loop needed
  for (let i = 0; i < pets.length; i++) {
    let pet = pets[i];

    //create the template
    row += `<tr>  
       <td> ${pet.name}</td> 
       <td> ${pet.age}</td>
       <td> ${pet.breed}</td>
       <td> ${pet.gender}</td>
    </tr>`;
    //display the row on the html
  }

  table.innerHTML = row;
}

console.log("pets in display", pets);
