function save(item) {
  // get local storage items / obj

  let list = read();

  // push new item or set

  list.push(item);
  // parse into a string in the array

  let val = JSON.stringify(list);
  console.log("val", val);
  localStorage.setItem("sevices", val);
}

function read() {
  // read local storage

  let data = localStorage.getItem("sevices");
  console.log("data", data);

  if (!data) {
    return [];
  } else {
    // converting string into an array
    let list = JSON.parse(data);
    // return aftar parsed
    return list;
  }

  
}
