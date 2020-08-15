/* eslint-env node, mocha */
const assert = require('assert');
const dad = require('../index')

describe('China Data', () => {
    it('returns a BJ address', () => {
        const address = dad.random('CN_BJ')
        assert.equal(address.country, 'CN');
    });

    it('returns a list of BJ addresses', () => {
        const addresses = dad.list('CN_BJ')
        assert.equal(addresses.addresses.length, 5);
        assert.equal(addresses.addresses[0].country, 'CN')
    });
});
