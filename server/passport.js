const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const Twit = require('twit');
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});
passport.use(new TwitterStrategy({
  consumerKey: "w34sQy0mtIIXLhsMcsq3WMZt3",
  consumerSecret: "0xoPEz3TsGcOM6xonMfJSLqZMIgz8ZWLGMLaiPaDhY6WoktPWR",
  callbackURL: "http://localhost:3001/auth/twitter/callback",
},
function(accessToken, refreshToken, profile, done) {
  // console.log(accessToken)
  console.log(profile);
  const T = new Twit({
    consumer_key: CONSUMER_KEY,
    consumer_secret: CONSUMER_SECRET,
    access_token: ACCESS_TOKEN,
    access_token_secret: ACCESS_TOKEN_SECRET
  })

  return done(null, profile);
}
));