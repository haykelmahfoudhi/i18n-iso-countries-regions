const { getAllCountriesName, getRegionsByCountryCode, getRegionsByCountryName, getCallingCodeByCountryName, getCallingCodeByCountryCode, getAllCountriesCallingCode  } = require('./src/i18n');



module.exports = {
  getAllCountriesName,
  getAllCountriesCallingCode,
  getCallingCodeByCountryName,
  getCallingCodeByCountryCode,
  getRegionsByCountryCode,
  getRegionsByCountryName
};