// BEGIN-SNIPPET sortable-position-header
import Ember from 'ember';

export default Ember.Component.extend({
  sortingEnabled: false,
  sortingDisabled: Ember.computed.not('sortingEnabled'),
  sortingModes: ['ascending', 'descending'],
  sortingMode: 'ascending',
  isAscending: Ember.computed.equal('sortingMode', 'ascending'),

  fireSortingInformationUpdated() {
    let sortingModeToFire = this.get('sortingEnabled') ? this.get('isAscending') : undefined;
    this.get('onsortinfoupdate')('position', sortingModeToFire);
  },

  actions: {
    toggleSorting() {
      this.toggleProperty('sortingEnabled');
      this.fireSortingInformationUpdated();
    },

    changeSortingMode(sortingMode) {
      this.set('sortingMode', sortingMode);
      this.fireSortingInformationUpdated();
    }
  }
});
// END-SNIPPET
