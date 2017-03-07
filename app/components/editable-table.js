// BEGIN-SNIPPET editable-table
import Ember from 'ember';
const {set, get} = Ember;

export default Ember.Component.extend({
  tableClassNames:'table table-striped table-bordered table-hover table-responsive table-condensed',

  actions:{
    onnickupdate(row, newNick) {
      set(row, 'previousNick', get(row, 'nick'));
      set(row, 'nick', newNick);
    }
  }
});
// END-SNIPPET
