/* eslint-env node, mocha */
import { assert, expect } from 'chai'
import * as dad from '../index.js'

describe('ISO Country Code Data', function () {
  const isoData = dad.isoCountryCodes()

  it('returns a list of ISO country codes with a length of 249', function () {
    assert.equal(isoData.length, 249);
  })

  isoData.forEach(function (singleIsoCountry) {
    it(`ensures the data structure of "${singleIsoCountry.country}" is uniform`, function () {
      expect(singleIsoCountry).to.contain.all.keys('country', 'alpha_2_code', 'alpha_3_code');
    })
  })
})
