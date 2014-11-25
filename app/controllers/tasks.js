import Ember from 'ember';

var TasksController = Ember.ArrayController.extend({
  sortProperties: ['id'],
  theFilter: "",

  actions: {
    sortBy: function(property) {
      if (this.get("sortProperties")[0] === property) {
        this.toggleProperty("sortAscending");
      } else {
        this.set("sortAscending", true);
        this.set("sortProperties", [property]);
      }
    }
  },

  checkFilterMatch: function(theObject, str) {
    var match;
    match = false;

    ['title', 'description'].forEach(function(field) {
      if (theObject.get(field).toString().toUpperCase().slice(0, str.length) === str.toUpperCase()) {
        match = true;
      }
    });
    return match;
  },

  filterTasks: (function() {
    return this.get("arrangedContent").filter((function(_this) {
      return function(theObject) {
        if (_this.get("theFilter")) {
          return _this.checkFilterMatch(theObject, _this.get("theFilter"));
        } else {
          return true;
        }
      };
    })(this));
  }).property("theFilter", "sortProperties", "sortAscending", 'model.@each'),

  sortedOnTitle: (function() {
    return this.get("sortProperties").get("0") === "title";
  }).property("sortProperties"),

  sortedOnDescription: (function() {
    return this.get("sortProperties").get("0") === "description";
  }).property("sortProperties"),

  glyphiconDirection: (function() {
    if (this.get("sortAscending")) {
      return "glyphicon-chevron-down";
    } else {
      return "glyphicon-chevron-up";
    }
  }).property("sortAscending")
});

export default TasksController;