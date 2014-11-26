import Ember from 'ember';
//import Task from 'taskstrial-frontend/models/task';

var TaskNewRoute = Ember.Route.extend({
  actions: {
    create: function(task) {
      var self = this;

      function transitionToTasks() {
        self.transitionTo('tasks');
      }

      function failure() {
        // handle the error
      }

      this.store.find('user', task.user_id).then(function(user) {
        console.log(user.get('id'));
        task.set('user', user);
        task.save().then(transitionToTasks).catch(failure);
      });
    },
    cancel: function() {
      this.transitionTo('tasks');
      return true;
    }
  },

  setupController: function(controller, model) {
    controller.set('content', model);
    controller.set('users', this.store.findAll('user'));
  },

  model: function() {
    // provide a new photo to the template
    return this.store.createRecord('task');
  }
});

export default TaskNewRoute;
