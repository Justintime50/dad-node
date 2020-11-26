<div align="center">

# Dummy Address Data (DAD)

Dummy Address Data (DAD) - Retrieve real addresses from all around the world.

[![Build Status](https://travis-ci.com/justintime50/dad.svg?branch=master)](https://travis-ci.com/justintime50/dad)
[![Coverage Status](https://coveralls.io/repos/github/Justintime50/dad/badge.svg?branch=master)](https://coveralls.io/github/Justintime50/dad?branch=master)
[![NPM](https://img.shields.io/npm/v/dad-tool)](https://www.npmjs.com/package/dad-tool)
[![Licence](https://img.shields.io/github/license/justintime50/dad)](https://opensource.org/licenses/mit-license.php)

<img src="assets/showcase.png" alt="Showcase">

</div>

DAD is the perfect companion to quickly bootstrap address data in your application. DAD provides real addresses from all over the world with a consistent data structure so you can spend less time looking up addresses and address rules and more time coding. Rigorously tested with 2000+ tests, rest easy knowing your address data is uniform, present, and rock solid, all while being incredibly performant when retrieving records.

## Install

```bash
npm i dad-tool
```

## Address Data

Address objects will look like the [sample below](#output). The data type of each field on an address object is a string.

Attempts have been made to verify addresses and ensure that street1, city, state, and zip are present on all records. Some lists may be shorter than others to avoid complexity or because of a lack of accurate data.

## Australia

All of these files will be found in the `data/australia` directory.

| Filename                    | Locations       | Address Count | Tag    |
| --------------------------- | --------------- | ------------- | ------ |
| australia/vt-addresses.json | Victoria Area   | 5             | AU_VT  |

## Canada

All of these files will be found in the `data/canada` directory.

| Filename                 | Locations       | Address Count | Tag    |
| ------------------------ | --------------- | ------------- | ------ |
| canada/bc-addresses.json | BC Area         | 5             | CA_BC  |

## China

All of these files will be found in the `data/china` directory.

| Filename                | Locations                 | Address Count | Tag    |
| ----------------------- | ------------------------- | ------------- | ------ |
| china/bj-addresses.json | Beijing Area              | 5             | CN_BJ  |
| china/hk-addresses.json | Hong Kong - Wan Chai Area | 5             | CN_HK  |

## Europe

All of these files will be found in the `data/europe` directory.

| Filename                 | Locations                     | Address Count | Tag    |
| ------------------------ | ----------------------------- | ------------- | ------ |
| europe/de-addresses.json | Germany - Wesel Area          | 5             | EU_DE  |
| europe/es-addresses.json | Spain - Countrywide           | 5             | EU_ES  |
| europe/uk-addresses.json | United Kingdom - England Area | 5             | EU_UK  |

## United States

All of these files will be found in the `data/united-states` directory.

| Filename                        | Locations                 | Address Count | Tag    |
| ------------------------------- | ------------------------- | ------------- | ------ |
| united-states/az-addresses.json | Arizona - Gilbert Area    | 100           | US_AZ  |
| united-states/ca-addresses.json | California - Anaheim Area | 100           | US_CA  |
| united-states/id-addresses.json | Idaho - Boise Area        | 100           | US_ID  |
| united-states/ks-addresses.json | Kansas - Barton County    | 100           | US_KS  |
| united-states/nv-addresses.json | Nevada - Lincoln Area     | 100           | US_NV  |
| united-states/ny-addresses.json | New York - Rochester Area | 100           | US_NY  |
| united-states/or-addresses.json | Oregon - Portland Area    | 100           | US_OR  |
| united-states/tx-addresses.json | Texas - Austin Area       | 100           | US_TX  |
| united-states/ut-addresses.json | Utah - Provo Area         | 100           | US_UT  |
| united-states/wa-addresses.json | Washington - Spokane Area | 100           | US_WA  |

## Usage

All use case examples are listed here:

```javascript
const dad = require('dad-tool')

// Grab a random UT address
const address = dad.random('US_UT')

// Alternatively, grab the entire UT list
// const addresses = dad.list('US_UT')

console.log(address)

// Alternatively, grab a single item from an address
// console.log(address.city)
```

### Output

Outputs an entry like the following:

```javascript
{
    street1: '231 N 1200 W',
    street2: 'UNIT 104',
    city: 'OREM',
    state: 'UT',
    zip: '84057',
    country: 'US'
},
```

## Development

When adding or editing a list, ensure the file is minimized and does not exceed 100 records.

```bash
# Lint a file
npx eslint index.js

# Run tests
npm run test

# Run test coverage
npm run coverage
```

### Utilities

To create the slim lists from a larger dataset, use the `create-slim-json.js` tool in the `util` folder.

```bash
node util/create-slim-json.js
```

## Contributing

This data is very laborious to build - any contributions are welcome! Open a PR or issue with additions or fixes.

## Disclaimer

As these addresses are public knowledge and open sourced, I take no responsibility for their use. If you'd like an address removed from the list, submit an issue.

## Attribution

- Addresses provided from the [OpenAddress Project](https://openaddresses.io).
- `DAD` is conceptually based on [RRAD](https://github.com/EthanRBrown/rrad).
- Showcase icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>.
