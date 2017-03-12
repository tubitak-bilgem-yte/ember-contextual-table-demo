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
  this.route('header-footer-customization');
  this.route('pagination');
  this.route('filtering');
  this.route('sorting');
  this.route('installation');
  this.route('api-reference');
  this.route('col-resizable');
});

export default Router;
