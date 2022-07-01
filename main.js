//Three functions
const result = document.getElementById("display");
// display()

function display(value) {
  result.value += value;
}

//clearDisplay

function clearDisplay() {
  result.value = "";
}
//calculate

function calculate() {
  var q = eval(result.value);
  result.value = q;
}
