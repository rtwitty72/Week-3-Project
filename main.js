'strict';

var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;

for (var i = 0; i < keys.length; i++) {
  keys[i].onclick = function(e) {
    // Get the input and button values
    var input = document.querySelector('.input');
    var inputVal = input.innerHTML;
    var btnVal = this.getAttribute("data-value");

    if (btnVal == 'C') {
      input.innerHTML = '';
      decimalAdded = false;
    }

    // Calculates and displays result
    else if (btnVal == '=') {
      var equation = inputVal;
      var lastChar = equation[equation.length - 1];

      equation = equation.replace(/x/g, '*').replace(/÷/g, '/');

      // Removes last character if it is an operator or a decimal.
      if (operators.indexOf(lastChar) > -1 || lastChar == '.')
        equation = equation.replace(/.$/, '');

      if (equation)
      //checks input and removes quotation marks
        input.innerHTML = eval(equation);

      decimalAdded = false;
    } else if (operators.indexOf(btnVal) > -1) {

      // Gets the last character from the equation
      var lastChar = inputVal[inputVal.length - 1];


      if (inputVal !== '' && operators.indexOf(lastChar) == -1)
        input.innerHTML += btnVal;

      else if (inputVal === '' && btnVal == '-')
        input.innerHTML += btnVal;

      // Replaces the last operator with pressed operator
      if (operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
        input.innerHTML = inputVal.replace(/.$/, btnVal);
      }

      decimalAdded = false;
    } else if (btnVal == '.') {
      if (!decimalAdded) {
        input.innerHTML += btnVal;
        decimalAdded = true;
      }
    } else {
      input.innerHTML += btnVal;
    }

    e.preventDefault();
  };
}
