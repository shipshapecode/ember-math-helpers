
import { sin } from 'dummy/helpers/sin';
import { module, test } from 'qunit';

module('Unit | Helper | sin');

test('sin works', function(assert) {
  let result = sin([0]);
  assert.equal(result, 0);
});

