/* eslint-env node, mocha */
import { assert, expect } from 'chai'
import * as dad from '../index.js'

describe('CN BJ Address Data', function () {
  const address = dad.random('CN_BJ')
  const addresses = dad.list('CN_BJ')

  it('returns a random BJ address', function () {
    assert.equal(address.country, 'CN');
  })

  it('returns a list of BJ addresses with a length of 5', function () {
    assert.equal(addresses.length, 5);
  })

  addresses.forEach(function (singleAddress) {
    it(`returns "${singleAddress.street1}" from a list of BJ addresses`, function () {
      assert.equal(singleAddress.country, 'CN')
    })
  })

  addresses.forEach(function (singleAddress) {
    it(`ensures the data structure of "${singleAddress.street1}" is uniform`, function () {
      expect(singleAddress).to.contain.all.keys('street1', 'street2', 'city', 'state', 'zip', 'country');
    })
  })
})

describe('CN HK Address Data', function () {
  const address = dad.random('CN_HK')
  const addresses = dad.list('CN_HK')

  it('returns a random HK address', function () {
    assert.equal(address.state, 'Hong Kong');
  })

  it('returns a list of HK addresses with a length of 5', function () {
    assert.equal(addresses.length, 5);
  })

  addresses.forEach(function (singleAddress) {
    it(`returns "${singleAddress.street1}" from a list of HK addresses`, function () {
      assert.equal(singleAddress.state, 'Hong Kong')
    })
  })

  addresses.forEach(function (singleAddress) {
    it(`ensures the data structure of "${singleAddress.street1}" is uniform`, function () {
      expect(singleAddress).to.contain.all.keys('street1', 'street2', 'city', 'state', 'zip', 'country');
    })
  })
})
