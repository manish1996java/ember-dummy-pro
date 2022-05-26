import Route from '@ember/routing/route';

export default class CustomerRoute extends Route {
  model(params) {
    console.log(this.store);
    console.log('params', params);
    return;
  }
}
