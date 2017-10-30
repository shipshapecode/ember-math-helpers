import { trunc } from 'dummy/helpers/trunc';
import { module, test } from 'qunit';

module('Unit | Helper | trunc', function() {
  test('trunc works', function(assert) {
    let result;
    result = trunc([13.37]);
    assert.equal(result, 13);
    result = trunc([0.123]);
    assert.equal(result, 0);
    result = trunc([-1.123]);
    assert.equal(result, -1);
  });
});
