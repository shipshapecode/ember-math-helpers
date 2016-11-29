import { cos } from 'dummy/helpers/cos';
import { module, test } from 'qunit';

module('Unit | Helper | cos');

test('cos works', function(assert) {
  const result = cos([0]);
  assert.equal(result, 1);
});

