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

// Runs the validation methods and if any return false, will not submit the form
function validateInput() {
  var name = validateName();
  var post = validatePostalCode();
  var email = validateEmail();
  var text = validateInquiryText();
  var city = validateCity();
  var orderNo = validateOrderNo();
  if (name == true && post == true && email == true && text == true && city == true && orderNo == true) {
    return true;
  }
  else {
    return false;
  }
}

  // Checks the entered name to make sure that the field is not empty and that
  // the input consists only of letters.
  // Code for the letter validation was provided in the lecture 10 slides.
  function validateName() {
    var allAlpha = true;
    var name = document.getElementById("inquiry-name");
    var inputValue = name.value.trim();
    inputValue = inputValue.toUpperCase();
  
    for (var i = 0; i < inputValue.length; i++) {
         if (inputValue.charAt(i) < "A" || inputValue.charAt(i) > "Z" )  { allAlpha = false; }
    }  
    if (!allAlpha){
        alert("Name must contain only letters.");
        name.focus();
        return false;
    }
    if (inputValue.length == 0) {
      alert("Name field is empty. Please tell us your name.");
      name.focus();
      return false;
    }
    else {
      return true;
    }
  } 

  // Checks the entered postal code against a regular expression
  // that takes into account the Canadian format.
  function validatePostalCode() {
    var code = document.getElementById("inquiry-postalcode");
    var codevalue = code.value.trim();
    var regex = /^[A-Za-z]\d[A-Za-z][\s|-]?\d[A-Za-z]\d$/;
    var match = codevalue.match(regex);
    if(match == null) {
      alert("Postal Code must be formatted correctly.");
      code.focus();
      return false;
    }
    return true;
  }

  // Checks the entered email against a regular expression.
  // Regex for email is from https://www.w3resource.com
  function validateEmail() {
    var email = document.getElementById("inquiry-email");
    var emailvalue = email.value.trim();
    emailvalue = emailvalue.toUpperCase();
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var match = emailvalue.match(regex);
    if (match == null) {
      alert("Email must be formatted correctly.");
      email.focus();
      return false;
    }
    return true;
  }

  // Verifies that the inquiry box is not empty.
  function validateInquiryText() {
    var inquiry = document.getElementById("inquiry-text");
    var inquiryvalue = inquiry.value.trim();
    if (inquiryvalue.length == 0) {
      alert("Inquiry text field is empty. Please tell us what the issue is.");
      inquiry.focus();
      return false;
    }
    return true;
  }

  // Verifies that the city field is not empty.
  function validateCity() {
    var city = document.getElementById("inquiry-city");
    var cityvalue = city.value.trim();
    if (cityvalue.length == 0) {
      alert("City text field is empty. Please tell us where you are located.");
      city.focus();
      return false;
    }
    return true;
  }

  // If OrderNo field remains hidden and empty, this will return true.
  // Otherwise, it will check to see that the input is only numbers.
  function validateOrderNo() {
    var orderNo = document.getElementById("inquiryOrderNo");
    var regex = /^\d+$/;
    var match = orderNo.value.match(regex);
    if (orderNo.value.length == 0) {
      return true;
    }
    if (match == null) {
      alert("Order number must consist of numbers only.");
      orderNo.focus();
      return false;
    }
    return true;
  }