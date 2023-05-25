const mySql = require('mysql');
const util = require('util');

const connection = mySql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'guestbook_db'
});

connection.query = util.promisify(connection.query).bind(connection);

connection.connect();

module.exports = connection;