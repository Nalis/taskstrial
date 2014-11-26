import DS from 'ember-data';

var User = DS.Model.extend({
  name: DS.attr('string'),
  authenticated: null,
  tasks: DS.hasMany('task')
});
export default User;
