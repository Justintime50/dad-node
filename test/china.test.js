/* eslint-env node, mocha */
import { assert, expect } from 'chai';

import { list, random } from '../index.js';

describe('CN BJ Address Data', function () {
  let address;
  let addresses;

  before(async function () {
    address = await random('CN_BJ');
    addresses = await list('CN_BJ');
  });

  it('returns a random BJ address', function () {
    assert.equal(address.country, 'CN');
  });

  it('returns a list of BJ addresses with a length of 5', function () {
    assert.equal(addresses.length, 5);
  });

  it('returns only BJ addresses from the list', function () {
    addresses.forEach(function (singleAddress) {
      assert.equal(singleAddress.country, 'CN');
    });
  });

  it('ensures the data structure of all BJ addresses are uniform', function () {
    addresses.forEach(function (singleAddress) {
      expect(singleAddress).to.contain.all.keys('street1', 'street2', 'city', 'state', 'zip', 'country');
    });
  });
});

describe('CN HK Address Data', function () {
  let address;
  let addresses;

  before(async function () {
    addresses = await list('CN_HK');
    address = await random('CN_HK');
  });

  it('returns a random HK address', function () {
    assert.equal(address.state, 'Hong Kong');
  });

  it('returns a list of HK addresses with a length of 5', function () {
    assert.equal(addresses.length, 5);
  });

  it('returns only Hong Kong addresses from the list', function () {
    addresses.forEach(function (singleAddress) {
      assert.equal(singleAddress.state, 'Hong Kong');
    });
  });

  it('ensures the data structure of all Hong Kong addresses are uniform', function () {
    addresses.forEach(function (singleAddress) {
      expect(singleAddress).to.contain.all.keys('street1', 'street2', 'city', 'state', 'zip', 'country');
    });
  });
});
