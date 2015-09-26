import DS from 'ember-data';

export default DS.Model.extend({
  name:                     DS.attr(),
  description:              DS.attr(),
  start_date:               DS.attr('date'),
  end_date:                 DS.attr('date'),
  featured:                 DS.attr('boolean'),
  code_of_conduct:          DS.attr('boolean'),
  live_captioning:          DS.attr('boolean'),
  asl_interpretation:       DS.attr('boolean'),
  child_care:               DS.attr('boolean'),
  opportunity_scholarships: DS.attr('boolean'),
  family_track:             DS.attr('boolean'),
  video_recordings:         DS.attr('boolean'),
  wheelchair_access:        DS.attr('boolean')
});
