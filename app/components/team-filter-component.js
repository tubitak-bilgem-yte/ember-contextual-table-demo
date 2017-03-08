// BEGIN-SNIPPET team-filter-component
import Ember from 'ember';

export default Ember.Component.extend({
  tagName:'',

  actions: {
    teamSelectionChanged: function (selectedTeams) {
      this.set('selectedTeams', selectedTeams);
      this.get('filterinformationupdated')('team', selectedTeams);
    }
  }
});
// END-SNIPPET
