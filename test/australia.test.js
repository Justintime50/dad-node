/* eslint-env node, mocha */
import { assert, expect } from 'chai';

import { list, random } from '../index.js';

describe('AU VT Address Data', function () {
  let address;
  let addresses;

  before(async function () {
    address = await random('AU_VT');
    addresses = await list('AU_VT');
  });

  it('returns a random VT address', function () {
    assert.equal(address.state, 'VIC');
  });

  it('returns a list of VT addresses with a length of 5', function () {
    assert.equal(addresses.length, 5);
  });

  it('returns only VIC addresses from the list', function () {
    addresses.forEach(function (singleAddress) {
      assert.equal(singleAddress.state, 'VIC');
    });
  });

  it('ensures the data structure of all VIC addresses are uniform', function () {
    addresses.forEach(function (singleAddress) {
      expect(singleAddress).to.contain.all.keys('street1', 'street2', 'city', 'state', 'zip', 'country');
    });
  });
});
