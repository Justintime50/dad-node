/* eslint-env node, mocha */

describe('CLI Implementation', function () {
    it('prints a random address from the US_UT list to console', function () {
        process.argv[2] = 'US_UT'
        require('../cli.js')
    })
})
