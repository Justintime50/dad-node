/* eslint-env node, mocha */
const assert = require('assert');
const dad = require('../index')

describe('Australia Data', () => {
    it('returns a VT address', () => {
        const address = dad.random('AU_VT')
        assert.equal(address.state, 'VIC');
    });

    it('returns a list of VT addresses', () => {
        const addresses = dad.list('AU_VT')
        assert.equal(addresses.addresses.length, 5);
        assert.equal(addresses.addresses[0].state, 'VIC')
    });
});
