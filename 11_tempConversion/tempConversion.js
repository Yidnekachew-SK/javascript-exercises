const convertToCelsius = function(temprature1) {
  let celsius = (temprature1 - 32) * 5 / 9;
  celsius = Math.round(celsius * 10) / 10;
  return celsius;
};

const convertToFahrenheit = function(temprature2) {
  let fahrenheit = (temprature2 * 9 / 5) + 32;
  fahrenheit = Math.round(fahrenheit * 10) / 10;
  return fahrenheit;
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
