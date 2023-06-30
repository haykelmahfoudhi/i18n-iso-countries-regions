const countriesData = require('./data/iso3166.json');

function getAllCountriesName(language = 'en') {
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

module.exports = {
  getAllCountriesName,
  getAllCountriesCallingCode,
  getCallingCodeByCountryName,
  getCallingCodeByCountryCode,
  getRegionsByCountryCode,
  getRegionsByCountryName
};





