import { imul } from 'dummy/helpers/imul';
import { module, test } from 'qunit';

module('Unit | Helper | imul', function() {
  test('imul works', function(assert) {
    const result = imul([0xfffffffe, 5]);
    assert.equal(result, -10);
  });
});

