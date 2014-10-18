#! /usr/bin/env node

var BITLY_TOKEN = process.argv[3] || process.env.BITLY_TOKEN || '';
var url = process.argv[2] || '';

if (url == null || BITLY_TOKEN == null) {
  console.error("usage: fbme <url> [<bitly api token>]")
  process.exit(1);
}

if (url.indexOf('facebook.com') === -1) {
  console.error("URL must contain Facebook.com.")
  process.exit(1);
}

var params = {
  access_token: BITLY_TOKEN,
  longUrl: url
}

require('request').get({
  url: 'https://api-ssl.bitly.com/v3/shorten',
  qs: params,
  useQuerystring: 'true'
}, function(err, response, body) {
  var body = JSON.parse(body);

  if (!err && body.status_code == 200) {
    console.log(body.data.url);
  }
  else {
    console.error("Error accessing bit.ly api:", body.status_txt);
  }

  process.exit(0);
});
