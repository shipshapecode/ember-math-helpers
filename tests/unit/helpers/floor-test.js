import { floor } from 'dummy/helpers/floor';
import { module, test } from 'qunit';

module('Unit | Helper | floor', function () {
  test('it works', function (assert) {
    let result = floor([1]);
    assert.equal(result, 1);

    result = floor([1.01]);
    assert.equal(result, 1);

    result = floor([1.5]);
    assert.equal(result, 1);

    result = floor([1.99]);
    assert.equal(result, 1);

    result = floor([2]);
    assert.equal(result, 2);
  });
});
