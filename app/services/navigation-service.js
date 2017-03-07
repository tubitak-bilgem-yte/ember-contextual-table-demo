import Ember from 'ember';
const {computed, get} = Ember;
const {alias} = computed;

let menu = [{target: 'overview', text: 'Overview'}, {target: 'basic-usage', text: 'Basic Usage'},
  {target: 'cell-customization', text:'Cell Customization'}, {target: 'header-footer-customization', text: 'Header & Footer Customization'}];

export default Ember.Service.extend({
  menu: menu,

  routing: Ember.inject.service("-routing"),

  activeRoute: alias('routing.currentRouteName'),

  activeIndex: computed('activeRoute', function () {
    return this.get('menu').findIndex((item)=>{
     return get(item, 'target') === this.get('activeRoute');
    });
  }),

  nextHidden: computed('activeIndex', function () {
    return this.get('activeIndex') === this.get('menu').length - 1;
  }),

  prevHidden: computed('activeIndex', function () {
    return this.get('activeIndex') === 0;
  }),

  nextText: computed('nextHidden', function () {
    return this.get('nextHidden') ? '' : get(this.get('menu')[this.get('activeIndex')+1], 'text');
  }),

  nextTarget: computed('nextHidden', function () {
    return this.get('nextHidden') ? '' : get(this.get('menu')[this.get('activeIndex')+1], 'target');
  }),

  prevText: computed('prevHidden', function () {
    return this.get('prevHidden') ? '' : get(this.get('menu')[this.get('activeIndex')-1], 'text');
  }),

  prevTarget: computed('prevHidden', function () {
    return this.get('prevHidden') ? '' : get(this.get('menu')[this.get('activeIndex')-1], 'target');
  }),

  getFirstRoute() {
    return get(this.get('menu')[0], 'target');
  }
});
