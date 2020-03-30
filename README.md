# Dummy Address Data (DAD)

Dummy Address Data (DAD) allows you to query a massive dataset for real addresses that are great to be used as dummy data.

[![Build Status](https://travis-ci.org/justintime50/dad.svg?branch=master)](https://travis-ci.org/justintime50/dad)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

## Install

```bash
npm i dad-tool
```

## Example

Currently, only 100 random Utah addresses are available. Many more from across the US and other countries are planned to be released soon.

```javascript
const dad = require('dad-tool')
const randomAddress = dad.addresses[Math.floor(Math.random() * dad.addresses.length)] 

// Alternatively, pull a specific address by ID
// const id = 988849
// const randomAddress = addresses[id-1]

console.log(randomAddress)
```

### Output
```javascript
// Outputs an entry like the following:
{
    street1: '525 N WOOD HILL RD',
    street2: '',
    city: '',
    state: 'UT',
    zip: 84501,
    id: 988849
}
```

## Attribution

Addresses provided from the [OpenAddress Project](https://openaddresses.io).

Project based on [RRAD](https://github.com/EthanRBrown/rrad).
