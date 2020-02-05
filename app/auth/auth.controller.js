'use strict';

const authService = require('./auth.service');
const express = require('express');
const router = express.Router();
const logger = require('../winston.js');



// authentificate function
 
exports.auth = function(req, res, next) {
    authService.authenticate(req.body)
         .then(user => user ? res.json(user) : res.status(400).json({ message: 'login ou mot de passe incorrecte' }))
         .catch(err => next(err));
}

