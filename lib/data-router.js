function variables(data) {
    // Setup all the variables
    const location = 'data/'
    const australia = 'australia/'
    const canada = 'canada/'
    const china = 'china/'
    const europe = 'europe/'
    const usWest = 'us-west/'
    const nameScheme ='-addresses-slim.min.json'
    var addresses = ''

    // Setup the data router
    if (data === 'AU_VT') {
        addresses = `${location}${australia}vt${nameScheme}`
    } else if (data === 'CA_BC') {
        addresses = `${location}${canada}bc${nameScheme}`
    } else if (data === 'CN_BJ') {
        addresses = `${location}${china}bj${nameScheme}`
    } else if (data === 'EU_GB') {
        addresses = `${location}${europe}gb${nameScheme}`
    } else if (data === 'US_CA') {
        addresses = `${location}${usWest}ca${nameScheme}`
    } else if (data === 'US_NV') {
        addresses = `${location}${usWest}nv${nameScheme}`
    } else if (data === 'US_OR') {
        addresses = `${location}${usWest}or${nameScheme}`
    } else if (data === 'US_UT') {
        addresses = `${location}${usWest}ut${nameScheme}`
    } else if (data === 'US_WA') {
        addresses = `${location}${usWest}wa${nameScheme}`
    }
    else {
        console.log('Error: Data source tag was not valid. An address could not be retrieved.')
        process.exit(1)
    }
    return addresses
}

exports.variables = variables
