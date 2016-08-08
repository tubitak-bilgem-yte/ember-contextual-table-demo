import Ember from 'ember';

var sneijder = {name:'Wesley', surname:'Sneijder', age:32, nationality:'Dutch'};
var podolski = {name:'Lukas', surname: 'Podolski', age:31, nationality:'German'};
var muslera = {name:'Fernando', surname:'Muslera', age:30, nationality:'Uruguayan'};
var selcuk = {name:'Selcuk', surname: 'Inan', age:31, nationality: 'Turkish'};
var chedjou = {name:'Aurélien', surname:'Chedjou', age:31, nationality:'Cameroonian'};

var players = [sneijder, podolski, muslera, selcuk, chedjou];

export default Ember.Route.extend({
  model(){
    return players;
  }
});
