import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('advanced-filtered-table', 'Integration | Component | advanced filtered table', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{advanced-filtered-table}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#advanced-filtered-table}}
      template block text
    {{/advanced-filtered-table}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
