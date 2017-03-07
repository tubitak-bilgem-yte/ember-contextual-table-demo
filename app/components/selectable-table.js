// BEGIN-SNIPPET selectable-table
import Ember from 'ember';

export default Ember.Component.extend({
  tableClassNames:'table table-striped table-bordered table-hover table-responsive table-condensed',

  actions: {
    selectionChanged:function(selectedRows){
      this.set('selectedRows', selectedRows);
      window.alert(`Number of selected rows is ${selectedRows.length}`);
    }
  }
});
// END-SNIPPET
