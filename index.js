#!/usr/bin/env node

const path = require('path')

// Setup all the variables
function variables(data) {
    const location = 'data/';
    const usWest = 'us-west/';
    const nameScheme ='-addresses-slim.min.json';
    var addresses = '';
    if (data === 'NV') {
        addresses = `${location}${usWest}nv${nameScheme}`;
    } else if (data === 'OR') {
        addresses = `${location}${usWest}or${nameScheme}`;
    } else if (data === 'UT') {
        addresses = `${location}${usWest}ut${nameScheme}`;
    } else if (data === 'WA') {
        addresses = `${location}${usWest}wa${nameScheme}`;
    }
    else {
        console.log('Error: No data passed and therefore an address cannot be retrieved.')
        process.exit(1)
    }
    return addresses
}

// Pull an entire list of addresses
function list(data) {
    const list = require(path.join(__dirname, variables(data)));
    return list
}

// Pull a single random address from a list
function random(data) {
    const random = require(path.join(__dirname, variables(data)));
    return random.addresses[Math.floor(Math.random() * random.addresses.length)];
}

// Export these functions for use elsewhere
exports.list = list;
exports.random = random;
