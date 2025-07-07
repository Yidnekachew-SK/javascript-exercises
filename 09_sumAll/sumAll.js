const sumAll = function(number1, number2) {
	let totalSum = 0;
	if(typeof(number1) != 'number' || typeof(number2) != 'number'){
		totalSum = "ERROR";
	}else if(Number.isInteger(number1) === false || Number.isInteger(number2) === false){
		totalSum = "ERROR";
	} else if(number1 < 0 || number2 < 0){
		totalSum = "ERROR";
	} else if(number1 < number2){
		for(let i = number1; i <= number2; i++){
			totalSum += i;
		}
	} else if(number1 > number2) {
		for(let i = number2; i <= number1; i++){
			totalSum += i;
		}
	
	} else {
		totalSum = "ERROR";
	}
	
	return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
