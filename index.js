const { getAllCountriesName, getRegionsByCountryCode, getRegionsByCountryName  } = require('./src/i18n');


// Example usage of getAllCountries
const countries = getAllCountriesName('ar');

// Example usage of getRegionsByCountryCode
const regionsByCode = getRegionsByCountryCode('fr', 'TN');

// Example usage of getRegionsByCountryName
const regionsByName = getRegionsByCountryName('fr', 'Andorre');



// const fs = require('fs');
// const libPhone = require('libphonenumber-js');

// // Read the ISO3166 JSON file
// const iso3166Data = fs.readFileSync('./src/data/iso3166.json', 'utf8');
// const countries = JSON.parse(iso3166Data);

// // Iterate over each country
// for (const countryCode in countries) {
//   try {
//     // Get the calling code for the country
//     const callingCode = libPhone.getCountryCallingCode(countryCode);

//     // Add the callingCode property to the country
//     countries[countryCode].callingCode = callingCode;
//   } catch (error) {
//     // Handle unknown country code
//     countries[countryCode].callingCode = null;
//   }
// }

// // Save the modified data to a new JSON file
// const iso3166_2Data = JSON.stringify(countries, null, 2);
// fs.writeFileSync('./src/data/iso3166-2.json', iso3166_2Data, 'utf8');