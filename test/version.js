const tape = require('tape');
const path = require('path');
const solc = require('../index.js')(path.join(__dirname, 'bin'));
const solcVnightly = solc.useVersion('v0.4.9-nightly.2017.1.31+commit.f9af2de0');

tape('Version and license', function (t) {
  t.test('check version', function (st) {
    var version = solcVnightly.version();

    st.equal(/(0\.4\.9\-nightly\.2017\.1\.31\+commit\.f9af2de0)/.test(version), true);
    st.equal(typeof version, 'string');
    st.end();
  });
  t.test('check license', function (st) {
    st.ok(typeof solcVnightly.license() === 'undefined' || typeof solc.license() === 'string');
    st.end();
  });
});
