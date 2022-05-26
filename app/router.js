import EmberRouter from '@ember/routing/router';
import config from 'dummy-pro/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home');
  this.route('about');
  this.route('reseller', function () {
    this.route('dashboard');
  });
  this.route('organisation', function () {
    this.route('dashboard');
  });

  this.route('customer', function () {
    this.route('dashboard');
  });
  this.route('customer-detail',{ path: '/:customer_id' })
});
