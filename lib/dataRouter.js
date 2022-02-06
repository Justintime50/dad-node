function variables(data) {
  // DAD variables
  const addressDirectory = 'dad/src/addresses'
  const fileExtension = '-addresses.min.json'
  const australiaDirectory = 'australia'
  const canadaDirectory = 'canada'
  const chinaDirectory = 'china'
  const europeDirectory = 'europe'
  const mexicoDirectory = 'mexico'
  const unitedStatesDirectory = 'united-states/'
  const invalidTagErrorMessage = 'Data source tag was not valid. An address could not be retrieved.'
  let dataFilePath = null

  // Country variables
  const dataFilePaths = {
    // Australia
    'AU_VT': `${addressDirectory}/${australiaDirectory}/vt${fileExtension}`,
    // Canada
    'CA_BC': `${addressDirectory}/${canadaDirectory}/bc${fileExtension}`,
    // China
    'CN_BJ': `${addressDirectory}/${chinaDirectory}/bj${fileExtension}`,
    'CN_HK': `${addressDirectory}/${chinaDirectory}/hk${fileExtension}`,
    // Europe
    'EU_DE': `${addressDirectory}/${europeDirectory}/de${fileExtension}`,
    'EU_ES': `${addressDirectory}/${europeDirectory}/es${fileExtension}`,
    'EU_FR': `${addressDirectory}/${europeDirectory}/fr${fileExtension}`,
    'EU_UK': `${addressDirectory}/${europeDirectory}/uk${fileExtension}`,
    // Mexico
    'MX_MX': `${addressDirectory}/${mexicoDirectory}/mx${fileExtension}`,
    // United States
    'US_AZ': `${addressDirectory}/${unitedStatesDirectory}/az${fileExtension}`,
    'US_CA': `${addressDirectory}/${unitedStatesDirectory}/ca${fileExtension}`,
    'US_ID': `${addressDirectory}/${unitedStatesDirectory}/id${fileExtension}`,
    'US_KS': `${addressDirectory}/${unitedStatesDirectory}/ks${fileExtension}`,
    'US_NV': `${addressDirectory}/${unitedStatesDirectory}/nv${fileExtension}`,
    'US_NY': `${addressDirectory}/${unitedStatesDirectory}/ny${fileExtension}`,
    'US_OR': `${addressDirectory}/${unitedStatesDirectory}/or${fileExtension}`,
    'US_TX': `${addressDirectory}/${unitedStatesDirectory}/tx${fileExtension}`,
    'US_UT': `${addressDirectory}/${unitedStatesDirectory}/ut${fileExtension}`,
    'US_WA': `${addressDirectory}/${unitedStatesDirectory}/wa${fileExtension}`,
    // Invalid data source tag
    'invalid': null,
  }

  dataFilePath = dataFilePaths[data.toUpperCase()] || dataFilePaths['invalid']

  if (dataFilePath === null) {
    throw new Error(invalidTagErrorMessage)
  }

  return dataFilePath
}

exports.variables = variables
