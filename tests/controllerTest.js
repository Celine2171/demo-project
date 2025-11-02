const expect = require('chai').expect;
const apiTemperature = require('../public/js/auxiliaryAPI');

describe('fahrenheitToCelsius()', function(){
  it('should return 0°C for 32°F', function() {
    const result = apiTemperature.fahrenheitToCelsius(32);
    expect(result).to.equal(0);
  });

  it('should return 100°C for 212°F', function() {
    const result = apiTemperature.fahrenheitToCelsius(212);
    expect(result).to.equal(100);
  });

  it('should return -40°C for -40°F', function() {
    const result = apiTemperature.fahrenheitToCelsius(-40);
    expect(result).to.equal(-40);
  });

  it('should handle decimal numbers correctly', function() {
    const result = apiTemperature.fahrenheitToCelsius(98.6);
    expect(result).to.be.approximately(37, 0.1);
  });
});

describe('celsiusToFahrenheit()', function(){
  it('should return 32°F for 0°C', function() {
    const result = apiTemperature.celsiusToFahrenheit(0);
    expect(result).to.equal(32);
  });

  it('should return 212°F for 100°C', function() {
    const result = apiTemperature.celsiusToFahrenheit(100);
    expect(result).to.equal(212);
  });

  it('should return -40°F for -40°C', function() {
    const result = apiTemperature.celsiusToFahrenheit(-40);
    expect(result).to.equal(-40);
  });

  it('should handle decimal numbers correctly', function() {
    const result = apiTemperature.celsiusToFahrenheit(37);
    expect(result).to.be.approximately(98.6, 0.1);
  });
});

describe('getGreetingDependOnTime()', function(){
  it('should return \'Guten Morgen\' in the morning (6:00-11:59)', function() {
    const morningTime = new Date();
    morningTime.setHours(8, 0);
    const result = apiTemperature.getGreetingDependOnTime(morningTime);
    expect(result).to.equal('Guten Morgen');
  });

  it('should return \'Guten Abend\' in the evening (18:00-21:59)', function() {
    const eveningTime = new Date();
    eveningTime.setHours(20, 0);
    const result = apiTemperature.getGreetingDependOnTime(eveningTime);
    expect(result).to.equal('Guten Abend');
  });

  it('should return \'Gute Nacht\' very early (before 6:00)', function() {
    const earlyMorning = new Date();
    earlyMorning.setHours(5, 0);
    const result = apiTemperature.getGreetingDependOnTime(earlyMorning);
    expect(result).to.equal('Gute Nacht');
  });

  it('should return \'Gute Nacht\' very late (after 22:00)', function() {
    const lateNight = new Date();
    lateNight.setHours(23, 0);
    const result = apiTemperature.getGreetingDependOnTime(lateNight);
    expect(result).to.equal('Gute Nacht');
  });
});
