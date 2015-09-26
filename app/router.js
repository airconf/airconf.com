import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('conference', {path: '/:id'});
  this.route('search', {path: '/s'});
});

export default Router;
