const palindromes = function (text) {
	let combinedWord = text.replace(/[!,.\s]/g,"").toLowerCase();
	console.log(combinedWord);
	let reversedText = "";
	let isPalindrome;
	for(let i = combinedWord.length - 1; i >= 0; i--){
		reversedText += combinedWord[i];
	}
	console.log(reversedText);
	if(combinedWord === reversedText){
		isPalindrome = true;
	} else{
		isPalindrome = false;
	}
	return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
