import Ember from 'ember';

export default Ember.Controller.extend({
  navigationService: Ember.inject.service(),

  actions: {
    buttonClicked(target) {
      this.transitionToRoute(target);
    }
  }
});
