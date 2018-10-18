import { lcm } from 'dummy/helpers/lcm';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Helper | lcm', function(hooks) {
  setupTest(hooks);

  module('Two integers', function() {
    test('computing lcm for a larger and smaller integer', function(assert) {
      assert.equal(lcm([100, 48]), 1200);
      assert.equal(lcm([48, 100]), 1200);
      assert.equal(lcm([12, 18]), 36);
      assert.equal(lcm([100, 0]), 0);
    });
    test('computing lcm for the absolute value of two integers ', function(assert) {
      assert.equal(lcm([-100, 48]), 1200);
      assert.equal(lcm([100, -48]), 1200);
      assert.equal(lcm([-12, 18]), 36);
      assert.equal(lcm([0, -48]), 0);
    });
  });
  module('Edge-case inputs', function() {
    test('returning 0 by default', function(assert) {
      const result = lcm([]);

      assert.equal(result, 0);
    });
    test('reflecting back single-integer inputs', function(assert) {
      const result = lcm([48]);

      assert.equal(result, 0);
    });
    test('handling numeric strings', function(assert) {
      const result = lcm(['2', '4']);

      assert.equal(result, 4);
    });
  });
});
