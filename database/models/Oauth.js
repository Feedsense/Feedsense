const pool = require('../connection');

module.exports = {
  isUser: (given_name, family_name, callback) => {
    pool.connect()
      .then(client => {
        return client.query(`SELECT EXISTS (SELECT 1 FROM users WHERE given_name = '${given_name}' AND family_name = '${family_name}');`)
          .then(res => {
            client.release();
            console.log(res.rows[0])
            return callback(null, res.rows[0]);
          })
          .catch(err => {
            client.release();
            return callback(err);
          })
      })
  },

  addUser: (given_name, family_name, callback) => {
    pool.connect()
      .then(client => {
        return client.query(`INSERT INTO users(given_name, family_name) VALUES('${given_name}','${family_name}');`)
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

  addTID: (oauth_id, twitter_id, callback) => {
    pool.connect()
      .then(client => {
        return client.query(`UPDATE users SET twitter_key = '${twitter_id}' WHERE oauth_id = '${oauth_id}';`)
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

  addYID: (oauth_id, youtube_id, callback) => {
    pool.connect()
      .then(client => {
        return client.query(`UPDATE users SET youtube_key = '${youtube_id}' WHERE oauth_id = '${oauth_id}';`)
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