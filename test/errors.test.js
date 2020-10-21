/* eslint-env node, mocha */
const assert = require('chai').assert
const dad = require('../index')

describe('Bad Data', function () {
    it('returns an error when bad data is passed', function () {
        assert.throws(() => { dad.random('BAD_DATA') }, Error);
    });

    it('returns an error when no data is passed', function () {
        assert.throws(() => { dad.random() }, Error);
    });
});
