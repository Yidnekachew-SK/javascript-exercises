const fibonacci = function(sequenceNumber) {
	let sequence = [0,1];
	if(sequenceNumber < 0){
		return "OOPS";
	}
	for(let i = 2; i <= sequenceNumber; i++){
		sequence[i] = sequence[i-1] + sequence[i-2];
	}
	return sequence[sequenceNumber];
};

// Do not edit below this line
module.exports = fibonacci;
