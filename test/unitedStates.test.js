/* eslint-env node, mocha */
const assert = require('chai').assert;
const expect = require('chai').expect;
const dad = require('../index');

describe('US AZ Address Data', function () {
  const address = dad.random('US_AZ');
  const addresses = dad.list('US_AZ');

  it('returns a random AZ address', function () {
    assert.equal(address.state, 'AZ');
  });

  it('returns a list of AZ addresses with a length of 100', function () {
    assert.equal(addresses.length, 100);
  });

  addresses.forEach(function (singleAddress) {
    it(`returns "${singleAddress.street1}" from a list of AZ addresses`, function () {
      assert.equal(singleAddress.state, 'AZ');
    });
  });

  addresses.forEach(function (singleAddress) {
    it(`ensures the data structure of "${singleAddress.street1}" is uniform`, function () {
      expect(singleAddress).to.contain.all.keys('street1', 'street2', 'city', 'state', 'zip', 'country');
    });
  });
});

describe('US CA Address Data', function () {
  const address = dad.random('US_CA');
  const addresses = dad.list('US_CA');

  it('returns a random CA address', function () {
    assert.equal(address.state, 'CA');
  });

  it('returns a list of CA addresses with a length of 100', function () {
    assert.equal(addresses.length, 100);
  });

  addresses.forEach(function (singleAddress) {
    it(`returns "${singleAddress.street1}" from a list of CA addresses`, function () {
      assert.equal(singleAddress.state, 'CA');
    });
  });

  addresses.forEach(function (singleAddress) {
    it(`ensures the data structure of "${singleAddress.street1}" is uniform`, function () {
      expect(singleAddress).to.contain.all.keys('street1', 'street2', 'city', 'state', 'zip', 'country');
    });
  });
});

describe('US ID Address Data', function () {
  const address = dad.random('US_ID');
  const addresses = dad.list('US_ID');

  it('returns a random ID address', function () {
    assert.equal(address.state, 'ID');
  });

  it('returns a list of ID addresses with a length of 100', function () {
    assert.equal(addresses.length, 100);
  });

  addresses.forEach(function (singleAddress) {
    it(`returns "${singleAddress.street1}" from a list of ID addresses`, function () {
      assert.equal(singleAddress.state, 'ID');
    });
  });

  addresses.forEach(function (singleAddress) {
    it(`ensures the data structure of "${singleAddress.street1}" is uniform`, function () {
      expect(singleAddress).to.contain.all.keys('street1', 'street2', 'city', 'state', 'zip', 'country');
    });
  });
});

describe('US KS Address Data', function () {
  const address = dad.random('US_KS');
  const addresses = dad.list('US_KS');

  it('returns a random KS address', function () {
    assert.equal(address.state, 'KS');
  });

  it('returns a list of KS addresses with a length of 100', function () {
    assert.equal(addresses.length, 100);
  });

  addresses.forEach(function (singleAddress) {
    it(`returns "${singleAddress.street1}" from a list of KS addresses`, function () {
      assert.equal(singleAddress.state, 'KS');
    });
  });

  addresses.forEach(function (singleAddress) {
    it(`ensures the data structure of "${singleAddress.street1}" is uniform`, function () {
      expect(singleAddress).to.contain.all.keys('street1', 'street2', 'city', 'state', 'zip', 'country');
    });
  });
});

describe('US NV Address Data', function () {
  const address = dad.random('US_NV');
  const addresses = dad.list('US_NV');

  it('returns a random NV address', function () {
    assert.equal(address.state, 'NV');
  });

  it('returns a list of NV addresses with a length of 100', function () {
    assert.equal(addresses.length, 100);
  });

  addresses.forEach(function (singleAddress) {
    it(`returns "${singleAddress.street1}" from a list of NV addresses`, function () {
      assert.equal(singleAddress.state, 'NV');
    });
  });

  addresses.forEach(function (singleAddress) {
    it(`ensures the data structure of "${singleAddress.street1}" is uniform`, function () {
      expect(singleAddress).to.contain.all.keys('street1', 'street2', 'city', 'state', 'zip', 'country');
    });
  });
});

