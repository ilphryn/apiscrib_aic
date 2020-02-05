'use strict';

let Canal = require('../models/canalModel.js');

exports.getAll = function(req, res) {
    Canal.getAll(function(err, canal) {
        if (err)
            res.send(err);
        res.send(canal);
    });
};


exports.create = function(req, res) {
    let new_canal = new Canal(req.body);
    Canal.create(new_canal, function(err, canal) {
        if (err)
            res.status(500).send('Something wrong!');
        res.json(canal);
    });
};


exports.getById = function(req, res) {
    Canal.getById(req.params.canalId, function(err, canal) {
        if (err)
            res.send(err);
        res.json(canal);
    });
};


exports.update = function(req, res) {
    Canal.update(req.params.canalId, new Canal(req.body), function(err, canal) {
        if (err)
            res.send(err);
        res.json(canal);
    });
};


exports.delete = function(req, res) {
    Canal.delete(req.params.canalId, function(err, canal) {
        if (err)
            res.send(err);
        res.json({ message: "Canal successfully deleted" });
    });
};