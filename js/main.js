// MORNING CHALLENGE: Build a pizza making app using jquery - user should should be able to select from a minimum of three toppings and if the specific topping goes on half of the pizza or the whole pizza - the user should be able to see the pizza in real time as toppings get added
//
// Write pseudo code and ask questions
//what can the user do?

// select from a minimum of three toppings and if the specific topping goes on half of the pizza or the whole pizza
// input form variable nees to catch Toppings
// var toppings =["images/fullroni.png","images/roniright.png", "images/halfroni.png","images/fullolive.png","images/halfoliveright.png", "images/oliveleft.png","images/fullgreen.png","images/greenright.png", "images/greenleft.png"];

//pizza is the object to which the topping can be added


//what does the user expect?
$(document).ready(function(){
  //
$("input").on("change", function(event){
  switch($(this).attr("class")){
    case "greenPepWhole":
      $(".whole").addClass("greenPepW")
      $(".greenPepW").removeClass("hidden")
      break;
    case "greenPepLeft":
      $(".pizzaRight").removeClass("greenPepR")
      $(".whole").removeClass("greenPepW")
      $(".greenPepL").removeClass("hidden")
      $(".pizzaLeft").addClass("greenPepL")
      break;
    case "greenPepRight":
      $(".pizzaLeft").removeClass("greenPepL")
      $(".whole").removeClass("greenPepW")
      $("greenPepR").removeClass("hidden")
      $(".pizzaRight").addClass("greenPepR")
      break;
    case "roniWhole":
      $(".roniW").removeClass("hidden")
      $(".whole").addClass("roniW")
      break;
    case "roniLeft":
      $(".pizzaRight").removeClass("roniR")
      $(".whole").removeClass("roniW")
      $(".pizzaLeft").addClass("roniL")
      $(".roniL").removeClass("hidden")
      break;
    case "roniRight":
    $(".pizzaLeft").removeClass("roniL")
    $(".whole").removeClass("roniW")
    $(".pizzaRight").addClass("roniR")
    $(".roniR").removeClass("hidden")
    break;
    case "oliveWhole":
      $(".whole").addClass("oliveW")
      $(".oliveW").removeClass("hidden")
      break;
    case "oliveLeft":
      $(".pizzaRight").removeClass("oliveR")
      $(".whole").removeClass("oliveW")
      $(".oliveL").removeClass("hidden")
      $(".pizzaLeft").addClass("oliveL")
      break;
    case "oliveRight":
      $(".pizzaLeft").removeClass("oliveL")
      $(".whole").removeClass("oliveW")
      $("oliveR").removeClass("hidden")
      $(".pizzaRight").addClass("oliveR")
      break;
    }
  });
});


//what does the user see?

// the user should be able to see the pizza in real time as toppings get added
