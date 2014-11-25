import Ember from 'ember';

var TasksController = Ember.ArrayController.extend({
  sortProperties: ['id'],
  theFilter: "",

  actions: {
    sortBy: function(property) {
      this.set("sortProperties", [property]);
    }
  },

  checkFilterMatch: function(theObject, str) {
    var field, match;
    match = false;

    ['title', 'description'].forEach(function(field) {
      console.log('Hi' + field);
      console.log(theObject.get(field));
      if (theObject.get(field).toString().toUpperCase().slice(0, str.length) === str.toUpperCase()) {
        match = true;
      }
    });
    return match;
  },

  filterTasks: (function() {
    return this.get("arrangedContent").filter((function(_this) {
      return function(theObject, index, enumerable) {
        if (_this.get("theFilter")) {
          return _this.checkFilterMatch(theObject, _this.get("theFilter"));
        } else {
          return true;
        }
      };
    })(this));
  }).property("theFilter", "sortProperties")
});

export default TasksController;