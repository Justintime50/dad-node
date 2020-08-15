/* eslint-env node, mocha */
const assert = require('assert');
const dad = require('../index')

describe('Bad Data', () => {
    it('returns an error when bad data is passed', () => {
        assert.throws(() => { dad.random('BAD_DATA') }, Error);
    });

    it('returns an error when no data is passed', () => {
        assert.throws(() => { dad.random() }, Error);
    });
});
