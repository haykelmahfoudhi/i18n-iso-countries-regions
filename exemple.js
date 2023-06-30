const test = require('./index')



// Example usage of getAllCountries
const countries = test.getAllCountriesName('de');
console.log(countries)

// Example usage of getRegionsByCountryCode
const regionsByCode = test.getRegionsByCountryCode('fr', 'TN');
console.log(regionsByCode)

// Example usage of getRegionsByCountryName
const regionsByName = test.getRegionsByCountryName('fr', 'Andorre');
console.log(regionsByName)

// Example usage of getCountriesCallingCode
const callingCodeByCountryCode  = test.getCallingCodeByCountryCode('TN');
console.log(callingCodeByCountryCode)

// Example usage of getCallingCodeByCountryName
const callingCodeByCountryName = test.getCallingCodeByCountryName('Tunisie');
console.log(callingCodeByCountryName);

// Example usage of getAllCountriesCallingCodes
const allCallingCode = test.getAllCountriesCallingCode('fr');
console.log(allCallingCode);