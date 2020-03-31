# Dummy Address Data (DAD)

Dummy Address Data (DAD) allows you to query a massive dataset for real addresses that are perfect for dummy data.

[![Build Status](https://travis-ci.org/justintime50/dad.svg?branch=master)](https://travis-ci.org/justintime50/dad)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

## Install

```bash
npm i dad-tool
```

## Usage

Each dataset is built from `100 random addresses` of a larger dataset. Minified options are available for quicker loading and smaller file sizes.

### USA - West

| Filename                      | Addresses       | Tag   |
| ----------------------------- | --------------- | ----  |
| nv-addresses-slim.json        | Lincoln Area    | NV    |
| nv-addresses-slim.min.json    | Lincoln Area    | NV    |
| or-addresses-slim.json        | Portland Area   | OR    |
| or-addresses-slim.min.json    | Portland Area   | OR    |
| ut-addresses-slim.json        | Statewide       | UT    |
| ut-addresses-slim.min.json    | Statewide       | UT    |
| wa-addresses-slim.json        | Spokane Area    | WA    |
| wa-addresses-slim.min.json    | Spokane Area    | WA    |

### Not Included Due to Lack of Data

- WY

## Example

```javascript
const dad = require('dad-tool') 

// Grab a random UT address
const address = dad.random('UT');

// Alternatively, grab the entire UT list
// const addresses = dad.list('UT');

console.log(address)
```

### Output

```javascript
// Outputs an entry like the following:
{
    street1: "231 N 1200 W",
    street2: "UNIT 104",
    city: "OREM",
    state: "UT",
    zip: 84057,
    id: 470703
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

## Attribution

Addresses provided from the [OpenAddress Project](https://openaddresses.io).

Project based on [RRAD](https://github.com/EthanRBrown/rrad).
