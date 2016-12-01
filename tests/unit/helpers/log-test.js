import { log } from 'dummy/helpers/log';
import { module, test } from 'qunit';

module('Unit | Helper | log');

test('log works', function(assert) {
  const result = log([0.5]);
  assert.equal(result.toFixed(3), -0.693);
});

