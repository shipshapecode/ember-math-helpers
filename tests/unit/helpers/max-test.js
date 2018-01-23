import { max } from 'dummy/helpers/max';
import { module, test } from 'qunit';

module('Unit | Helper | max', function() {
  test('max works', function(assert) {
    assert.equal(max([1, 2, 3, 5, 6, 42, 3, 6, 7]), 42, 'accepts multiple arguments');

    assert.equal(max([42]), 42, 'accepts one argument');

    assert.equal(max([]), Number.NEGATIVE_INFINITY, 'accepts zero arguments');
  });
});
