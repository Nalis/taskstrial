import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    update: function (task) {
      var self = this;

      function transitionToTasks() {
        self.transitionTo('tasks');
      }

      function failure() {
        alert('failed');
      }

      task.save().then(transitionToTasks);
    },
    cancel: function () {
      this.transitionTo('tasks');
      return true;
    }
  },
  model: function(params) {
    return this.store.find('task', params.task_id);
  },

  setupController: function(controller, model) {
    controller.set('content', model);
    if(model.get('user')) {
      controller.set('user_id', model.get('user').get('id'));
    }
    controller.set('users', this.store.findAll('user'));
  }
});
