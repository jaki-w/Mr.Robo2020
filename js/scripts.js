function createNumberArray(userInput, name) {
  let numberArray = [];
  let i = 0;
  if (!isNaN(userInput)) {
    for (let i = 0; i <= userInput; i ++) {
      let stringNumber = i.toString();
      if (stringNumber.includes("3")) {
        numberArray.push( " " + name + ", won't you be my neighbor?");
      } else if (stringNumber.includes("2")) {
        numberArray.push(" Boop!");
      } else if (stringNumber.includes("1")) {
        numberArray.push(" Beep!");
      } else {
        numberArray.push(" " + stringNumber);
      }
    }
    return numberArray;
  } else {
    alert("Kindly enter whole numbers only!");
  }
}

function checkForNegatives(userInput) {
  if (userInput < 0) {
    alert("Kindly enter whole numbers only!");
  }
}

$(document).ready(function() {
  $("#generateList").click(function(event) {
    event.preventDefault();
    let userInput = parseInt($("input#userInput").val());
    let name = $("input#userName").val();
    checkForNegatives(userInput);
    let numberArray = createNumberArray(userInput, name);
    $(".showLater").show();
    $("#results").text(numberArray);
  });
  
  $("#reverseList").click(function(event) {
    event.preventDefault();
    let userInput = parseInt($("input#userInput").val());
    let name = $("input#userName").val();
    checkForNegatives(userInput);
    let numberArray = createNumberArray(userInput, name).reverse();
    $(".showLater").show();
    $("#results").text(numberArray);

  })
});