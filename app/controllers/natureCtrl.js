'use strict';

let Nature = require('../models/natureModel');

exports.getAll = function(req, res) {
    Nature.getAll(function(err, nature) {
        if (err)
            res.send(err);
        res.send(nature);
    });
};


exports.create = function(req, res) {
    let new_nature = new Nature(req.body);
    Nature.create(new_nature, function(err, nature) {
        if (err)
            res.status(500).send('Something wrong!');
        res.json(nature);
    });
};


exports.getById = function(req, res) {
    Nature.getById(req.params.natureId, function(err, nature) {
        if (err)
            res.send(err);
        res.json(nature);
    });
};


exports.update = function(req, res) {
    Nature.update(req.params.natureId, new Nature(req.body), function(err, nature) {
        if (err)
            res.send(err);
        res.json(nature);
    });
};


exports.delete = function(req, res) {
    Nature.delete(req.params.natureId, function(err, nature) {
        if (err)
            res.send(err);
        res.json({ message: "Nature successfully deleted" });
    });
};