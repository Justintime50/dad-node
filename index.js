#!/usr/bin/env node
const path = require('path')
const dataRouter = require('./lib/data-router')

// Pull an entire list of addresses
function list(data) {
    const list = require(path.join(__dirname, dataRouter.variables(data)))
    return list
}

// Pull a single random address from a list
function random(data) {
    const random = require(path.join(__dirname, dataRouter.variables(data)))
    const address = random.addresses[Math.floor(Math.random() * random.addresses.length)]
    return address
}

// Get a list of all ISO country codes
function isoCountryCodes() {
    const isoData = require('./data/iso-data/country-codes.json')
    return isoData
}

exports.list = list
exports.random = random
exports.isoCountryCodes = isoCountryCodes
