import Ember from 'ember';
const {computed} = Ember;

export default Ember.Component.extend({
  tagName:'',
  routing: Ember.inject.service("-routing"),
  linkClass: computed('routing.currentRouteName', function () {
    let result = this.get('target') === this.get('routing.currentRouteName');

    return result ? 'active-link' : '';
  })
});
