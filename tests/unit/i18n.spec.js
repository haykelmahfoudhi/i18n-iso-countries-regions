
const assert = require('assert');


const { getAllCountriesName, getRegionsByCountryCode, getRegionsByCountryName, getCallingCodeByCountryName, getCallingCodeByCountryCode  } = require('../../src/i18n');

// Test: should return an array of countries with their ISO codes and names
assert.doesNotThrow(() => {
  const result = getAllCountriesName();
  assert(Array.isArray(result));

  const firstCountry = result[0];
  assert(firstCountry.hasOwnProperty('iso'));
  assert(firstCountry.hasOwnProperty('name'));
});

// Test: should return country names in English by default
assert.doesNotThrow(() => {
  const result = getAllCountriesName();
  const englishCountry = result.find(country => country.iso === 'US');
  assert.strictEqual(englishCountry.name, 'United States');
});

// Test: should return country names in the specified language
assert.doesNotThrow(() => {
  const result = getAllCountriesName('fr');
  const frenchCountry = result.find(country => country.iso === 'FR');
  assert.strictEqual(frenchCountry.name, 'France');
});
