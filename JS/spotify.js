var SpotifyWebApi = require('spotify-web-api-node');
 
// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: '',
  clientSecret: '',
  redirectUri: 'http://localhost:8889/callback'
});

spotifyApi.setAccessToken('<your_access_token>');


/* Get followed artists */
spotifyApi.getFollowedArtists({ limit : 1 })
  .then(function(data) {
    // 'This user is following 1051 artists!'
    console.log('This user is following ', data.body.artists.total, ' artists!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });

  spotifyApi.getMySavedAlbums({
    limit : 1,
    offset: 0
  })
  .then(function(data) {
    // Output items
    console.log(data.body.items);
  }, function(err) {
    console.log('Something went wrong!', err);
  });


  spotifyApi.getMySavedTracks({
    limit : 2,
    offset: 1
  })
  .then(function(data) {
    console.log('Done!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });

  spotifyApi.getAudioAnalysisForTrack('3Qm86XLflmIXVm1wcwkgDK')
  .then(function(data) {
    console.log(data.body);
  }, function(err) {
    done(err);
  });

