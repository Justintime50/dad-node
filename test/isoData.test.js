/* eslint-env node, mocha */
import { assert, expect } from 'chai';

import { isoCountryCodes } from '../index.js';

describe('ISO Country Code Data', function () {
  let isoData;

  before(async function () {
    isoData = await isoCountryCodes();
  });

  it('returns a list of ISO country codes with a length of 249', function () {
    assert.equal(isoData.length, 249);
  });

  it(`ensures the data structure of ISO country codes are uniform`, function () {
    isoData.forEach(function (singleIsoCountry) {
      expect(singleIsoCountry).to.contain.all.keys('country', 'alpha_2_code', 'alpha_3_code');
    });
  });
});
