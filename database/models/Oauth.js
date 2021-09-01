const pool = require('../connection');

module.exports = {
  isUser: (given_name, family_name, callback) => {
    pool.connect()
      .then(client => {
        return client.query(`SELECT EXISTS (SELECT 1 FROM users WHERE given_name = '${given_name}' AND family_name = '${family_name}'`)
          .then(res => {
            client.release();
            return callback(null, res.rows);
          })
          .catch(err => {
            client.release();
            return callback(err);
          })
      })
  },

  addUser: (given_name, family_name, oauth_id, callback) => {
    pool.connect()
      .then(client => {
        return client.query(`INSERT INTO users(given_name, family_name, oauth_id) VALUES('${given_name}','${family_name}','${oauth_id}');`)
          .then(res => {
            client.release();
            return callback(null, true);
          })
          .catch(err => {
            client.release();
            return callback(err);
          })
      })
  },
}