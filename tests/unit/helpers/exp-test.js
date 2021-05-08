import { exp } from 'dummy/helpers/exp';
import { module, test } from 'qunit';

module('Unit | Helper | exp', function () {
  test('exp works', function (assert) {
    const result = exp([1]);
    assert.equal(result.toFixed(3), 2.718);
  });
});
