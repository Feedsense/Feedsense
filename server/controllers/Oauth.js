const Oauth = require('../../database/models/Oauth.js');

module.exports = {
  newUser: (req, res) => {
    var given_name = req.params.gname;
    var family_name = req.params.fname;
    var oauth_id = req.params.id;

    Oauth.isUser( given_name, family_name, (err, result) => {
      if (err) {
        return console.error('ERROR RETRIEVING DATA: ', err.stack);
      }

      if(result.exit === true) {
        res.send('User checks out')
      } else {
        Oauth.addUser(given_name, family_name, oauth_id, (err, result) => {
          if (err) {
            return console.error('ERROR RETRIEVING DATA: ', err.stack);
          }

          res.status(201).send('User Saved');
        });
      }
    });
  },

  updateTwitter: (req, res) => {
    var oauth_id = req.params.id;
    var twitter_id = req.params.tid;

    Oauth.addTID( oauth_id, twitter_id, (err, result) => {
      if (err) {
        return console.error('ERROR RETRIEVING DATA: ', err.stack);
      }
      res.status(204).send('Successfully Updated');
    });
  },

  updateYoutube : (req, res) => {
    var oauth_id = req.params.id;
    var youtube_id = req.params.yid;

    Oauth.addYID( oauth_id, youtube_id, (err, result) => {
      if (err) {
        return console.error('ERROR RETRIEVING DATA: ', err.stack);
      }
      res.status(204).send('Successfully Updated');
    });
  }
}