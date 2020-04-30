function variables(data) {
    // DAD data
    const location = 'data/'
    const nameScheme ='-addresses-slim.min.json'
    var addresses = ''
    // Country data
    const australia = 'australia/'
    const canada = 'canada/'
    const china = 'china/'
    const europe = 'europe/'
    const usWest = 'us-west/'
    const usMidWest = 'us-midwest/'
    const usNorthEast = 'us-northeast/'
    const usSouth = 'us-south/'

    // Check if there is no data
    if (!data) {
        console.log('Error: Data source tag was not valid. An address could not be retrieved.')
        process.exit(1)
    }

    // Setup the data router based on the tag passed in
    switch (data) {
        case 'AU_VT':
            addresses = `${location}${australia}vt${nameScheme}`
            break;
        case 'CA_BC':
            addresses = `${location}${canada}bc${nameScheme}`
            break;
        case 'CN_BJ':
            addresses = `${location}${china}bj${nameScheme}`
            break;
        case 'EU_DE':
            addresses = `${location}${europe}de${nameScheme}`
            break;
        case 'EU_ES':
            addresses = `${location}${europe}es${nameScheme}`
            break;
        case 'EU_GB':
            addresses = `${location}${europe}gb${nameScheme}`
            break;
        case 'US_KS':
            addresses = `${location}${usMidWest}ks${nameScheme}`
            break;
        case 'US_NY':
            addresses = `${location}${usNorthEast}ny${nameScheme}`
            break;
        case 'US_TX':
            addresses = `${location}${usSouth}tx${nameScheme}`
            break;
        case 'US_CA':
            addresses = `${location}${usWest}ca${nameScheme}`
            break;
        case 'US_NV':
            addresses = `${location}${usWest}nv${nameScheme}`
            break;
        case 'US_OR':
            addresses = `${location}${usWest}or${nameScheme}`
            break;
        case 'US_UT':
            addresses = `${location}${usWest}ut${nameScheme}`
            break;
        case 'US_WA':
            addresses = `${location}${usWest}wa${nameScheme}`
            break;
        default:
            console.log('Error: Data source tag was not valid. An address could not be retrieved.')
            process.exit(1)
        }
    return addresses
}

exports.variables = variables
