'use strict';

let Suborigine = require('../models/suborigineModel');

exports.getAll = function(req, res) {
    Suborigine.getAll(function(err, suborigine) {
        if (err)
            res.send(err);
        res.send(suborigine);
    });
};


exports.create = function(req, res) {
    let new_suborigine = new Suborigine(req.body);
    Suborigine.create(new_suborigine, function(err, suborigine) {
        if (err)
            res.status(500).send('Something wrong!');
        res.json(suborigine);
    });
};


exports.getById = function(req, res) {
    Suborigine.getById(req.params.suborigineId, function(err, suborigine) {
        if (err)
            res.send(err);
        res.json(suborigine);
    });
};


exports.update = function(req, res) {
    Suborigine.update(req.params.suborigineId, new Suborigine(req.body), function(err, suborigine) {
        if (err)
            res.send(err);
        res.json(suborigine);
    });
};


exports.delete = function(req, res) {
    Suborigine.delete(req.params.suborigineId, function(err, suborigine) {
        if (err)
            res.send(err);
        res.json({ message: "Suborigine successfully deleted" });
    });
};