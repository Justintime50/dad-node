#!/usr/bin/env node
const path = require('path')
const dataRouter = require('./lib/dataRouter')

// Pull an entire list of addresses
function list(data) {
    const list = require(path.join(__dirname, dataRouter.variables(data)))
    return list
}

// Pull a single random address from a list
function random(data) {
    const randomAddress = require(path.join(__dirname, dataRouter.variables(data)))
    const address = randomAddress[Math.floor(Math.random() * randomAddress.length)]
    return address
}

// Get a list of all ISO country codes
function isoCountryCodes() {
    const isoData = require('./dad/src/other/country-codes.min.json')
    return isoData
}

exports.list = list
exports.random = random
exports.isoCountryCodes = isoCountryCodes
