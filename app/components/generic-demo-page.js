import Ember from 'ember';

export default Ember.Component.extend({
  collapsed:true,

  actions:{
    toggleCollapse(){
      this.toggleProperty('collapsed');
    }
  }
});
