/* eslint-env node, mocha */
import { assert, expect } from 'chai';

import { list, random } from '../index.js';

describe('US AZ Address Data', function () {
  let address;
  let addresses;

  before(async function () {
    address = await random('US_AZ');
    addresses = await list('US_AZ');
  });

  it('returns a random AZ address', function () {
    assert.equal(address.state, 'AZ');
  });

  it('returns a list of AZ addresses with a length of 100', function () {
    assert.equal(addresses.length, 100);
  });

  it('returns only AZ addresses from the list', function () {
    addresses.forEach(function (singleAddress) {
      assert.equal(singleAddress.state, 'AZ');
    });
  });

  it('ensures the data structure of all AZ addresses are uniform', function () {
    addresses.forEach(function (singleAddress) {
      expect(singleAddress).to.contain.all.keys('street1', 'street2', 'city', 'state', 'zip', 'country');
    });
  });
});

describe('US CA Address Data', function () {
  let address;
  let addresses;

  before(async function () {
    address = await random('US_CA');
    addresses = await list('US_CA');
  });

  it('returns a random CA address', function () {
    assert.equal(address.state, 'CA');
  });

  it('returns a list of CA addresses with a length of 100', function () {
    assert.equal(addresses.length, 100);
  });

  it('returns only CA addresses from the list', function () {
    addresses.forEach(function (singleAddress) {
      assert.equal(singleAddress.state, 'CA');
    });
  });

  it('ensures the data structure of all CA addresses are uniform', function () {
    addresses.forEach(function (singleAddress) {
      expect(singleAddress).to.contain.all.keys('street1', 'street2', 'city', 'state', 'zip', 'country');
    });
  });
});

describe('US ID Address Data', function () {
  let address;
  let addresses;

  before(async function () {
    address = await random('US_ID');
    addresses = await list('US_ID');
  });

  it('returns a random ID address', function () {
    assert.equal(address.state, 'ID');
  });

  it('returns a list of ID addresses with a length of 100', function () {
    assert.equal(addresses.length, 100);
  });

  it('returns only ID addresses from the list', function () {
    addresses.forEach(function (singleAddress) {
      assert.equal(singleAddress.state, 'ID');
    });
  });

  it('ensures the data structure of all ID addresses are uniform', function () {
    addresses.forEach(function (singleAddress) {
      expect(singleAddress).to.contain.all.keys('street1', 'street2', 'city', 'state', 'zip', 'country');
    });
  });
});

describe('US KS Address Data', function () {
  let address;
  let addresses;

  before(async function () {
    address = await random('US_KS');
    addresses = await list('US_KS');
  });

  it('returns a random KS address', function () {
    assert.equal(address.state, 'KS');
  });

  it('returns a list of KS addresses with a length of 100', function () {
    assert.equal(addresses.length, 100);
  });

  it('returns only KS addresses from the list', function () {
    addresses.forEach(function (singleAddress) {
      assert.equal(singleAddress.state, 'KS');
    });
  });

  it('ensures the data structure of all KS addresses are uniform', function () {
    addresses.forEach(function (singleAddress) {
      expect(singleAddress).to.contain.all.keys('street1', 'street2', 'city', 'state', 'zip', 'country');
    });
  });
});

describe('US NV Address Data', function () {
  let address;
  let addresses;

  before(async function () {
    address = await random('US_NV');
    addresses = await list('US_NV');
  });

  it('returns a random NV address', function () {
    assert.equal(address.state, 'NV');
  });

  it('returns a list of NV addresses with a length of 100', function () {
    assert.equal(addresses.length, 100);
  });

  it('returns only NV addresses from the list', function () {
    addresses.forEach(function (singleAddress) {
      assert.equal(singleAddress.state, 'NV');
    });
  });

  it('ensures the data structure of all NV addresses are uniform', function () {
    addresses.forEach(function (singleAddress) {
      expect(singleAddress).to.contain.all.keys('street1', 'street2', 'city', 'state', 'zip', 'country');
    });
  });
});

