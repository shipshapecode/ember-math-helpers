import { log1p } from 'dummy/helpers/log1p';
import { module, test } from 'qunit';

module('Unit | Helper | log1p');

test('log1p works', function(assert) {
  const result = log1p([0.5]);
  assert.equal(result.toFixed(3), 0.405);
});

