import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    keyword: {
      refreshModel: true
    },
    code_of_conduct: {
      refreshModel: true
    },
    captions: {
      refreshModel: true
    },
    asl_interpretation: {
      refreshModel: true
    },
    child_care: {
      refreshModel: true
    },
    opportunity_scholarships: {
      refreshModel: true
    },
    family_track: {
      refreshModel: true
    },
    video_recordings: {
      refreshModel: true
    },
    wheelchair_access: {
      refreshModel: true
    }
  },

  model(params) {
    return this.store.query('conference', params);
  }
});
