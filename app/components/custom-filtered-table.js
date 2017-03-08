// BEGIN-SNIPPET custom-filtered-table
import Ember from "ember";
const {isEmpty, get} = Ember;

export default Ember.Component.extend({
  tableClassNames:'table table-striped table-bordered table-hover table-responsive table-condensed',
  positions: ['Guard', 'Forward', 'Center'],

  filteredData: Ember.computed('data', 'selectedPosition', function () {
    if (isEmpty(this.get('selectedPosition'))) {
      return this.get('data');
    }

    return this.get('data').filter((item)=>{
      return get(item, 'position') === this.get('selectedPosition');
    });
  }),

  actions:{
    selectionChanged: function(selectedRows){
      this.set('selectedRows', selectedRows);
    }
  }
});
// END-SNIPPET
