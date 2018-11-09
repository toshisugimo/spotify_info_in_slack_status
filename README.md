# spotify_info_in_slack_status
Display the currently playing track on spotify in slack status.

<img width="219" src="https://user-images.githubusercontent.com/25524755/48245304-79078f80-e42d-11e8-8bd6-128b695153a7.png">

## Usage
1. Create a new Google Apps Script file.

2. Paste the contents of change_slack_status.js into the file created in step 1.
    - slack_token and spotify_token need to be rewritten to yours.
    - spotify_emoji can be changed to arbitrary one.


3. Set the trigger of GogoleAppsScript as follows.
    - function
        - myFunction
    - Event Souce
        - Time-driven
    - Type of time based trigger
        - Minutes timer
    - Minute interval
        - Every minute (select update status frequency as you like)

## How to get your token
See the link below
- slack　➡︎　https://api.slack.com/custom-integrations/legacy-tokens
- spotify　➡︎　https://developer.spotify.com/documentation/web-api/quick-start/
