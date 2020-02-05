'use strict';

let Domaine = require('../models/domaineModel.js');

exports.getAll = function(req, res) {
    Domaine.getAll(function(err, domaine) {
        if (err)
            res.send(err);
        res.send(domaine);
    });
};


exports.create = function(req, res) {
    let new_domaine = new Domaine(req.body);
    Domaine.create(new_domaine, function(err, domaine) {
        if (err)
            res.status(500).send('Something wrong!');
        res.json(domaine);
    });
};


exports.getById = function(req, res) {
    Domaine.getById(req.params.domaineId, function(err, domaine) {
        if (err)
            res.send(err);
        res.json(domaine);
    });
};


exports.update = function(req, res) {
    Domaine.update(req.params.domaineId, new Domaine(req.body), function(err, domaine) {
        if (err)
            res.send(err);
        res.json(domaine);
    });
};


exports.delete = function(req, res) {
    Domaine.delete(req.params.domaineId, function(err, domaine) {
        if (err)
            res.send(err);
        res.json({ message: "Domaine successfully deleted" });
    });
};