function createNumberArray(userInput) {
  let numberArray = [];
  let i = 0;
  for (let i = 0; i <= userInput; i ++) {
    let stringNumber = i.toString();
    if (stringNumber.includes("3")) {
      numberArray.push(" Won't you be my neighbor?");
    } else {
      numberArray.push(" " + stringNumber);
    }
  }
  return numberArray;
}

$(document).ready(function() {
  $("#generateList").click(function(event) {
    event.preventDefault();
    let userInput = parseInt($("input#userInput").val());
    let numberArray = createNumberArray(userInput);
    $("#showLater").text(numberArray);

  });
});