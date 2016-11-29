import { abs } from 'dummy/helpers/abs';
import { module, test } from 'qunit';

module('Unit | Helper | abs');

test('absolute value works', function(assert) {
  let result;
  result = abs([-1]);
  assert.equal(result, 1);
  result = abs([1]);
  assert.equal(result, 1);
});

test('absolute value of `null`, empty string, and empty array all equal 0', function(assert) {
  let result;
  result = abs([null]);
  assert.equal(result, 0);
  result = abs(['']);
  assert.equal(result, 0);
  result = abs([[]]);
  assert.equal(result, 0);
});

test('absolute value of empty object literal equals `NaN`', function(assert) {
  const result = abs([{}]);
  assert.ok(isNaN(result));
});
