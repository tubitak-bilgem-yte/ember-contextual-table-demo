import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  navigationService: service(),

  beforeModel() {
    this.transitionTo(this.get('navigationService').getFirstRoute());
  }
});
