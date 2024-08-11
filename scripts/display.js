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
    row += `<tr id= '${i}'>  
        <td>${i + 1}</td>
       <td> ${pet.name}</td> 
       <td> ${pet.age}</td>
       <td> ${pet.breed}</td>
       <td> ${pet.gender}</td>
        <td> ${pet.owner}</td>
         <td><button class='btn btn-danger btn-sm' onclick="deletePet(${i})">Delete</button>
                  <button class='btn btn-primary btn-sm'>Edit</button>
                        <button class='btn btn-info btn-sm'>Archive</button>
                        </td>
    </tr>`;
    //display the row on the html
  }

  table.innerHTML = row;
  displayInfo();
}

console.log("pets in display", pets);

function displayInfo() {
  document.getElementById("count-register").innerHTML = pets.length;
  console.log("pets.length", pets.length);
}
