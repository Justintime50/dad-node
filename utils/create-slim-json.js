const fs = require('fs')

// A helper utility to build slim lists from a larger data set. Data source: https://batch.openaddresses.io/data
// You may be required to wrap the JSON in an addresses wrapper on the dataSet you want to use. eg: {"addresses":[{ ... }
// Additionally, you may be required to add commas after each JSON address object
// Usage: DATA_SET="path/to/dataset.json" STATE="UT" COUNTRY="US" node util/create-slim-json.js

async function createSlimJson() {
    const numberOfAddresses = process.env.NUM_ADDRESSES || 100 // How many items should be pulled from the larger data set for this slim list
    const dataSetFilePath = process.env.DATA_SET // The path to a JSON data set you want to build a slim list from
    const outputPath = `${dataSetFilePath}-slim.json`
    const state = process.env.STATE || ''
    const country = process.env.COUNTRY || ''
    let finalList = []

    if (dataSetFilePath) {
        try {
            for (let i = 0; i < numberOfAddresses; i++) {
                // TODO: Strip or replace common formatting issues from the origin file here before building the object
                const dataSetFile = require(dataSetFilePath).addresses
                let randomAddress = dataSetFile[Math.floor(Math.random() * dataSetFile.length)]['properties']
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
            await fs.promises.writeFile(outputPath, JSON.stringify({ "addresses": finalList }) + '\n')
            console.log(`Addresses slimmed and saved to ${outputPath}. Place the new list in its corresponding country folder and rename as needed.`)
            return true
        } catch (error) {
            throw Error(error)
        }
    } else {
        throw new Error('DATA_SET env variable must be set. Please correct and try again.')
    }
}

createSlimJson().catch(console.log)

module.exports = {
    createSlimJson
}
