import DS from 'ember-data';

var User = DS.Model.extend({
  name: DS.attr('string'),
  authenticated: DS.attr('bool')
});
export default User;
