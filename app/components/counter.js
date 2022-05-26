import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Counter extends Component {
  @tracked count = 0;
  @tracked val = '';

  @action
  countChange(arg) {
    this.count += arg;
  }

  @action
  onInputChange(event) {
    this.val = event.target.value;
  }
}
