/* eslint-env node, mocha */
const assert = require('assert');
const dad = require('../index')

describe('Canada Data', () => {
    it('returns a BC address', () => {
        const address = dad.random('CA_BC')
        assert.equal(address.state, 'BC');
    });

    it('returns a list of BC addresses', () => {
        const addresses = dad.list('CA_BC')
        assert.equal(addresses.addresses.length, 5);
        assert.equal(addresses.addresses[0].state, 'BC')
    });
});
