import DS from 'ember-data';

var Task = DS.Model.extend({
  title: DS.attr('string'),
  description:  DS.attr('string')
});

export default Task;