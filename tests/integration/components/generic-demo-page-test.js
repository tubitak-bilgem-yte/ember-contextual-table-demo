import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('generic-demo-page', 'Integration | Component | generic demo page', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{generic-demo-page}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#generic-demo-page}}
      template block text
    {{/generic-demo-page}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
