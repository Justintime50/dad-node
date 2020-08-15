/* eslint-env node, mocha */
const assert = require('assert');
const dad = require('../index')

describe('Australia Data', () => {
    it('returns a VT address', () => {
        const address = dad.random('AU_VT')
        assert.equal(address.state, 'VIC');
    });
});
