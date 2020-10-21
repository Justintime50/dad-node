/* eslint-env node, mocha */
const assert = require('assert');
const dad = require('../index')

describe('Australia Data', () => {
    it('returns a VT address', () => {
        const address = dad.random('AU_VT')
        assert.strictEqual(address.state, 'VIC');
    });

    it('returns a list of VT addresses', () => {
        const addresses = dad.list('AU_VT')
        assert.strictEqual(addresses.addresses.length, 5);
        var i
        while (i < addresses.length) {
            assert.strictEqual(addresses.addresses[i].state, 'VIC')
        }
    });
});
