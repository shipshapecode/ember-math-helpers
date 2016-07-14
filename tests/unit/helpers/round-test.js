import { round } from 'dummy/helpers/round';
import { module, test } from 'qunit';

module('Unit | Helper | round');

// Replace this with your real tests.
test('it works', function(assert) {

  assert.equal(round([20.49]), 20, 'It rounds values witha decimal place less than .5 down');

  assert.equal(round([20.5]), 21, 'It rounds values with a decimal place greater than or equal to .5 up');

  assert.equal(round([-20.5]), -20, 'It rounds negative numbers up appropriately');

  assert.equal(round([-20.51]), -21, 'It rounds negative numbers down appropriately');

  assert.equal(round([42]), 42, 'When given a whole number, the result stays the same');

});
