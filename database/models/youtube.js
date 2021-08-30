const pool = require('../connection');

module.exports = {
  getData: (callback) => {
    pool.connect()
      .then(client => {
        return client.query('SELECT * FROM users')
          .then(res => {
            client.release();
            return callback(null, res.rows);
          })
          .catch(err => {
            client.release();
            return callback(err);
          })
      })
  }
}