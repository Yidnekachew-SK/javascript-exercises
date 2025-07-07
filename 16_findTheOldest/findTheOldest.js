const findTheOldest = function(people) {
	for(let i = 0; i < people.length; i++){
		if(people[i].yearOfDeath === undefined){
			let date = new Date();
			people[i].yearOfDeath = date.getFullYear(); 
		}
	}
	let oldPeople = people.reduce((olderPerson, currentPerson) => 
					(currentPerson.yearOfDeath - currentPerson.yearOfBirth) > 
					(olderPerson.yearOfDeath - olderPerson.yearOfBirth) ?
					currentPerson : olderPerson);
	return oldPeople;
};

// Do not edit below this line
module.exports = findTheOldest;
