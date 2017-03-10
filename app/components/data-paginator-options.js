import Ember from 'ember';

export default Ember.Component.extend({
  data: [
    {option: 'data', type: 'array', description: 'Collection of items to be paginated.'},
    {option: 'pageSize', type: 'number', description: 'Number of items to be displayed per page.'}
  ]
});
