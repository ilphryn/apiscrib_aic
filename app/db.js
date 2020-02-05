'user strict';

let connector = require('mysql');

// db connection configuration

const db = connector.createConnection({
    host: (process.env.NODE_ENV === 'production') ? '10.242.30.39' : '10.242.30.39',
    user: (process.env.NODE_ENV === 'production') ? 'scribeapp' : 'scribeapp',
    port: '3306',
    password: 'scribe@PP',
    database : 'scribeaic'
}); 

module.exports = db;