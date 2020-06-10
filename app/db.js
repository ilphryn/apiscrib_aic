'user strict';

let connector = require('mysql');

// db connection configuration

const db = connector.createConnection({
    host: (process.env.NODE_ENV === 'production') ? '10.242.30.39' : 'localhost',
    user: (process.env.NODE_ENV === 'production') ? 'scribeapp' : 'root',
    password: (process.env.NODE_ENV === 'production') ? 'scribe@PP' : 'root',
    port: '3306',
    database : 'scribeaic'
}); 

module.exports = db;