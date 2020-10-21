/* eslint-env node, mocha */
const assert = require('assert');
const dad = require('../index')

describe('China Data', () => {
    it('returns a BJ address', () => {
        const address = dad.random('CN_BJ')
        assert.strictEqual(address.country, 'CN');
    });

    it('returns a list of BJ addresses', () => {
        const addresses = dad.list('CN_BJ')
        assert.strictEqual(addresses.addresses.length, 5);
        assert.strictEqual(addresses.addresses[0].country, 'CN')
    });

    it('returns a HK address', () => {
        const address = dad.random('CN_HK')
        assert.strictEqual(address.state, 'Hong Kong');
    });

    it('returns a list of HK addresses', () => {
        const addresses = dad.list('CN_HK')
        assert.strictEqual(addresses.addresses.length, 5);
        assert.strictEqual(addresses.addresses[0].state, 'Hong Kong')
    });
});
