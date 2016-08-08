// BEGIN-SNIPPET filtered-table
import Ember from 'ember';

export default Ember.Component.extend({
  tableClassNames:'table table-striped table-bordered table-hover table-responsive table-condensed',

  nameFilterValue:'',

  filteredData:Ember.computed('data','nameFilterValue', function(){
    let data = this.get('data')||[];
    let nameFilterValue = this.get('nameFilterValue')||'';

    if(nameFilterValue.trim().length===0){
      return data;
    }

    return data.filter((item)=>{
      return ((Ember.get(item,'name')||'').indexOf(nameFilterValue)>=0);
    });
  }),

  actions:{
    selectionChanged:function(selectedRows){
      this.set('selectedRows', selectedRows);
    }
  }
});
// END-SNIPPET
