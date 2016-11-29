import { asinh } from 'dummy/helpers/asinh';
import { module, test } from 'qunit';

module('Unit | Helper | asinh');

test('asinh works', function(assert) {
  const result = asinh([0]);
  assert.equal(result, 0);
});

