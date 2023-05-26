const mySql = require('mysql2');
const util = require('util');
require('dotenv').config();

const connection = mySql.createConnection({
    host     : process.env.HOST,
    user     : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE
});

connection.query = util.promisify(connection.query).bind(connection);

connection.connect();

module.exports = connection;