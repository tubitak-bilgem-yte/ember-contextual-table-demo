// BEGIN-SNIPPET resizable-column-table
import Ember from 'ember';

export default Ember.Component.extend({
  tableClassNames:'table table-striped table-bordered table-hover table-responsive table-condensed',

  didInsertElement(){
    this.$(".contextual-data-table").colResizable({
      liveDrag:true,
      draggingClass:"dragging"
    });
  }
});
// END-SNIPPET
