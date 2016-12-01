import { atanh } from 'dummy/helpers/atanh';
import { module, test } from 'qunit';

module('Unit | Helper | atanh');

test('atanh works', function(assert) {
  const result = atanh([0]);
  assert.equal(result, 0);
});

