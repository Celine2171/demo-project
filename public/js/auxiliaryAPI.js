const celsiusToFahrenheit = function (celsius){
  if (typeof celsius !== 'number') {
    throw new Error('input needs to be a number');
  }
  return celsius * (9/5) + 32;
};

const fahrenheitToCelsius = function (fahrenheit){
  if (typeof fahrenheit !== 'number') {
    throw new Error('input needs to be a number');
  }
  return (fahrenheit - 32) * (5/9);
};

const getGreetingDependOnTime = function (myDate) {
  const hours = myDate.getHours();

  if (hours >= 6 && hours < 12) {
    return 'Guten Morgen';
  }
  else if (hours >= 12 && hours < 18) {
    return 'Guten Tag';
  }
  else if (hours >= 18 && hours < 22) {
    return 'Guten Abend';
  }
  else {
    return 'Gute Nacht';
  }
};

module.exports = {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  getGreetingDependOnTime
};
