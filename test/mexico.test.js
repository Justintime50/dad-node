/* eslint-env node, mocha */
import { assert, expect } from 'chai';

import { list, random } from '../index.js';

describe('MX MX Address Data', function () {
  let address;
  let addresses;

  before(async function () {
    address = await random('MX_MX');
    addresses = await list('MX_MX');
  });

  it('returns a random MX address', function () {
    assert.equal(address.country, 'MX');
  });

  it('returns a list of MX addresses with a length of 5', function () {
    assert.equal(addresses.length, 5);
  });

  it('returns only MX addresses from the list', function () {
    addresses.forEach(function (singleAddress) {
      assert.equal(singleAddress.country, 'MX');
    });
  });

  it('ensures the data structure of all MX addresses are uniform', function () {
    addresses.forEach(function (singleAddress) {
      expect(singleAddress).to.contain.all.keys('street1', 'street2', 'city', 'state', 'zip', 'country');
    });
  });
});
