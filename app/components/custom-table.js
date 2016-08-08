// BEGIN-SNIPPET custom-table
import Ember from 'ember';

export default Ember.Component.extend({
  ages:Ember.computed.mapBy('selectedRows','age'),
  totalAges:Ember.computed.sum('ages'),
  tableClassNames:'table table-striped table-bordered table-hover table-responsive table-condensed',

  actions:{
    selectionChanged:function(selectedRows){
      this.set('selectedRows', selectedRows);
    }
  }
});
// END-SNIPPET
