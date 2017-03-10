import Ember from 'ember';

export default Ember.Component.extend({
  data: [
    {option: 'filterinformationupdated', type: 'closure-action', description: 'Closure action to be fired whenever filter ' +
    'value changes. The handling action definitions should expect the following parameters in order. <ul><li><b>fieldName</b> : ' +
    'the name (identifier) of the field (property) the filtering is being applied</li><li><b>filterValue</b> : The value ' +
    'of the filter to be applied to for the specified field</li></ul> This property is typically expected to be assigned ' +
    '<code>onfilterfieldupdated</code> yielded from <code>data-filterer</code> when used together.'},
    {option: 'placeHolder', type: 'string', description: 'The value to to display as prompt text for the input component ' +
    'that is displayed when <code>filterableColumn</code> is used in basic form as opposed to block form.'},
    {option: 'propertyName', type: 'string', description: 'The field name that determines the name of the property the filtering ' +
    'is to be applied for.'}
  ]
});
