/* eslint-env node, mocha */
import { assert, expect } from 'chai';

import { list, random } from '../index.js';

describe('EU DE Address Data', function () {
  let address;
  let addresses;

  before(async function () {
    address = await random('EU_DE');
    addresses = await list('EU_DE');
  });

  it('returns a random DE address', function () {
    assert.equal(address.country, 'DE');
  });

  it('returns a list of DE addresses with a length of 5', function () {
    assert.equal(addresses.length, 5);
  });

  it('returns only DE addresses from the list', function () {
    addresses.forEach(function (singleAddress) {
      assert.equal(singleAddress.country, 'DE');
    });
  });

  it('ensures the data structure of all DE addresses are uniform', function () {
    addresses.forEach(function (singleAddress) {
      expect(singleAddress).to.contain.all.keys('street1', 'street2', 'city', 'state', 'zip', 'country');
    });
  });
});

describe('EU ES Address Data', function () {
  let address;
  let addresses;

  before(async function () {
    address = await random('EU_ES');
    addresses = await list('EU_ES');
  });

  it('returns a random ES address', function () {
    assert.equal(address.country, 'ES');
  });

  it('returns a list of ES addresses with a length of 5', function () {
    assert.equal(addresses.length, 5);
  });

  it('returns only ES addresses from the list', function () {
    addresses.forEach(function (singleAddress) {
      assert.equal(singleAddress.country, 'ES');
    });
  });

  it('ensures the data structure of all ES addresses are uniform', function () {
    addresses.forEach(function (singleAddress) {
      expect(singleAddress).to.contain.all.keys('street1', 'street2', 'city', 'state', 'zip', 'country');
    });
  });
});

describe('EU UK Address Data', function () {
  let address;
  let addresses;

  before(async function () {
    address = await random('EU_UK');
    addresses = await list('EU_UK');
  });

  it('returns a random UK address', function () {
    assert.equal(address.country, 'UK');
  });

  it('returns a list of UK addresses with a length of 5', function () {
    assert.equal(addresses.length, 5);
  });

  it('returns only UK addresses from the list', function () {
    addresses.forEach(function (singleAddress) {
      assert.equal(singleAddress.country, 'UK');
    });
  });

  it('ensures the data structure of all UK addresses are uniform', function () {
    addresses.forEach(function (singleAddress) {
      expect(singleAddress).to.contain.all.keys('street1', 'street2', 'city', 'state', 'zip', 'country');
    });
  });
});
