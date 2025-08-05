/* eslint-env node, mocha */
import assert from 'assert';

import { random } from '../index.js';

describe('Bad Data', function () {
  it('returns an error when bad data is passed', async function () {
    await assert.rejects(() => random('BAD_DATA'), Error);
  });

  it('returns an error when no data is passed', async function () {
    await assert.rejects(() => random(), Error);
  });
});
