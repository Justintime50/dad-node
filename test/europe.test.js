/* eslint-env node, mocha */
const assert = require('chai').assert;
const expect = require('chai').expect;
const dad = require('../index');

describe('EU DE Address Data', function () {
  const address = dad.random('EU_DE');
  const addresses = dad.list('EU_DE');

  it('returns a random DE address', function () {
    assert.equal(address.country, 'DE');
  });

  it('returns a list of DE addresses with a length of 5', function () {
    assert.equal(addresses.length, 5);
  });

  addresses.forEach(function (singleAddress) {
    it(`returns "${singleAddress.street1}" from a list of DE addresses`, function () {
      assert.equal(singleAddress.country, 'DE');
    });
  });

  addresses.forEach(function (singleAddress) {
    it(`ensures the data structure of "${singleAddress.street1}" is uniform`, function () {
      expect(singleAddress).to.contain.all.keys('street1', 'street2', 'city', 'state', 'zip', 'country');
    });
  });
});

describe('EU ES Address Data', function () {
  const address = dad.random('EU_ES');
  const addresses = dad.list('EU_ES');

  it('returns a random ES address', function () {
    assert.equal(address.country, 'ES');
  });

  it('returns a list of ES addresses with a length of 5', function () {
    assert.equal(addresses.length, 5);
  });

  addresses.forEach(function (singleAddress) {
    it(`returns "${singleAddress.street1}" from a list of ES addresses`, function () {
      assert.equal(singleAddress.country, 'ES');
    });
  });

  addresses.forEach(function (singleAddress) {
    it(`ensures the data structure of "${singleAddress.street1}" is uniform`, function () {
      expect(singleAddress).to.contain.all.keys('street1', 'street2', 'city', 'state', 'zip', 'country');
    });
  });
});

describe('EU UK Address Data', function () {
  const address = dad.random('EU_UK');
  const addresses = dad.list('EU_UK');

  it('returns a random UK address', function () {
    assert.equal(address.country, 'UK');
  });

  it('returns a list of UK addresses with a length of 5', function () {
    assert.equal(addresses.length, 5);
  });

  addresses.forEach(function (singleAddress) {
    it(`returns "${singleAddress.street1}" from a list of UK addresses`, function () {
      assert.equal(singleAddress.country, 'UK');
    });
  });

  addresses.forEach(function (singleAddress) {
    it(`ensures the data structure of "${singleAddress.street1}" is uniform`, function () {
      expect(singleAddress).to.contain.all.keys('street1', 'street2', 'city', 'state', 'zip', 'country');
    });
  });
});
