/* eslint-env node, mocha */
const assert = require('chai').assert
const sinon = require('sinon')
let sandbox = sinon.createSandbox()
const slimJsonUtil = require('../utils/create-slim-json')

describe('Create Slim JSON Util', async function () {
    // TODO: This isn't generating a file
    sandbox.stub(process.env, 'DATA_SET').value('files/test-data-set.json')
    const createSlimJson = await slimJsonUtil.createSlimJson()

    it('creates a slim JSON file from a larger dataset', function () {
        assert.equal(createSlimJson, true);
    });
})
