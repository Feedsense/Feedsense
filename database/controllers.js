const {Pool} = require('pg');
const connectCreds = require('../env/config.js')

const options = {
  host: connectCreds.dbhost,
  port: 5432,
  user: connectCreds.dbuser,
  password: connectCreds.dbpassword
}
const pool = new Pool(options);

pool.connect()
  .then(() => {return console.log('Successfully connected to database');})
  .catch((err) => {
    console.error('ERROR CONNECTING TO DATABASE: ', err.stack);
  })

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