describe('US NY Address Data', function () {
  let address;
  let addresses;

  before(async function () {
    address = await random('US_NY');
    addresses = await list('US_NY');
  });

  it('returns a random NY address', function () {
    assert.equal(address.state, 'NY');
  });

  it('returns a list of NY addresses with a length of 100', function () {
    assert.equal(addresses.length, 100);
  });

  it('returns only NY addresses from the list', function () {
    addresses.forEach(function (singleAddress) {
      assert.equal(singleAddress.state, 'NY');
    });
  });

  it('ensures the data structure of all NY addresses are uniform', function () {
    addresses.forEach(function (singleAddress) {
      expect(singleAddress).to.contain.all.keys('street1', 'street2', 'city', 'state', 'zip', 'country');
    });
  });
});

describe('US OR Address Data', function () {
  let address;
  let addresses;

  before(async function () {
    address = await random('US_OR');
    addresses = await list('US_OR');
  });

  it('returns a random OR address', function () {
    assert.equal(address.state, 'OR');
  });

  it('returns a list of OR addresses with a length of 100', function () {
    assert.equal(addresses.length, 100);
  });

  it('returns only OR addresses from the list', function () {
    addresses.forEach(function (singleAddress) {
      assert.equal(singleAddress.state, 'OR');
    });
  });

  it('ensures the data structure of all OR addresses are uniform', function () {
    addresses.forEach(function (singleAddress) {
      expect(singleAddress).to.contain.all.keys('street1', 'street2', 'city', 'state', 'zip', 'country');
    });
  });
});

describe('US TX Address Data', function () {
  let address;
  let addresses;

  before(async function () {
    address = await random('US_TX');
    addresses = await list('US_TX');
  });

  it('returns a random TX address', function () {
    assert.equal(address.state, 'TX');
  });

  it('returns a list of TX addresses with a length of 100', function () {
    assert.equal(addresses.length, 100);
  });

  it('returns only TX addresses from the list', function () {
    addresses.forEach(function (singleAddress) {
      assert.equal(singleAddress.state, 'TX');
    });
  });

  it('ensures the data structure of all TX addresses are uniform', function () {
    addresses.forEach(function (singleAddress) {
      expect(singleAddress).to.contain.all.keys('street1', 'street2', 'city', 'state', 'zip', 'country');
    });
  });
});

describe('US UT Address Data', function () {
  let address;
  let addresses;

  before(async function () {
    address = await random('US_UT');
    addresses = await list('US_UT');
  });

  it('returns a random UT address', function () {
    assert.equal(address.state, 'UT');
  });

  it('returns a list of UT addresses with a length of 100', function () {
    assert.equal(addresses.length, 100);
  });

  it('returns only UT addresses from the list', function () {
    addresses.forEach(function (singleAddress) {
      assert.equal(singleAddress.state, 'UT');
    });
  });

  it('ensures the data structure of all UT addresses are uniform', function () {
    addresses.forEach(function (singleAddress) {
      expect(singleAddress).to.contain.all.keys('street1', 'street2', 'city', 'state', 'zip', 'country');
    });
  });
});

describe('US WA Address Data', function () {
  let address;
  let addresses;

  before(async function () {
    address = await random('US_WA');
    addresses = await list('US_WA');
  });

  it('returns a random WA address', function () {
    assert.equal(address.state, 'WA');
  });

  it('returns a list of WA addresses with a length of 100', function () {
    assert.equal(addresses.length, 100);
  });

  it('returns only WA addresses from the list', function () {
    addresses.forEach(function (singleAddress) {
      assert.equal(singleAddress.state, 'WA');
    });
  });

  it('ensures the data structure of all WA addresses are uniform', function () {
    addresses.forEach(function (singleAddress) {
      expect(singleAddress).to.contain.all.keys('street1', 'street2', 'city', 'state', 'zip', 'country');
    });
  });
});
