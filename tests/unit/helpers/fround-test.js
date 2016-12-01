import { fround } from 'dummy/helpers/fround';
import { module, test } from 'qunit';

module('Unit | Helper | fround');

test('fround works', function(assert) {
  const result = fround([1.337]);
  assert.equal(result, 1.3370000123977661);
});

