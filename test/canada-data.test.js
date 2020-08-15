/* eslint-env node, mocha */
const assert = require('assert');
const dad = require('../index')

describe('Canada Data', () => {
    it('returns a BC address', () => {
        const address = dad.random('CA_BC')
        assert.equal(address.state, 'BC');
    });
});
