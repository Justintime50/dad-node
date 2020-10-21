/* eslint-env node, mocha */
const assert = require('assert');
const dad = require('../index')

describe('Europe Data', () => {
    it('returns a DE address', () => {
        const address = dad.random('EU_DE')
        assert.strictEqual(address.country, 'DE');
    });

    it('returns a list of DE addresses', () => {
        const addresses = dad.list('EU_DE')
        assert.strictEqual(addresses.addresses.length, 5);
        assert.strictEqual(addresses.addresses[0].country, 'DE')
    });

    it('returns a ES address', () => {
        const address = dad.random('EU_ES')
        assert.strictEqual(address.country, 'ES');
    });

    it('returns a list of ES addresses', () => {
        const addresses = dad.list('EU_ES')
        assert.strictEqual(addresses.addresses.length, 5);
        assert.strictEqual(addresses.addresses[0].country, 'ES')
    });

    it('returns a UK address', () => {
        const address = dad.random('EU_UK')
        assert.strictEqual(address.country, 'UK');
    });

    it('returns a list of UK addresses', () => {
        const addresses = dad.list('EU_UK')
        assert.strictEqual(addresses.addresses.length, 5);
        assert.strictEqual(addresses.addresses[0].country, 'UK')
    });
});
