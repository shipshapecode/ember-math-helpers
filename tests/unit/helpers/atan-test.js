import { atan } from 'dummy/helpers/atan';
import { module, test } from 'qunit';

module('Unit | Helper | atan');

test('atan works', function(assert) {
  const result = atan([0]);
  assert.equal(result, 0);
});

