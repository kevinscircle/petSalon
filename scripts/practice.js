// js vs jQuery

// document.getElementById("results");

// $("#results");

// document.getElementsByTagName("p");

// $("p");

// document.getElementsByClassName("text");

// $(".text");

function clickMe() {
  $("#results").text("button was clicked!");
  $("p:first").hide();
  //   $("p:last").css("background-color", "yellow");
  $("#op1").hide();
  $("#op2").hide();
}

function register(){
    // let userName = document.getElementById('txtName').value;
    // document.getElementById('results').innerHTML += `<li>${userName}</li>`;
    let userName = $("#txtName").val();
    $("#results").append(`<li>${userName}</li>`);
}

function init() {
  // hook events
  $('#btnRegister').on('click', register)
  $("#btn1").on("click", clickMe);

  $("#btn1").on("mouseover", function () {
    // console.log("Mouse over");
    $(this).addClass("btn");
  });

  $("#btn1").on("mouseleave", function () {
    // console.log("Mouse leave");
    $(this).removeClass("btn");
  });



  
//challenge 
  $("#op1").hide();
  $("#op2").hide();

  $("#op1Link").on("click", function(){
    $(this).addClass("btn");
    $('#op2Link').removeClass("btn");
    $("#op1").show();
    $("#op2").hide();

  });

  $("#op2Link").on("click", function(){
    $(this).addClass("btn");
    $('#op1Link').removeClass("btn");
    $("#op2").show();
    $("#op1").hide();

});
}

window.onload = init;
