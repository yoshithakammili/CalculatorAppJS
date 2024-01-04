let display = document.getElementById('display');
let expression = '';

function appendToDisplay(value) {
  expression += value;
  display.value = expression;
}

function clearDisplay() {
  expression = expression.slice(0,-1);
  display.value = expression;

}

function reset() {
  expression = '';
  display.value = '0';
  }

function calculate() {
  try {
    let result = eval(expression);
    
    if (Number.isFinite(result)) {
      //display.value = result.toFixed(3); 
      display.value = parseFloat(result.toPrecision(3)).toString();
      expression = '';
    } else {
      display.value = 'Error';
      expression = '';
    }
  } catch (error) {
    display.value = 'Error';
    expression = '';
  }
}