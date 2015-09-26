import Ember from 'ember';

export default Ember.Controller.extend({
  keyword:                  null,
  code_of_conduct:          false,
  live_captioning:          false,
  asl_interpretation:       false,
  child_care:               false,
  opportunity_scholarships: false,
  family_track:             false,
  video_recordings:         false,
  wheelchair_access:        false,

  actions: {
    search() {
      var keyword                  = this.get('keyword');
      var code_of_conduct          = this.get('code_of_conduct');
      var live_captioning          = this.get('live_captioning');
      var asl_interpretation       = this.get('asl_interpretation');
      var child_care               = this.get('child_care');
      var opportunity_scholarships = this.get('opportunity_scholarships');
      var family_track             = this.get('family_track');
      var video_recordings         = this.get('video_recordings');
      var wheelchair_access        = this.get('wheelchair_access');

      var query = {};

      if (keyword) {
        query.keyword = keyword;
      }

      if (code_of_conduct) {
        query.code_of_conduct = code_of_conduct;
      }

      if (live_captioning) {
        query.live_captioning = live_captioning;
      }

      if (asl_interpretation) {
        query.asl_interpretation = asl_interpretation;
      }

      if (child_care) {
        query.child_care = child_care;
      }

      if (opportunity_scholarships) {
        query.opportunity_scholarships = opportunity_scholarships;
      }

      if (family_track) {
        query.family_track = family_track;
      }

      if (video_recordings) {
        query.video_recordings = video_recordings;
      }

      if (wheelchair_access) {
        query.wheelchair_access = wheelchair_access;
      }

      this.transitionTo('search', {queryParams: query});
    }
  }
});
