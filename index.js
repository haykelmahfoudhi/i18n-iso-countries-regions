const { getAllCountriesName, getRegionsByCountryCode, getRegionsByCountryName, getCallingCodeByCountryName, getCallingCodeByCountryCode, getAllCountriesCallingCode, getCountryInfoByCountryCode  } = require('./src/i18n');



module.exports = {
  getAllCountriesName,
  getAllCountriesCallingCode,
  getCallingCodeByCountryName,
  getCallingCodeByCountryCode,
  getRegionsByCountryCode,
  getRegionsByCountryName,
  getCountryInfoByCountryCode
};