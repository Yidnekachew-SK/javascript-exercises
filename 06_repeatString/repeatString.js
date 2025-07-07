const repeatString = function(text, number) {
	let finalString = ""
	if(number < 0){
		finalString = "ERROR";
	}
	else {
		for(let i = number; i>0; i--){
			finalString += text;
		}
	}
	return finalString;
};

// Do not edit below this line
module.exports = repeatString;
