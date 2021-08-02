/* eslint-env node, mocha */
const assert = require('chai').assert
const expect = require('chai').expect
const dad = require('../index')

describe('CA BC Address Data', function () {
    const address = dad.random('CA_BC')
    const addresses = dad.list('CA_BC')

    it('returns a random BC address', function () {
        assert.equal(address.state, 'BC');
    })

    it('returns a list of BC addresses with a length of 5', function () {
        assert.equal(addresses.length, 5);
    })

    addresses.forEach(function (singleAddress) {
        it(`returns "${singleAddress.street1}" from a list of BC addresses`, function () {
            assert.equal(singleAddress.state, 'BC')
        })
    })

    addresses.forEach(function (singleAddress) {
        it(`ensures the data structure of "${singleAddress.street1}" is uniform`, function () {
            expect(singleAddress).to.contain.all.keys('street1', 'street2', 'city', 'state', 'zip', 'country');
        })
    })
})
