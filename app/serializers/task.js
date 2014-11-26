import DS from 'ember-data';

var TaskSerializer = DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    user: {embedded: 'always'}
  }
});

export default TaskSerializer;
