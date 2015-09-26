import Ember from 'ember';
import Tabletop from 'tabletop';

var spreadsheet = "https://docs.google.com/spreadsheets/d/11LUcjP7VuiW9kbYfG3ygT5t20jLcv4UDhkcWxpWS7JA/pubhtml";

export default Ember.Service.extend({
  fetch: function(worksheet, query) {
    var promise = new Ember.RSVP.Promise((resolve) => {
      Tabletop.init({
        key: spreadsheet,
        query: query,
        wanted: [worksheet],
        callback: function(data) {
          resolve(data[worksheet].elements);
        }
      });
    });

    return promise;
  }
});
