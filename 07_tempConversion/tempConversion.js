const convertToCelsius = function(temp) {
  let tempInCelsius = (temp - 32) * 5/9;
  return parseFloat(tempInCelsius.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  let tempInFahrenheit = temp * 9/5 + 32;
  return parseFloat(tempInFahrenheit.toFixed(1));
};

convertToCelsius(100)

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
