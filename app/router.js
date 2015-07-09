import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('login');
	this.route('index', { path: '/' });
	this.route('jedi');
	this.route('padawan');
	this.route('catchall', { path: '/*wildcard' });
});

export default Router;
