/* eslint-env node, mocha */
import { assert } from 'chai';

import { random } from '../index.js';

describe('Bad Data', function () {
  it('returns valid data when lowercase tags are passed', async function () {
    const address = await random('us_ut');
    assert.equal(address.state, 'UT');
  });
});