describe('US NY Address Data', function () {
  const address = dad.random('US_NY');
  const addresses = dad.list('US_NY');

  it('returns a random NY address', function () {
    assert.equal(address.state, 'NY');
  });

  it('returns a list of NY addresses with a length of 100', function () {
    assert.equal(addresses.length, 100);
  });

  addresses.forEach(function (singleAddress) {
    it(`returns "${singleAddress.street1}" from a list of NY addresses`, function () {
      assert.equal(singleAddress.state, 'NY');
    });
  });

  addresses.forEach(function (singleAddress) {
    it(`ensures the data structure of "${singleAddress.street1}" is uniform`, function () {
      expect(singleAddress).to.contain.all.keys('street1', 'street2', 'city', 'state', 'zip', 'country');
    });
  });
});

describe('US OR Address Data', function () {
  const address = dad.random('US_OR');
  const addresses = dad.list('US_OR');

  it('returns a random OR address', function () {
    assert.equal(address.state, 'OR');
  });

  it('returns a list of OR addresses with a length of 100', function () {
    assert.equal(addresses.length, 100);
  });

  addresses.forEach(function (singleAddress) {
    it(`returns "${singleAddress.street1}" from a list of OR addresses`, function () {
      assert.equal(singleAddress.state, 'OR');
    });
  });

  addresses.forEach(function (singleAddress) {
    it(`ensures the data structure of "${singleAddress.street1}" is uniform`, function () {
      expect(singleAddress).to.contain.all.keys('street1', 'street2', 'city', 'state', 'zip', 'country');
    });
  });
});

describe('US TX Address Data', function () {
  const address = dad.random('US_TX');
  const addresses = dad.list('US_TX');

  it('returns a random TX address', function () {
    assert.equal(address.state, 'TX');
  });

  it('returns a list of TX addresses with a length of 100', function () {
    assert.equal(addresses.length, 100);
  });

  addresses.forEach(function (singleAddress) {
    it(`returns "${singleAddress.street1}" from a list of TX addresses`, function () {
      assert.equal(singleAddress.state, 'TX');
    });
  });

  addresses.forEach(function (singleAddress) {
    it(`ensures the data structure of "${singleAddress.street1}" is uniform`, function () {
      expect(singleAddress).to.contain.all.keys('street1', 'street2', 'city', 'state', 'zip', 'country');
    });
  });
});

describe('US UT Address Data', function () {
  const address = dad.random('US_UT');
  const addresses = dad.list('US_UT');

  it('returns a random UT address', function () {
    assert.equal(address.state, 'UT');
  });

  it('returns a list of UT addresses with a length of 100', function () {
    assert.equal(addresses.length, 100);
  });

  addresses.forEach(function (singleAddress) {
    it(`returns "${singleAddress.street1}" from a list of UT addresses`, function () {
      assert.equal(singleAddress.state, 'UT');
    });
  });

  addresses.forEach(function (singleAddress) {
    it(`ensures the data structure of "${singleAddress.street1}" is uniform`, function () {
      expect(singleAddress).to.contain.all.keys('street1', 'street2', 'city', 'state', 'zip', 'country');
    });
  });
});

describe('US WA Address Data', function () {
  const address = dad.random('US_WA');
  const addresses = dad.list('US_WA');

  it('returns a random WA address', function () {
    assert.equal(address.state, 'WA');
  });

  it('returns a list of WA addresses with a length of 100', function () {
    assert.equal(addresses.length, 100);
  });

  addresses.forEach(function (singleAddress) {
    it(`returns "${singleAddress.street1}" from a list of WA addresses`, function () {
      assert.equal(singleAddress.state, 'WA');
    });
  });

  addresses.forEach(function (singleAddress) {
    it(`ensures the data structure of "${singleAddress.street1}" is uniform`, function () {
      expect(singleAddress).to.contain.all.keys('street1', 'street2', 'city', 'state', 'zip', 'country');
    });
  });
});
