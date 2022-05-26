import { module, test } from 'qunit';
import { setupTest } from 'dummy-pro/tests/helpers';

module('Unit | Model | customer', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('customer', {});
    assert.ok(model);
  });
});
