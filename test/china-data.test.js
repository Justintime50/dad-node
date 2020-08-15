/* eslint-env node, mocha */
const assert = require('assert');
const dad = require('../index')

describe('China Data', () => {
    it('returns a BJ address', () => {
        const address = dad.random('CN_BJ')
        assert.equal(address.country, 'CN');
    });
});
