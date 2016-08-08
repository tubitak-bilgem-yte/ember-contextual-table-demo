import Ember from 'ember';

export default Ember.Component.extend({
  filesToDisplay:Ember.computed('files', function(){
    if (this.get('files')) {
      return this.get('files').split(',');
    }

    return [];
  }),

  collapsed:true,

  actions:{
    toggleCollapse(){
      this.toggleProperty('collapsed');
    }
  }
});
