/* eslint-env node, mocha */
import { assert, expect } from 'chai';

import { list, random } from '../index.js';

describe('CA BC Address Data', function () {
  let address;
  let addresses;

  before(async function () {
    address = await random('CA_BC');
    addresses = await list('CA_BC');
  });

  it('returns a random BC address', function () {
    assert.equal(address.state, 'BC');
  });

  it('returns a list of BC addresses with a length of 5', function () {
    assert.equal(addresses.length, 5);
  });

  it('returns only BC addresses from the list', function () {
    addresses.forEach(function (singleAddress) {
      assert.equal(singleAddress.state, 'BC');
    });
  });

  it('ensures the data structure of all BC addresses are uniform', function () {
    addresses.forEach(function (singleAddress) {
      expect(singleAddress).to.contain.all.keys('street1', 'street2', 'city', 'state', 'zip', 'country');
    });
  });
});
