// A helper utility to build slim lists from a larger data set

// Setup util
slimNumber = 100; // How many items should be pulled from the larger data set for this slim list
dataSet = './ut-addresses.min.json'; // Which data set are you pulling from?

// Create a slim list based on the larger data set
const addresses = require(dataSet).addresses
for (i = 0; i <= slimNumber; i++) {
    var randomAddress = addresses[Math.floor(Math.random() * addresses.length)]
    console.log(randomAddress)
    // TODO: Save to file isntead of outputing to console
}
