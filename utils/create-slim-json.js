const fs = require('fs')

// A helper utility to build slim lists from a larger data set. Data source: https://batch.openaddresses.io/data
// You may be required to wrap the JSON in addresses on the dataSet you want to use. eg: {"addresses":[{ ... }
// Usage: DATA_SET="path/to/dataset.json" STATE="UT" COUNTRY="US" node util/create-slim-json.js

async function createSlimJson() {
    const numberOfAddresses = process.env.NUM_ADDRESSES || 100 // How many items should be pulled from the larger data set for this slim list
    const dataSet = process.env.DATA_SET // The path to a JSON data set you want to build a slim list from
    const outputPath = `${dataSet}-slim.json`
    const addresses = require(dataSet).addresses
    const state = process.env.STATE || ''
    const country = process.env.COUNTRY || ''
    let finalList = []

    for (let i = 0; i < numberOfAddresses; i++) {
        // TODO: Strip or replace common formatting issues from the origin file here before building the object
        let randomAddress = addresses[Math.floor(Math.random() * addresses.length)]['properties']
        let addressObject = {
            'street1': `${randomAddress['number']} ${randomAddress['street']}`,
            'street2': randomAddress['unit'],
            'city': randomAddress['city'],
            'state': state,
            'zip': randomAddress['postcode'],
            'country': country
        }
        finalList.push(addressObject)
    }

    try {
        await fs.promises.writeFile(outputPath, JSON.stringify({ "addresses": finalList }))
        console.log(`Addresses slimmed and saved to ${outputPath}.Place the new list in its corresponding country folder and rename as needed.`)
        return true
    } catch (error) {
        console.log(error)
        return error
    }
}

createSlimJson()

module.exports = {
    createSlimJson
}
