// BEGIN-SNIPPET custom-footer
import Ember from 'ember';

export default Ember.Component.extend({
  tagName:'tfoot',

  actions: {
    buttonClicked: function(value) {
      let actionToCall = value === true ? this.get('selected') : this.get('deselected');

      actionToCall = actionToCall || Ember.K;

      actionToCall();
    }
  }
});
// END-SNIPPET
