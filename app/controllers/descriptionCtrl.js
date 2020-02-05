'use strict';

let Description = require('../models/descriptionModel');

exports.getAll = function(req, res) {
    Description.getAll(function(err, description) {
        if (err)
            res.send(err);
        res.send(description);
    });
};


exports.create = function(req, res) {
    let new_description = new Description(req.body);
    Description.create(new_description, function(err, description) {
        if (err)
            res.status(500).send('Something wrong!');
        res.json(description);
    });
};


exports.getById = function(req, res) {
    Description.getById(req.params.descriptionId, function(err, description) {
        if (err)
            res.send(err);
        res.json(description);
    });
};


exports.update = function(req, res) {
    Description.update(req.params.descriptionId, new Description(req.body), function(err, description) {
        if (err)
            res.send(err);
        res.json(description);
    });
};


exports.delete = function(req, res) {
    Description.delete(req.params.descriptionId, function(err, description) {
        if (err)
            res.send(err);
        res.json({ message: "Description successfully deleted" });
    });
};