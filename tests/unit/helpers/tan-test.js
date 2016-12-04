import { tan } from 'dummy/helpers/tan';
import { module, test } from 'qunit';

module('Unit | Helper | tan');

test('tan works', function(assert) {
  const result = tan([1]);
  assert.equal(result.toFixed(3), 1.557);
});

