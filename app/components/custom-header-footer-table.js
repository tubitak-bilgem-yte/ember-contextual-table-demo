// BEGIN-SNIPPET custom-header-footer-table
import Ember from 'ember';

export default Ember.Component.extend({
  ages:Ember.computed.mapBy('selectedRows','age'),
  avgAge:Ember.computed('ages', function(){

    if (this.get('ages').length === 0) {
      return '-';
    }

    var sum = this.get('ages').reduce(function(a, b) { return a + b; });
    return sum / this.get('ages').length;
  }),
  tableClassNames:'table table-striped table-bordered table-hover table-responsive table-condensed',

  actions:{
    selectionChanged:function(selectedRows){
      this.set('selectedRows', selectedRows);
    }
  }
});
// END-SNIPPET
