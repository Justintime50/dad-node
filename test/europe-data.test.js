/* eslint-env node, mocha */
const assert = require('assert');
const dad = require('../index')

describe('Europe Data', () => {
    it('returns a DE address', () => {
        const address = dad.random('EU_DE')
        assert.equal(address.country, 'DE');
    });

    it('returns a ES address', () => {
        const address = dad.random('EU_ES')
        assert.equal(address.country, 'ES');
    });

    it('returns a UK address', () => {
        const address = dad.random('EU_UK')
        assert.equal(address.country, 'UK');
    });
});
