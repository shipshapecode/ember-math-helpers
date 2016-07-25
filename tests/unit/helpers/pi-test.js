import { pi } from 'dummy/helpers/pi';
import { module, test } from 'qunit';

module('Unit | Helper | pi');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = pi();
  console.log(result);
  assert.equal(result, 3.141592653589793, 'The Pi helper works as expected');
});
