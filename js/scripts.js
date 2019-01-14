function convert() {
var gallon = parseFloat(prompt("What is the weight in gallons?"));

var liters = gallon / 0.26417;

return liters;
}

alert(convert());

function cups() {
  var cups = parseFloat(prompt("How many cups?"));
  var mill = cups*240;
  return mill
}
alert(cups());
