import DS from 'ember-data';

var Task = DS.Model.extend({
  title: DS.attr('string'),
  description:  DS.attr('string'),
  user: DS.belongsTo('user')
});

export default Task;