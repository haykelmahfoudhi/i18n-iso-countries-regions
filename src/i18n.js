const countriesData = require('./data/iso3166.json');

const supportedLanguages = ['en', 'ru', 'de', 'fr', 'es', 'zh', 'hi', 'pt', 'ja', 'ar', 'it', 'he'];

function validateLanguage(language) {
  if (supportedLanguages.includes(language)) {
    return language;
  } else {
    return 'en'; // Fallback to 'en' if the requested language is not supported
  }
}

function getAllCountriesName(language = 'en') {
  language = validateLanguage(language);

  const allCountries = [];

  for (const countryCode in countriesData) {
    const countryData = countriesData[countryCode];

    if (countryData.names && countryData.names[language]) {
      const country = {
        iso: countryCode,
        name: countryData.names[language]
      };

      allCountries.push(country);
    }
  }

  return allCountries;
}

function getAllCountriesCallingCode(language = 'en') {
  language = validateLanguage(language);

  const allCountries = [];

  for (const countryCode in countriesData) {
    const countryData = countriesData[countryCode];

    if (countryData.names && countryData.names[language]) {
      const country = {
        iso: countryCode,
        name: countryData.names[language],
        callingCode: countryData.callingCode
      };

      allCountries.push(country);
    }
  }

  return allCountries;
}

function getCallingCodeByCountryCode(isoCode) {
  if (countriesData.hasOwnProperty(isoCode)) {
    return countriesData[isoCode].callingCode;
  } else {
    return null; // Return null if the ISO code is not found
  }
}

function getCallingCodeByCountryName(countryName) {
  for (const isoCode in countriesData) {
    if (countriesData.hasOwnProperty(isoCode)) {
      const names = countriesData[isoCode].names;
      for (const key in names) {
        if (names.hasOwnProperty(key) && names[key].toLowerCase() === countryName.toLowerCase()) {
          return countriesData[isoCode].callingCode;
        }
      }
    }
  }
  return null; // Return null if the country name is not found
}


function getRegionsByCountryCode(language, countryCode) {
  language = validateLanguage(language);

  const regions = [];
  
  if (countriesData[countryCode] && countriesData[countryCode].regions) {
    const countryData = countriesData[countryCode];
    const countryRegions = countryData.regions;

    for (const regionData of countryRegions) {
      if (regionData.names && regionData.names[language]) {
        const region = {
          iso: regionData.iso,
          name: regionData.names[language]
        };

        regions.push(region);
      }
    }
  }

  return regions;
}

function getRegionsByCountryName(language, countryName) {
  language = validateLanguage(language);

  const regions = [];
  
  for (const countryCode in countriesData) {
    const countryData = countriesData[countryCode];

    if (countryData.names && countryData.names[language] && countryData.names[language] === countryName) {
      const countryRegions = countryData.regions;

      for (const regionData of countryRegions) {
        if (regionData.names && regionData.names[language]) {
          const region = {
            iso: regionData.iso,
            name: regionData.names[language]
          };

          regions.push(region);
        }
      }

      break;
    }
  }

  return regions;
}

function getCountryInfoByCountryCode(language, countryCode) {
  language = validateLanguage(language);

  if (countriesData[countryCode] && countriesData[countryCode].names && countriesData[countryCode].names[language]) {
    const countryData = countriesData[countryCode];
    const countryInfo = {
      iso: countryCode,
      name: countryData.names[language],
      callingCode: countryData.callingCode,
      regions: getRegionsByCountryCode(language, countryCode)
    };

    return countryInfo;
  }

  return null; // Return null if the country code is not found or does not have a name in the requested language
}

module.exports = {
  getAllCountriesName,
  getAllCountriesCallingCode,
  getCallingCodeByCountryName,
  getCallingCodeByCountryCode,
  getRegionsByCountryCode,
  getRegionsByCountryName,
  getCountryInfoByCountryCode
};
