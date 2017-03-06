import Ember from 'ember';
const {computed} = Ember;

export default Ember.Component.extend({
  tagName:'',
  linkClass: computed('isActive', function () {
    return this.get('isActive') ? 'active-link' : '';
  })
});
