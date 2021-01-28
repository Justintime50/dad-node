function variables(data) {
    // DAD data
    const location = 'data/'
    const nameScheme = '-addresses.json'
    var addresses = ''
    // Country data
    const australia = 'australia/'
    const canada = 'canada/'
    const china = 'china/'
    const europe = 'europe/'
    const mexico = 'mexico/'
    const unitedStates = 'united-states/'

    // Check if there is no data present
    if (!data) {
        throw new Error('Data source tag was not valid. An address could not be retrieved.')
    }

    // Setup the data router based on the tag passed in
    switch (data) {
        // AUSTRALIA DATA
        case 'AU_VT':
            addresses = `${location}${australia}vt${nameScheme}`
            break;
        // CANADA DATA
        case 'CA_BC':
            addresses = `${location}${canada}bc${nameScheme}`
            break;
        // CHINA DATA
        case 'CN_BJ':
            addresses = `${location}${china}bj${nameScheme}`
            break;
        case 'CN_HK':
            addresses = `${location}${china}hk${nameScheme}`
            break;
        // EUROPE DATA
        case 'EU_DE':
            addresses = `${location}${europe}de${nameScheme}`
            break;
        case 'EU_ES':
            addresses = `${location}${europe}es${nameScheme}`
            break;
        case 'EU_UK':
            addresses = `${location}${europe}uk${nameScheme}`
            break;
        // MEXICO DATA
        case 'MX_MX':
            addresses = `${location}${mexico}mx${nameScheme}`
            break;
        // UNITED STATES DATA
        case 'US_AZ':
            addresses = `${location}${unitedStates}az${nameScheme}`
            break;
        case 'US_CA':
            addresses = `${location}${unitedStates}ca${nameScheme}`
            break;
        case 'US_ID':
            addresses = `${location}${unitedStates}id${nameScheme}`
            break;
        case 'US_KS':
            addresses = `${location}${unitedStates}ks${nameScheme}`
            break;
        case 'US_NV':
            addresses = `${location}${unitedStates}nv${nameScheme}`
            break;
        case 'US_NY':
            addresses = `${location}${unitedStates}ny${nameScheme}`
            break;
        case 'US_OR':
            addresses = `${location}${unitedStates}or${nameScheme}`
            break;
        case 'US_TX':
            addresses = `${location}${unitedStates}tx${nameScheme}`
            break;
        case 'US_UT':
            addresses = `${location}${unitedStates}ut${nameScheme}`
            break;
        case 'US_WA':
            addresses = `${location}${unitedStates}wa${nameScheme}`
            break;
        default:
            throw new Error('Data source tag was not valid. An address could not be retrieved.')
    }
    return addresses
}

exports.variables = variables
