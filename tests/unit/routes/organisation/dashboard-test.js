import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | organisation/dashboard', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:organisation/dashboard');
    assert.ok(route);
  });
});
