import { percent } from 'dummy/helpers/percent';
import { module, test } from 'qunit';

module('Unit | Helper | percent');

test('it calculates percentage', function(assert) {
  let result = percent([5, 80]);
  assert.equal(result, 4);

  result = percent([100, 150]);
  assert.equal(result, 150);

  result = percent([5, -50]);
  assert.equal(result, -2.5);
});

