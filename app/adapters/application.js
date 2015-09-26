import Ember from 'ember';
import DS from 'ember-data';

export default DS.Adapter.extend({
  spreadsheets: Ember.inject.service(),

  findAll: function(store, type) {
    var worksheet = Ember.String.pluralize(type.modelName);
    return this.get('spreadsheets').fetch(worksheet);
  },

  find: function(store, type, id) {
    var worksheet = Ember.String.pluralize(type.modelName);
    return this.get('spreadsheets').fetch(worksheet, "id=" + id).then((data) => {
      return data.shift();
    });
  },

  findQuery: function(store, type, query) {
    var worksheet = Ember.String.pluralize(type.modelName);
    var q = null;

    if (query) {
      q = Object.keys(query)
        .map((key) => [key, query[key]])
        .map(([k,v]) => [k.replace(/_/g, ''), v])
        .filter(([k,v]) => v)
        .map(([k,v]) => k + "=" + v)
        .join(" and ");
    }

    return this.get('spreadsheets').fetch(worksheet, q);

    // return this.findAll(store, type).then((data) => {
    //   return data.filter((datum) => {
    //     return Ember.keys(query).every((key) => {
    //       return !query[key] || datum[key] === query[key];
    //     });
    //   });
    // });
  },

  createRecord: function() { throw('not supported'); },
  updateRecord: function() { throw('not supported'); },
  deleteRecord: function() { throw('not supported'); }
});
