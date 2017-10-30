import { logE } from 'dummy/helpers/log-e';
import { module, test } from 'qunit';

module('Unit | Helper | logE', function() {
  test('logE works', function(assert) {
    const result = logE([0.5]);
    assert.equal(result.toFixed(3), -0.693);
  });
});

