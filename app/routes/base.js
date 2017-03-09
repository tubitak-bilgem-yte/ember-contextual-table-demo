import Ember from 'ember';
import data from '../data';

export default Ember.Route.extend({
  model(){
    return data.players.slice();
  },

  activate() {
    this._super();
    window.scrollTo(0, 0);
  }
});
