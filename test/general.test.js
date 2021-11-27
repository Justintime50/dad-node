/* eslint-env node, mocha */
import { assert } from 'chai'
import * as dad from '../index.js'

describe('Bad Data', function () {
  it('returns valid data when lowercase tags are passed', function () {
    const address = dad.random('us_ut')
    assert.equal(address.state, 'UT');
  })
})
