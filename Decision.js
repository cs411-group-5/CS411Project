var SpotifyWebApi = require("spotify-web-api-node");

var access_token = "";
var spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CID,
  clientSecret: process.env.SPOTIFY_SEC,
  redirectUri: "http://localhost:8889/spotify/callback"
});

var artistCarry = [];
var Genre_carry = [];
var night_club = ["dance pop", "pop rap", "latin pop", "pop rock", "pop punk", "indie pop", "viral pop", "indie poptimism", "viral pop", "k-pop", "pop reggaeton", "pop", "pop house", "electro house", "house", "progressive house", "progressive electro house", "deep house", "disco house", "tech house", "pop house", "hard house", "edm", "pop edm", "deep pop edm", "hip hop", "southern hip hop", "underground hip hop", "latin hip hop", "hardcore hip hop", "rap", "underground rap"];
var Bar = ["hip hop", "southern hip hop", "underground hip hop", "latin hip hop", "hardcore hip hop", "rap", "underground rap", "dance pop", "pop rap", "latin pop", "pop rock", "pop punk", "indie pop", "viral pop", "indie poptimism", "viral pop", "k-pop", "pop reggaeton", "pop", "pop house", "jazz", "vocal jazz", "nu jazz", "cool jazz", "jazz funk", "jazz fusion", "jazz blues", "contemporary jazz", "jazz trumpet", "jazz saxophone", "jazz piano", "jazz guitar", "rock", "soft rock", "pop rock", "album rock", "classic rock", "indie rock", "alternative rock", "hard rock", "folk rock", "art rock", "dance rock"];
var cafe = ["funk", "g funk", "funk metal", "jazz funk", "funk rock", "classical", "classical era", "contemporary classical", "classical piano", "electropop", "electro house", "electronic", "electro", "jazz", "jazz piano", "compositional ambient", "ambient", "ambient folk", "space ambient", "j-ambient", "ambient techno", "dark ambient", "deep ambient", "classical", "classical era", "contemporary classical", "classical performance", "classical piano", "early music", "baroque"];
spotifyApi.setAccessToken(access_token);

function main() {
  spotifyApi.getMySavedTracks({
    limit: 10,
    offset: 1
  })
    .then(function (data) {
      var items = data.body.items;
      items.map((v, itemIndex) => {
        // console.log(JSON.stringify(v, null, 2));
        let artists = v.track.album.artists;

        artists.map((v, ix) => {
          //console.log("Artist: ", v.id );
          var last_element = artistCarry[artistCarry.length - 1];
          if (last_element !== v.id) {
            artistCarry.push(v.id);
            //console.log("", v.id);
            //console.log("", artistCarry.length);
          }
          //  console.log("",artistCarry);
        });
        //console.log("Here: ", artistCarry);
        if (itemIndex === items.length-1) {
          artistCarry.map(Element => {
            spotifyApi.getArtist(Element)
              .then(function (data) {
                //console.log('Artist information', data.body.genres);
                data.body.genres.map((v) => {
                  Genre_carry.push(v);
                });
                console.log("Conditionals", Genre_carry);

                Genre_carry.map((v, ix) => {
                  let nc = contains(v, night_club);
                  if (nc) {
                    console.log("Night Club");
                    return ("Night Club");
                  };
                  let bar = contains(v,Bar);
                  if (bar){
                    console.log("Bar");
                    return ("Bar");
                  };
                  let cf = contains(v,cafe);
                  if(cf){
                    console.log("cafe");
                    return ("cafe");
                  }
                });
              }, function (err) {
                console.error(err);
              });
          });
        }
      });
      // console.log(JSON.stringify(data.body.items, null, 2));
    }, function (err) {
      console.log('Something went wrong!', err);
    });

  spotifyApi.getFollowedArtists({ limit: 5 })
    .then(function (data) {
      var items = data.body.artists.items;
      items.map((v, ix) => {
        let artist = v.external_urls;
        //console.log('', v.genres);
        v.genres.map((v) => {
          Genre_carry.push(v);
        });
      });
      // console.log('This user is following ', data.body.artists.items);
    }, function (err) {
      console.log('Something went wrong!', err);
    });
}

function contains(value, bigList){
  if(bigList.indexOf(value) > 0){
    console.log("found value", value);
    return bigList[bigList.indexOf(value)];
  } else {
    return false;
  }
}

main();
