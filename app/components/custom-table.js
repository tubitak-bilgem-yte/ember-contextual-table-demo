// BEGIN-SNIPPET custom-table
import Ember from 'ember';

export default Ember.Component.extend({
  currentYear: new Date().getFullYear(),
  tableClassNames:'table table-striped table-bordered table-hover table-responsive table-condensed'
});
// END-SNIPPET
