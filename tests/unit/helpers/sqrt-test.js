import { sqrt } from 'dummy/helpers/sqrt';
import { module, test } from 'qunit';

module('Unit | Helper | sqrt', function() {
  test('square root works', function(assert) {
    const result = sqrt([25]);
    assert.equal(result, 5);
  });

  test('negative square root is NaN', function(assert) {
    const result = sqrt([-10]);
    assert.ok(isNaN(result));
  });
});
