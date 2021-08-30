const {Pool} = require('pg');
const {dbconfig} = require('../env/config.js')

const options = {
  host: dbconfig.dbhost,
  port: 5432,
  user: dbconfig.dbuser,
  password: dbconfig.dbpassword
}
const pool = new Pool(options);

pool.connect()
  .then(() => {return console.log('Successfully connected to database');})
  .catch((err) => {
    console.error('ERROR CONNECTING TO DATABASE: ', err.stack);
  })

module.exports = pool;