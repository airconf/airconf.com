import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: [
    'keyword',
    'code_of_conduct',
    'live_captioning',
    'asl_interpretation',
    'child_care',
    'opportunity_scholarships',
    'family_track',
    'video_recordings',
    'wheelchair_access'
  ],

  keyword: null,
  code_of_conduct:          false,
  live_captioning:          false,
  asl_interpretation:       false,
  child_care:               false,
  opportunity_scholarships: false,
  family_track:             false,
  video_recordings:         false,
  wheelchair_access:        false
});
