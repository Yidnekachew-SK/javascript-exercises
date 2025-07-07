const removeFromArray = function(array, ...args) {
	for(let j = 1; j < arguments.length; j++) {
		for(let i = array.length -1; i >= 0; i--){
			if(array[i]  === arguments[j]){
				array.splice(i,1);
			}
		}
		
	}
	return array;
};

// Do not edit below this line
module.exports = removeFromArray;
