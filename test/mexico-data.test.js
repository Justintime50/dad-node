/* eslint-env node, mocha */
const assert = require('chai').assert
const expect = require('chai').expect
const dad = require('../index')

describe('MX MX Address Data', function () {
    const address = dad.random('MX_MX')
    const addresses = dad.list('MX_MX')

    it('returns a random MX address', function () {
        assert.equal(address.country, 'MX');
    });

    it('returns a list of MX addresses with a length of 5', function () {
        assert.equal(addresses.addresses.length, 5);
    })

    addresses.addresses.forEach(function (singleAddress) {
        it(`returns "${singleAddress.street1}" from a list of MX addresses`, function () {
            assert.equal(singleAddress.country, 'MX')
        });
    })

    addresses.addresses.forEach(function (singleAddress) {
        it(`ensures the data structure of "${singleAddress.street1}" is uniform`, function () {
            expect(singleAddress).to.contain.all.keys('street1', 'street2', 'city', 'state', 'zip', 'country');
        });
    });
})
