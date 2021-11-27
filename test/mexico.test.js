/* eslint-env node, mocha */
import { assert, expect } from 'chai'
import * as dad from '../index.js'

describe('MX MX Address Data', function () {
  const address = dad.random('MX_MX')
  const addresses = dad.list('MX_MX')

  it('returns a random MX address', function () {
    assert.equal(address.country, 'MX');
  })

  it('returns a list of MX addresses with a length of 5', function () {
    assert.equal(addresses.length, 5);
  })

  addresses.forEach(function (singleAddress) {
    it(`returns "${singleAddress.street1}" from a list of MX addresses`, function () {
      assert.equal(singleAddress.country, 'MX')
    })
  })

  addresses.forEach(function (singleAddress) {
    it(`ensures the data structure of "${singleAddress.street1}" is uniform`, function () {
      expect(singleAddress).to.contain.all.keys('street1', 'street2', 'city', 'state', 'zip', 'country');
    })
  })
})
