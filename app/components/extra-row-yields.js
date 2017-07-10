import Ember from 'ember';

export default Ember.Component.extend({
  data: [
    {option: 'isRowSelected', type: 'boolean', description: 'Boolean flag to indicate whether or not the corresponding row ' +
    'for which this extra row is to be displayed is selected or not.'},
    {option: 'row', type: 'json', description: 'It is the row for which this extra row is being rendered.'},
    {option: 'rowIndex', type: 'number', description: 'The index of the row for which this extra row is being rendered.'}
  ]
});
