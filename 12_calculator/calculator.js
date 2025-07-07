const add = function(number1, number2) {
	let sum = number1 + number2;
	return sum;
};

const subtract = function(number1,number2) {
	let difference = number1 - number2;
	return difference;
};

const sum = function(array) {
	let totalSum = 0;
	for(let i = 0; i < array.length; i++){
		totalSum += array[i];
	}
	return totalSum;
};

const multiply = function(array) {
	let product = 1;
	for(let i = 0; i < array.length; i++){
		product *= array[i];
	}
	return product;
};

const power = function(base, exponent) {
	let product = 1;
	for(let i = 0; i < exponent; i++){
		product *= base;
	}
	return product;
};

const factorial = function(number) {
	let result = 1;
	for(let i = number; i > 0; i--){
		result *= i;
	}
	return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
