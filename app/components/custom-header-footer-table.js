// BEGIN-SNIPPET custom-header-footer-table
import Ember from 'ember';

export default Ember.Component.extend({
  tableClassNames:'table table-striped table-bordered table-hover table-responsive table-condensed',
  selectedRows: Ember.A(),
  currentYear: new Date().getFullYear(),
  ages: Ember.computed('selectedRows.[]', function () {
    return this.get('selectedRows').map((item)=>{
      return this.get('currentYear')-Ember.get(item, 'birthYear');
    });
  }),
  avgAge:Ember.computed('ages', function(){
    if (this.get('ages').length === 0) {
      return '-';
    }

    let sum = this.get('ages').reduce(function(a, b) { return a + b; });
    return sum / this.get('ages').length;
  }),

  actions:{
    selectionChanged:function(selectedRows){
      this.set('selectedRows', selectedRows);
    }
  }
});
// END-SNIPPET
