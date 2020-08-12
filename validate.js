// Radio buttons show/hide order number
var orderProblem1 = document.getElementById('radio-choice1');
var orderProblem2 = document.getElementById('radio-choice2');
var orderProblem3 = document.getElementById('radio-choice3');
var orderProblemText = document.getElementById('orderproblemdiv');
orderProblem1.addEventListener('click', function() {
  orderProblemText.style = "display: none;";
});
orderProblem2.addEventListener('click', function () {
  orderProblemText.style = "display: none;";
});
orderProblem3.addEventListener('click', function() {
  orderProblemText.style = "display: inline-block;";
});

function validateInquiry() {
    validateName();
  }
  
  // Code for this validation method was provided in the lecture 10 slides
  function validateName() {
    var allAlpha = true;
    var name = document.getElementById("inquiry-name");
    var inputValue = name.value.trim();
    inputValue = inputValue.toUpperCase();
  
    for (var i = 0; i < inputValue.length; i++) {
         if (inputValue.charAt(i) < "A" || inputValue.charAt(i) > "Z" )  { allAlpha = false; }
    }  
  
    if (!allAlpha){
         alert("Name must contain only letters");
         name.focus();
         return false;
    } 
    return true;
  } 
  
  