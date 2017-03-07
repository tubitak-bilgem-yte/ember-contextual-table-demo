import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('basic-usage');
  this.route('overview');
  this.route('cell-customization');
});

export default Router;
