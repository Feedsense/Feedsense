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

      res.send(result);
    });
  }
}