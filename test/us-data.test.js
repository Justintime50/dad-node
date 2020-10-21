/* eslint-env node, mocha */
const assert = require('assert');
const dad = require('../index')

describe('United States Data', () => {
    // US Midwest
    it('returns a KS address', () => {
        const address = dad.random('US_KS')
        assert.strictEqual(address.state, 'KS');
    });

    it('returns a list of KS addresses', () => {
        const addresses = dad.list('US_KS')
        assert.strictEqual(addresses.addresses.length, 100);
        var i
        while (i < addresses.length) {
            assert.strictEqual(addresses.addresses[i].state, 'KS')
        }
    });


    // US Northeast
    it('returns a NY address', () => {
        const address = dad.random('US_NY')
        assert.strictEqual(address.state, 'NY');
    });

    it('returns a list of NY addresses', () => {
        const addresses = dad.list('US_NY')
        assert.strictEqual(addresses.addresses.length, 100);
        var i
        while (i < addresses.length) {
            assert.strictEqual(addresses.addresses[i].state, 'NY')
        }
    });


    // US South
    it('returns a TX address', () => {
        const address = dad.random('US_TX')
        assert.strictEqual(address.state, 'TX');
    });

    it('returns a list of TX addresses', () => {
        const addresses = dad.list('US_TX')
        assert.strictEqual(addresses.addresses.length, 100);
        var i
        while (i < addresses.length) {
            assert.strictEqual(addresses.addresses[i].state, 'TX')
        }
    });


    // US West
    it('returns a CA address', () => {
        const address = dad.random('US_CA')
        assert.strictEqual(address.state, 'CA');
    });

    it('returns a list of CA addresses', () => {
        const addresses = dad.list('US_CA')
        assert.strictEqual(addresses.addresses.length, 100);
        var i
        while (i < addresses.length) {
            assert.strictEqual(addresses.addresses[i].state, 'CA')
        }
    });

    it('returns a NV address', () => {
        const address = dad.random('US_NV')
        assert.strictEqual(address.state, 'NV');
    });

    it('returns a list of NV addresses', () => {
        const addresses = dad.list('US_NV')
        assert.strictEqual(addresses.addresses.length, 100);
        var i
        while (i < addresses.length) {
            assert.strictEqual(addresses.addresses[i].state, 'NV')
        }
    });

    it('returns a OR address', () => {
        const address = dad.random('US_OR')
        assert.strictEqual(address.state, 'OR');
    });

    it('returns a list of OR addresses', () => {
        const addresses = dad.list('US_OR')
        assert.strictEqual(addresses.addresses.length, 100);
        var i
        while (i < addresses.length) {
            assert.strictEqual(addresses.addresses[i].state, 'OR')
        }
    });

    it('returns a UT address', () => {
        const address = dad.random('US_UT')
        assert.strictEqual(address.state, 'UT');
    });

    it('returns a list of UT addresses', () => {
        const addresses = dad.list('US_UT')
        assert.strictEqual(addresses.addresses.length, 100);
        var i
        while (i < addresses.length) {
            assert.strictEqual(addresses.addresses[i].state, 'UT')
        }
    });

    it('returns a WA address', () => {
        const address = dad.random('US_WA')
        assert.strictEqual(address.state, 'WA');
    });

    it('returns a list of WA addresses', () => {
        const addresses = dad.list('US_WA')
        assert.strictEqual(addresses.addresses.length, 100);
        var i
        while (i < addresses.length) {
            assert.strictEqual(addresses.addresses[i].state, 'WA')
        }
    });
});
