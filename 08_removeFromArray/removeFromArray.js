const removeFromArray = function(array, number) {
	for(let i = 0; i < array.length; i++) {
		if(number === array[i]){
			array.splice(i,1);
		}
	}
	return array;
};

console.log(removeFromArray([1,2,3,4],3));
// Do not edit below this line
module.exports = removeFromArray;
