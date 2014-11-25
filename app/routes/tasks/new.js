import Ember from 'ember';
//import Task from 'taskstrial-frontend/models/task';

var TaskNewRoute = Ember.Route.extend({
  actions: {
    create: function(task) {
      var self = this;

      function transitionToTasks() {
        self.transitionTo('tasks');
      }

      function failure(reason) {
        // handle the error
      }

      console.log(task._attributes);
      task.save().then(transitionToTasks).catch(failure);
    },
    cancel: function() {
      this.transitionTo('tasks');
      return true;
    }
  },
  model: function() {
    // provide a new photo to the template
    return this.store.createRecord('task');
  }
});

export default TaskNewRoute;
