
import { acos } from 'dummy/helpers/acos';
import { module, test } from 'qunit';

module('Unit | Helper | acos');

test('acos works', function(assert) {
  const result = acos([1]);
  assert.equal(result, 0);
});

