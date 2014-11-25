import Ember from 'ember';
//import DS from 'ember-data';

import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  // protected route that's inaccessible without authentication
  this.route('protected');
  this.resource('user', { path: 'users/:user_id' }, function() { });

  this.resource('tasks', {path:'/tasks'});
  this.resource('tasks.new', {path:'/tasks/new'});
});

var ApplicationRoute = Ember.Route.extend({
  actions: {
    goToNewTask: function() {
      this.transitionTo('tasks.new');
    },
    "delete": function(model) {
      this.pouch.DELETE(model);
      model.destroy();
    },
    cancel: function(model) {
      model.destroy();
    }
  }
});

export default ApplicationRoute;
export default Router;
