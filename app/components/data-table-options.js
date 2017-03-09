import Ember from 'ember';

export default Ember.Component.extend({
  data: [
    {option: 'customFooter', type: 'string or component', description: 'Custom footer component to use as footer of the ' +
    'table. Component provided will be passed the following attributes: <ul><li><b>isSelected</b> : boolean type field to indicate ' +
    'whether all the rows are selected or not.</li><li><b>selected</b> : a closure action that provides the table to select ' +
    'all rows.</li><li><b>deselected</b> : a closure action that provides the table to unselect all rows.</li></ul>'},
    {option: 'customHeader', type: 'string or component', description: 'Custom header component to use as header of the ' +
    'table. Component provided will be passed the following attributes: <ul><li><b>isSelected</b> : boolean type field to indicate ' +
    'whether all the rows are selected or not.</li><li><b>selected</b> : a closure action that provides the table to select ' +
    'all rows.</li><li><b>deselected</b> : a closure action that provides the table to unselect all rows.</li></ul>'},
    {option: 'data', type: 'array', description: 'Collection of items to display in the table as rows.'},
    {option: 'selectionChanged', type: 'closure-action', description: 'The action to fire whenever the selected rows of ' +
    'the table changes. The handling action definitions should expect list of selected rows as parameter.'},
    {option: 'selectionMode', type: 'string', description: 'The selection mode the table is to support. A value of "single" ' +
    'results in a table that only allows single row to be selected. Any other value assigned results in a multi-selection table.'},
    {option: 'showHeader', type: 'boolean', description: 'Determines whether to display headers or not, default value is true.'},
    {option: 'showFooter', type: 'boolean', description: 'Determines whether to display footer or not, default value is false.'}
  ]
});
