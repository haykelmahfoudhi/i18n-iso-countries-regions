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

function getCountriesCallingCode(isoCode) {
  if (countriesData.hasOwnProperty(isoCode)) {
    return countriesData[isoCode].callingCode;
  } else {
    return null; // Return null or any other default value if the ISO code is not found
  }
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
  getCountriesCallingCode,
  getRegionsByCountryCode,
  getRegionsByCountryName
};





