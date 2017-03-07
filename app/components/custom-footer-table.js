// BEGIN-SNIPPET custom-footer-table
import Ember from 'ember';

export default Ember.Component.extend({
  selectedRows: Ember.A(),
  tableClassNames:'table table-striped table-bordered table-hover table-responsive table-condensed',
  currentYear: new Date().getFullYear(),
  ages: Ember.computed('selectedRows.[]', function () {
    return this.get('selectedRows').map((item)=>{
      return this.get('currentYear')-Ember.get(item, 'birthYear');
    });
  }),
  totalAges: Ember.computed.sum('ages'),
  teams: Ember.computed.mapBy('selectedRows', 'team'),
  distinctTeams:Ember.computed.uniq('teams'),

  actions:{
    selectionChanged:function(selectedRows){
      this.set('selectedRows', selectedRows);
    }
  }
});
// END-SNIPPET
