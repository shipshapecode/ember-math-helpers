import { pow } from 'dummy/helpers/pow';
import { module, test } from 'qunit';

module('Unit | Helper | pow');

test('pow works', function(assert) {
  const result = pow([7, 2]);
  assert.equal(result, 49);
});

test('negative base works', function(assert) {
  const result = pow([-7, 2]);
  assert.equal(result, 49);
});

test('negative exponent works', function(assert) {
  const result = pow([2, -2]);
  assert.equal(result, 0.25);
});
