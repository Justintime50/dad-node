/* eslint-env node, mocha */
const assert = require('assert');
const dad = require('../index')

describe('Europe Data', () => {
    it('returns a DE address', () => {
        const address = dad.random('EU_DE')
        assert.equal(address.country, 'DE');
    });

    it('returns a list of DE addresses', () => {
        const addresses = dad.list('EU_DE')
        assert.equal(addresses.addresses.length, 5);
        assert.equal(addresses.addresses[0].country, 'DE')
    });

    it('returns a ES address', () => {
        const address = dad.random('EU_ES')
        assert.equal(address.country, 'ES');
    });

    it('returns a list of ES addresses', () => {
        const addresses = dad.list('EU_ES')
        assert.equal(addresses.addresses.length, 5);
        assert.equal(addresses.addresses[0].country, 'ES')
    });

    it('returns a UK address', () => {
        const address = dad.random('EU_UK')
        assert.equal(address.country, 'UK');
    });

    it('returns a list of UK addresses', () => {
        const addresses = dad.list('EU_UK')
        assert.equal(addresses.addresses.length, 5);
        assert.equal(addresses.addresses[0].country, 'UK')
    });
});
