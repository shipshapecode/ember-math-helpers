import { asin } from 'dummy/helpers/asin';
import { module, test } from 'qunit';

module('Unit | Helper | asin', function() {
  test('asin works', function(assert) {
    const result = asin([0]);
    assert.equal(result, 0);
  });
});

