/* eslint-env node, mocha */
const assert = require('chai').assert
const dad = require('../index')

describe('Bad Data', function () {
    it('returns valid data when lowercase tags are passed', function () {
        const address = dad.random('us_ut')
        assert.equal(address.state, 'UT');
    })
})
