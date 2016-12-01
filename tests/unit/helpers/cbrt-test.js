import { cbrt } from 'dummy/helpers/cbrt';
import { module, test } from 'qunit';

module('Unit | Helper | cbrt');

test('cbrt works', function(assert) {
  const result = cbrt([27]);
  assert.equal(result, 3);
});

