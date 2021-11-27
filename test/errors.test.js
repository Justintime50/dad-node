/* eslint-env node, mocha */
import { assert } from 'chai'
import * as dad from '../index.js'

describe('Bad Data', function () {
  it('returns an error when bad data is passed', function () {
    assert.throws(() => { dad.random('BAD_DATA') }, Error);
  })

  it('returns an error when no data is passed', function () {
    assert.throws(() => { dad.random() }, Error);
  })
})
