function saveServices(item) {
  // get local storage items / obj

  let list = readServices();

  // push new item or set

  list.push(item);
  // parse into a string in the array

  let val = JSON.stringify(list);
  console.log("val", val);
  localStorage.setItem("services", val);
}



function readServices() {
  // read local storage

  let data = localStorage.getItem("services");
  console.log("services", data);

  if (!data) {
    return [];
  } else {
    // converting string into an array
    let list = JSON.parse(data);
    // return aftar parsed
    return list;
  }
}

function savePets(item) {
    let list = readPets();
    list.push(item);
    let val = JSON.stringify(list);
    console.log("val", val);
    localStorage.setItem("pets", val);
}

function deletePet(id) {
    console.log("Deleting", id);
    pets.splice(id, 1);

    localStorage.setItem("pets", JSON.stringify(pets)); // Update local storage after deletion

    document.getElementById(id).remove();
    displayRow(); // refresh display
}

  
  function readPets() {
    // read local storage
    let data = localStorage.getItem("pets");
    console.log("pets", data);
  
    if (!data) {
      return [];
    } else {
      // converting string into an array
      let list = JSON.parse(data);
      // return after parsed
      return list;
    }
  }
  