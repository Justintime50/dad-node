<div align="center">

# Dummy Address Data (DAD) Node Library

Dummy Address Data (DAD) - Retrieve real addresses from all around the world.

[![Build Status](https://github.com/Justintime50/dad-node/workflows/build/badge.svg)](https://github.com/Justintime50/dad-node/actions)
[![Coverage Status](https://coveralls.io/repos/github/Justintime50/dad-node/badge.svg?branch=main)](https://coveralls.io/github/Justintime50/dad-node?branch=main)
[![NPM](https://img.shields.io/npm/v/dad-tool)](https://www.npmjs.com/package/dad-tool)
[![Licence](https://img.shields.io/github/license/justintime50/dad-node)](https://opensource.org/licenses/mit-license.php)

<img src="assets/showcase.png" alt="Showcase">

</div>

The DAD Node library is the perfect companion to quickly bootstrap address data in your application. DAD provides real addresses from all over the world with a consistent data structure so you can spend less time looking up addresses and address rules and more time coding. Rigorously tested with 2000+ tests, rest easy knowing your address data is uniform, accurate, and performant.

## Install

```bash
# Install globally for CLI implementation
npm i -g dad-tool

# Install locally for package implementation
npm i dad-tool
submodule init && submodule update
```

## Address Data

Address objects will look like the [sample below](#sample-address-object). The data type of each field on an address object is a `string`. A list of addresses is an `array` of `json` objects.

Attempts have been made to verify addresses and ensure that street1, city, state, and zip are present on all records. Some lists may be shorter than others to avoid complexity or because of a lack of accurate data.

The following files can be found in the `data` directory.

## Australia

| Locations       | Tag   |
| --------------- | ----- |
| Victoria Area   | AU_VT |

## Canada

| Locations       | Tag   |
| --------------- | ----- |
| BC Area         | CA_BC |

## China

| Locations                 | Tag   |
| ------------------------- | ----- |
| Beijing Area              | CN_BJ |
| Hong Kong - Wan Chai Area | CN_HK |

## Europe

| Locations                     | Tag   |
| ----------------------------- | ----- |
| Germany - Wesel Area          | EU_DE |
| Spain - Countrywide           | EU_ES |
| United Kingdom - England Area | EU_UK |

## Mexico

| Locations                     | Tag   |
| ----------------------------- | ----- |
| Mexico - Mexico City Area     | MX_MX |

## United States

| Locations                 | Tag   |
| ------------------------- | ----- |
| Arizona - Gilbert Area    | US_AZ |
| California - Anaheim Area | US_CA |
| Idaho - Boise Area        | US_ID |
| Kansas - Barton County    | US_KS |
| Nevada - Lincoln Area     | US_NV |
| New York - Rochester Area | US_NY |
| Oregon - Portland Area    | US_OR |
| Texas - Austin Area       | US_TX |
| Utah - Provo Area         | US_UT |
| Washington - Spokane Area | US_WA |

## Usage

### CLI Implementation

```bash
# Returns a random address from a list to console
dad US_UT
```

### Package Implementation

```javascript
const dad = require('dad-tool')

// Grab a random UT address
const address = dad.random('US_UT')
console.log(address)

// Alternatively, grab the entire UT list
const addresses = dad.list('US_UT')
console.log(addresses)

// Print to console or do whatever you'd like with the address data
console.log(address.city)

// Get the list of all ISO country codes
const isoData = dad.isoCountryCodes()
for (let i = 0; i < isoData.length; i++) {
    console.log(JSON.stringify(isoData[i], null, 4))
}
```

### Sample Address Object

A sample address object will look like the following:

```json
{
    "street1": "231 N 1200 W",
    "street2": "UNIT 104",
    "city": "OREM",
    "state": "UT",
    "zip": "84057",
    "country": "US"
}
```

### Sample ISO Country Object

```json
{
    "country": "United States of America",
    "alpha_2_code": "US",
    "alpha_3_code": "USA"
}
```

## Development

```bash
# Lint the project
npm run lint

# Run tests
npm run test

# Run test coverage
npm run coverage

# Update the DAD data files
git submodule update --remote dad
```

## Attribution

- Addresses provided by [DAD](https://github.com/justintime50/dad).
- Showcase icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>.
