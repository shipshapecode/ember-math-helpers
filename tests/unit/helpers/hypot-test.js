import { hypot } from 'dummy/helpers/hypot';
import { module, test } from 'qunit';

module('Unit | Helper | hypot');

test('hypot works', function(assert) {
  const result = hypot([3, 4, 5]);
  assert.equal(result, 7.0710678118654755);
});

