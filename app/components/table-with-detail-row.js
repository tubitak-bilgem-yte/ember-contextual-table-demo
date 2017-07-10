// BEGIN-SNIPPET table-with-detail-row
import Ember from 'ember';

export default Ember.Component.extend({
  tableClassNames:'table table-striped table-bordered table-hover table-responsive table-condensed',

  discardDetail() {
    this.set('rowIndexToShowDetail', null);
    this.set('newNickToSet', null);
  },

  actions: {
    toggleDetail(rowIndex) {
      if (this.get('rowIndexToShowDetail')===rowIndex) {
        this.discardDetail();
      } else {
        this.set('rowIndexToShowDetail', rowIndex);
        this.set('newNickToSet', this.get('data')[rowIndex].nick);
      }
    },

    onnickupdate(newNick) {
      this.set('newNickToSet', newNick);
    },

    discardChanges() {
      this.discardDetail();
    },

    saveChanges() {
      Ember.set(this.get('data')[this.get('rowIndexToShowDetail')], 'nick', this.get('newNickToSet'));
      this.discardDetail();
    }
  }
});
// END-SNIPPET
