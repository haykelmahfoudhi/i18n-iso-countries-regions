const i18n = require('i18n-iso-countries-regions')



// Example usage of getAllCountries
const countries = i18n.getAllCountriesName('de');
console.log(countries)

// Example usage of getRegionsByCountryCode
const regionsByCode = i18n.getRegionsByCountryCode('fr', 'TN');
console.log(regionsByCode)

// Example usage of getRegionsByCountryName
const regionsByName = i18n.getRegionsByCountryName('fr', 'Andorre');
console.log(regionsByName)

// Example usage of getCountriesCallingCode
const callingCodeByCountryCode  = i18n.getCallingCodeByCountryCode('TN');
console.log(callingCodeByCountryCode)

// Example usage of getCallingCodeByCountryName
const callingCodeByCountryName = i18n.getCallingCodeByCountryName('Tunisie');
console.log(callingCodeByCountryName);

// Example usage of getAllCountriesCallingCodes
const allCallingCode = i18n.getAllCountriesCallingCode('fr');
console.log(allCallingCode);

// Example usage of getCountryInfoByCountryCode
const countryInfo = i18n.getCountryInfoByCountryCode('fr', 'ES')
console.log(countryInfo)