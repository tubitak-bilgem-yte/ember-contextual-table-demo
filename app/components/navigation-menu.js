import Ember from 'ember';

export default Ember.Component.extend({
  classNames:['sidenav col-md-10'],
  navigationService: Ember.inject.service()
});
