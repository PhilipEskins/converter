function convert() {
var gallon = parseFloat(prompt("What is the weight in gallons?"))

var liters = gallon / 0.26417;

return liters;
}

alert(convert());
