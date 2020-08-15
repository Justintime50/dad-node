/* eslint-env node, mocha */
const assert = require('assert');
const dad = require('../index')

describe('United States Data', () => {
    // US Midwest
    it('returns a KS address', () => {
        const address = dad.random('US_KS')
        assert.equal(address.state, 'KS');
    });

    // US Northeast
    it('returns a NY address', () => {
        const address = dad.random('US_NY')
        assert.equal(address.state, 'NY');
    });

    // US South
    it('returns a TX address', () => {
        const address = dad.random('US_TX')
        assert.equal(address.state, 'TX');
    });

    // US West
    it('returns a CA address', () => {
        const address = dad.random('US_CA')
        assert.equal(address.state, 'CA');
    });

    it('returns a NV address', () => {
        const address = dad.random('US_NV')
        assert.equal(address.state, 'NV');
    });

    it('returns a OR address', () => {
        const address = dad.random('US_OR')
        assert.equal(address.state, 'OR');
    });

    it('returns a UT address', () => {
        const address = dad.random('US_UT')
        assert.equal(address.state, 'UT');
    });

    it('returns a WA address', () => {
        const address = dad.random('US_WA')
        assert.equal(address.state, 'WA');
    });
});
