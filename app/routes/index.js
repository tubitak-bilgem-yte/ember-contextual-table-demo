import Ember from 'ember';

export default Ember.Route.extend({
  navigationService: Ember.inject.service(),

  beforeModel() {
    this.transitionTo(this.get('navigationService').getFirstRoute());
  }
});
