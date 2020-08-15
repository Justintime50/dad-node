/* eslint-env node, mocha */
const assert = require('assert');
const dad = require('../index')

describe('United States Data', () => {
    // US Midwest
    it('returns a KS address', () => {
        const address = dad.random('US_KS')
        assert.equal(address.state, 'KS');
    });

    it('returns a list of KS addresses', () => {
        const addresses = dad.list('US_KS')
        assert.equal(addresses.addresses.length, 100);
        assert.equal(addresses.addresses[0].state, 'KS')
    });


    // US Northeast
    it('returns a NY address', () => {
        const address = dad.random('US_NY')
        assert.equal(address.state, 'NY');
    });

    it('returns a list of NY addresses', () => {
        const addresses = dad.list('US_NY')
        assert.equal(addresses.addresses.length, 100);
        assert.equal(addresses.addresses[0].state, 'NY')
    });


    // US South
    it('returns a TX address', () => {
        const address = dad.random('US_TX')
        assert.equal(address.state, 'TX');
    });

    it('returns a list of TX addresses', () => {
        const addresses = dad.list('US_TX')
        assert.equal(addresses.addresses.length, 100);
        assert.equal(addresses.addresses[0].state, 'TX')
    });


    // US West
    it('returns a CA address', () => {
        const address = dad.random('US_CA')
        assert.equal(address.state, 'CA');
    });

    it('returns a list of CA addresses', () => {
        const addresses = dad.list('US_CA')
        assert.equal(addresses.addresses.length, 100);
        assert.equal(addresses.addresses[0].state, 'CA')
    });

    it('returns a NV address', () => {
        const address = dad.random('US_NV')
        assert.equal(address.state, 'NV');
    });

    it('returns a list of NV addresses', () => {
        const addresses = dad.list('US_NV')
        assert.equal(addresses.addresses.length, 100);
        assert.equal(addresses.addresses[0].state, 'NV')
    });

    it('returns a OR address', () => {
        const address = dad.random('US_OR')
        assert.equal(address.state, 'OR');
    });

    it('returns a list of OR addresses', () => {
        const addresses = dad.list('US_OR')
        assert.equal(addresses.addresses.length, 100);
        assert.equal(addresses.addresses[0].state, 'OR')
    });

    it('returns a UT address', () => {
        const address = dad.random('US_UT')
        assert.equal(address.state, 'UT');
    });

    it('returns a list of UT addresses', () => {
        const addresses = dad.list('US_UT')
        assert.equal(addresses.addresses.length, 100);
        assert.equal(addresses.addresses[0].state, 'UT')
    });

    it('returns a WA address', () => {
        const address = dad.random('US_WA')
        assert.equal(address.state, 'WA');
    });

    it('returns a list of WA addresses', () => {
        const addresses = dad.list('US_WA')
        assert.equal(addresses.addresses.length, 100);
        assert.equal(addresses.addresses[0].state, 'WA')
    });
});
