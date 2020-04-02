# Dummy Address Data (DAD)

Dummy Address Data (DAD) allows you to query a massive dataset for real addresses that are perfect for dummy data.

[![Build Status](https://travis-ci.org/justintime50/dad.svg?branch=master)](https://travis-ci.org/justintime50/dad)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

## Install

```bash
npm i dad-tool
```

## Data

Each dataset is built from a much larger dataset and slimmed down to bite size pieces to conserve disk space and resources when retrieving addresses. Each item on an address object will return a string.

Attempts have been made to verify addresses and ensure that street1, city, state, and zip are present on all records. Some lists may be shorter than others to avoid complexity or because of a lack of accurate data.

### Sample Data Sources

| Filename                   | Locations       | Address Count | Tag    |
| -------------------------- | --------------- | ------------- | ------ |
| ca-addresses-slim.min.json | Anaheim Area    | 100           | US_CA  |
| nv-addresses-slim.min.json | Lincoln Area    | 100           | US_NV  |
| or-addresses-slim.min.json | Portland Area   | 100           | US_OR  |
| ut-addresses-slim.min.json | Provo Area      | 100           | US_UT  |
| wa-addresses-slim.min.json | Spokane Area    | 100           | US_WA  |

### All Data Sources

The amount of data is too extensive to list here. View all the [available data sources](DATA.md) you can retrieve addresses from.

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

### Utilities

To create the slim lists from a larger dataset, use the `create-slim-json.js` tool in the `util` folder.

```bash
node util/create-slim-json.js
```

### Linting

```bash
npx eslint index.js
```

## Contributing

This data is very laborious to build - any contributions are welcome! Open a PR or issue with additions or fixes.

## Disclaimer

As these addresses are public knowledge and open sourced, I take no responsibility for their use. If you'd like an address removed from the list, submit an issue.

## Attribution

- Addresses provided from the [OpenAddress Project](https://openaddresses.io).
- `DAD` is conceptually based on [RRAD](https://github.com/EthanRBrown/rrad).
