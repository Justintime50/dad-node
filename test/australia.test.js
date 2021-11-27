/* eslint-env node, mocha */
import { assert, expect } from 'chai'
import * as dad from '../index.js'

describe('AU VT Address Data', function () {
  const address = dad.random('AU_VT')
  const addresses = dad.list('AU_VT')

  it('returns a random VT address', function () {
    assert.equal(address.state, 'VIC');
  })

  it('returns a list of VT addresses with a length of 5', function () {
    assert.equal(addresses.length, 5);
  })

  addresses.forEach(function (singleAddress) {
    it(`returns "${singleAddress.street1}" from a list of VT addresses`, function () {
      assert.equal(singleAddress.state, 'VIC')
    })
  })

  addresses.forEach(function (singleAddress) {
    it(`ensures the data structure of "${singleAddress.street1}" is uniform`, function () {
      expect(singleAddress).to.contain.all.keys('street1', 'street2', 'city', 'state', 'zip', 'country');
    })
  })
})
