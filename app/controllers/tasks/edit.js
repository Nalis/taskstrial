import Ember from 'ember';

export default Ember.ObjectController.extend({
  users: function() { return this.store.findAll('user'); }
});
