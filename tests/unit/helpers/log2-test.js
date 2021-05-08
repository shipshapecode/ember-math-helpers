import { log2 } from 'dummy/helpers/log2';
import { module, test } from 'qunit';

module('Unit | Helper | log2', function () {
  test('log2 works', function (assert) {
    const result = log2([2]);
    assert.equal(result, 1);
  });
});
