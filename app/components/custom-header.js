// BEGIN-SNIPPET custom-header
import Ember from 'ember';

export default Ember.Component.extend({
  tagName:'thead',

  actions: {
    checkBoxClicked: function(value) {
      let actionToCall = value === true ? this.get('selected') : this.get('deselected');

      actionToCall = actionToCall || Ember.K;

      actionToCall();
    }
  }
});
// END-SNIPPET
