function myFunction() {
  var slack_email   = '*****';     // Your slack email
  var slack_token   = '*****';     // Your slack token
  var spotify_token = '*****';     // Your spotify token
  var spotify_emoji = ':spotify:'; // Any emoji you want to display on slack


  var now_playing = get_now_playing();
  var emoji       = now_playing ? spotify_emoji : '';

  change_slack_status(now_playing, emoji);

  function get_now_playing () {
    var url = 'https://api.spotify.com/v1/me/player/currently-playing';
    var options = {
      'method' : 'get',
      'headers': {
        'Accept':        'application/json',
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + spotify_token,
      },
      muteHttpExceptions: true
    };

    var track_obj = JSON.parse(UrlFetchApp.fetch(url, options));

    if (track_obj.error || !track_obj.is_playing) {
      return '';
    } else {
      var artist_name = track_obj.item.album.artists[0].name;
      var track_name  = track_obj.item.name;
      var now_playing = track_name + ' - ' + artist_name;

      return now_playing;
    }
  }

  function change_slack_status (now_playing, emoji) {
    var url = 'https://slack.com/api/users.profile.set';

    var profile = {
      'status_text':  now_playing,
      'status_emoji': emoji
    }

    UrlFetchApp.fetch(url, {
      method:  'post',
      payload: {
        token:   slack_token,
        profile: JSON.stringify(profile)
      }
    })
  }
}
