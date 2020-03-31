// A helper utility to build slim lists from a larger data set
const fs = require('fs');

// Setup util
const slimNumber = 100; // How many items should be pulled from the larger data set for this slim list
const dataSet = '/Users/jhammond/Downloads/wa-addresses.json'; // Which data set are you pulling from?

// Create a slim list based on the larger data set
const addresses = require(dataSet).addresses
for (var i = 0; i < slimNumber; i++) {
    var randomAddress = addresses[Math.floor(Math.random() * addresses.length)];
    fs.appendFileSync(`${dataSet}-${slimNumber}.json`, JSON.stringify(randomAddress));
}
console.log("Addresses slimmed, make sure to add commas where needed.");
