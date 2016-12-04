import { sign } from 'dummy/helpers/sign';
import { module, test } from 'qunit';

module('Unit | Helper | sign');

test('it works', function(assert) {

  assert.equal(sign([-5]), -1, 'Negative returns -1');

  assert.equal(sign([5]), 1, 'Positive returns 1');

  assert.equal(String(sign(['foo'])), 'NaN', 'Invalid returns NaN');
});
