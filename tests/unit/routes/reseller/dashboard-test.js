import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | reseller/dashboard', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:reseller/dashboard');
    assert.ok(route);
  });
});
