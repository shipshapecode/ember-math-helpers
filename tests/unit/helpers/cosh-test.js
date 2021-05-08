import { cosh } from 'dummy/helpers/cosh';
import { module, test } from 'qunit';

module('Unit | Helper | cosh', function () {
  test('cosh works', function (assert) {
    const result = cosh([0]);
    assert.equal(result, 1);
  });
});
