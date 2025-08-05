/* eslint-env node, mocha */

describe('CLI Implementation', function () {
  it('prints a random address from the US_UT list to console', async function () {
    process.argv[2] = 'US_UT';
    await import('../cli.js');
  });
});
