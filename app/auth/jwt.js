const expressJwt = require('express-jwt');
const config = require('../auth/config.json');

module.exports = jwt;

function jwt() {
    const { secret } = config;
    return expressJwt({ secret }).unless({
        path: [
            // route public d'authentication
            '/authenticate'
        ]
    });
}