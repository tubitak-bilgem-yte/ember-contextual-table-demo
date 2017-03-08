// BEGIN-SNIPPET remote-calling-paginated-table
import Ember from 'ember';

export default Ember.Component.extend({
  currentPage:1,
  pageSize:5,
  nextDisabled:Ember.computed.gt('currentPage', 5),
  tableClassNames:'table table-striped table-bordered table-hover table-responsive table-condensed',
  data: Ember.A(),

  didInsertElement() {
    this.fetchData();
  },

  fetchData() {
    let url = `https://api.github.com/repos/emberjs/ember.js/events?page=${this.get('currentPage')}&per_page=${this.get('pageSize')}`;

    Ember.$.getJSON(url, (json) => {
      this.set('data', json);
    });
  },

  actions: {
    nextPageRequested() {
      this.incrementProperty('currentPage');
      this.fetchData();
    },

    prevPageRequested() {
      this.decrementProperty('currentPage');
      this.fetchData();
    },

    selectionChanged:function(selectedRows){
      this.set('selectedRows', selectedRows);
    }
  }
});
// END-SNIPPET
