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
/* Output: [
  { iso: 'AD', name: 'Andorra' },
  { iso: 'AE', name: 'United Arab Emirates' },
  { iso: 'AF', name: 'Afghanistan' },
  { iso: 'AG', name: 'Antigua and Barbuda' },
  // ... 
]

3- getAllCountriesCallingCode(language): Returns an array of all countries with their ISO codes, localized names, and calling codes.

const allCountries = getAllCountriesCallingCode('fr');
console.log(allCountries);
/* Output: [
  { iso: 'AD', name: 'Andorre', callingCode: '376' },
  { iso: 'AE', name: 'Émirats arabes unis', callingCode: '971' },
  { iso: 'AF', name: 'Afghanistan', callingCode: '93' },
  { iso: 'AG', name: 'Antigua-et-Barbuda', callingCode: '1' },
  { iso: 'AI', name: 'Anguilla', callingCode: '1' },
  // ...
]

4-getCallingCodeByCountryCode(isoCode): Returns the calling code for a given ISO country code.

const callingCode = getCallingCodeByCountryCode('US');
console.log(callingCode);
/* Output: "1" (for United States)

5- getCallingCodeByCountryName(countryName): Returns the calling code for a given country name.

const callingCode = getCallingCodeByCountryName('United States');
console.log(callingCode);
/* Output: "1"

6- getRegionsByCountryCode(language, countryCode): Returns an array of regions for a given ISO country code, with their ISO codes and localized names.

const regions = getRegionsByCountryCode('fr', 'TN');
console.log(regions);
/* Output:[
  { iso: '22', name: 'Gouvernorat de Zaghouan' },
  { iso: '11', name: 'Gouvernorat de Tunis' },
  { iso: '72', name: 'Gouvernorat de Tozeur' },
  { iso: '83', name: 'Gouvernorat de Tataouine' },
  { iso: '51', name: 'Gouvernorat de Sousse' },
  // ...
  ]

7- getRegionsByCountryName(language, countryName): Returns an array of regions for a given country name, with their ISO codes and localized names.

const regions = getRegionsByCountryName('fr', 'Andorre');
console.log(regions);
/* Output:[
  { iso: '06', name: 'Sant Julià de Lòria' },
  { iso: '05', name: 'Ordino' },
  { iso: '04', name: 'La Massana' },
  { iso: '03', name: 'Encamp' },
  { iso: '02', name: 'Canillo' },
  { iso: '07', name: 'Andorre-la-Vieille' },
  { iso: '08', name: 'Escaldes-Engordany' }
]

8- Use the provided functions to retrieve country and region information:

getCountryInfoByCountryCode(language, countryCode): Returns an object containing comprehensive information about a country for the specified ISO country code and language

const countryInfo = getCountryInfoByCountryCode('en', 'US');
console.log(countryInfo);
/* Output:
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
