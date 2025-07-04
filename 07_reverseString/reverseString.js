const reverseString = function(word) {
	let reversedText = "";
	for(let i = word.length - 1; i >= 0; i--){
		reversedText += word[i];
	}
	return reversedText;
};

// Do not edit below this line
module.exports = reverseString;
