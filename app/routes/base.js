import Ember from 'ember';
import data from '../data';

export default Ember.Route.extend({
  model(){
    return data.players;
  }
});
