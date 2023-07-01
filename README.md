# i18n-iso-countries-regions
i18n for ISO 3166 country and regions 

# i18n-iso-countries-regions

This package provides internationalization (i18n) support for ISO standard country and region codes. It allows you to retrieve localized country and region names based on the ISO codes.

## Installation

You can install `i18n-iso-countries-regions` via npm. Open your terminal and run the following command:

```bash
npm install i18n-iso-countries-regions


Usage
To use i18n-iso-countries-regions in your project, follow these steps:

1- Require the package in your JavaScript file:

const {
  getAllCountriesName,
  getAllCountriesCallingCode,
  getCallingCodeByCountryCode,
  getCallingCodeByCountryName,
  getRegionsByCountryCode,
  getRegionsByCountryName,
  getCountryInfoByCountryCode
} = require('i18n-iso-countries-regions');


2- Use the provided functions to retrieve country and region information:

getAllCountriesName(language): Returns an array of all countries with their ISO codes and localized names.

const allCountries = getAllCountriesName('en');
console.log(allCountries);
/* Example output: [{

3- getAllCountriesCallingCode(language): Returns an array of all countries with their ISO codes, localized names, and calling codes.

const allCountries = getAllCountriesName('en');
console.log(allCountries);
/* Example output: [

4-getCallingCodeByCountryCode(isoCode): Returns the calling code for a given ISO country code.

const callingCode = getCallingCodeByCountryCode('US');
console.log(callingCode);
// Output: "1" (for United States)

5- getCallingCodeByCountryName(countryName): Returns the calling code for a given country name.

const callingCode = getCallingCodeByCountryName('United States');
console.log(callingCode);
// Output: "1"

6- getRegionsByCountryCode(language, countryCode): Returns an array of regions for a given ISO country code, with their ISO codes and localized names.

const regions = getRegionsByCountryCode('en', 'US');
console.log(regions);


7- getRegionsByCountryName(language, countryName): Returns an array of regions for a given country name, with their ISO codes and localized names.

const regions = getRegionsByCountryName('en', 'United States');
console.log(regions);

8- Use the provided functions to retrieve country and region information:

getCountryInfoByCountryCode(language, countryCode): Returns an object containing comprehensive information about a country for the specified ISO country code and language

const countryInfo = getCountryInfoByCountryCode('en', 'US');
console.log(countryInfo);

Example output:
{
  iso: 'US',
  name: 'United States',
  callingCode: '1',
  regions: [
    { iso: 'CA', name: 'California' },
    { iso: 'NY', name: 'New York' },
    // ...
  ]
}



Note :
Customize the language parameter (optional):

By default, the functions accept a language parameter set to 'en' for English. You can pass a different language code to retrieve localized names in different languages.

That's it! You can now use i18n-iso-countries-regions to retrieve localized country and region information in your project.

Please note that this is a simplified example, and you may need to adapt it to your specific use case or provide additional information based on the functionalities your package offers.

### Supported languages

- English (en)
- Russian (ru)
- German (de)
- French (fr)
- Spanish (es)
- Chinese (zh)
- Hindi (hi)
- Portuguese (pt)
- Japanese (ja)
- Arabic (ar)
- Italian (it)
- Hebrew (he)
