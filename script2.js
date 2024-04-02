// File: script2.js
function compareNumbers(num1, num2) {
  if(num1 === num2) {
    alert("The numbers are equal.");
  } else if(num1 < num2) {
    alert("The num1 is less than num2.");
  } else {
    alert("The num1 is greater than num2.");
  }
}

// Example usage:
 //compareNumbers(5, 5); // Alerts: The numbers are equal.
 //compareNumbers(3, 5); // Alerts: The first number is less than the second number.
compareNumbers(10, 5); // Alerts: The first number is greater than the second number.
