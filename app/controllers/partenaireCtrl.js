'use strict';

let Partenaire = require('../models/partenaireModel.js');

exports.getAll = function(req, res) {
    Partenaire.getAll(function(err, partenaire) {
        if (err)
            res.send(err);
        res.send(partenaire);
    });
};


exports.create = function(req, res) {
    let new_partenaire = new Partenaire(req.body);
    Partenaire.create(new_partenaire, function(err, partenaire) {
        if (err)
            res.status(500).send('Something wrong!');
        res.json(partenaire);
    });
};


exports.getById = function(req, res) {
    Partenaire.getById(req.params.partenaireId, function(err, partenaire) {
        if (err)
            res.send(err);
        res.json(partenaire);
    });
};


exports.update = function(req, res) {
    Partenaire.update(req.params.partenaireId, new Partenaire(req.body), function(err, partenaire) {
        if (err)
            res.send(err);
        res.json(partenaire);
    });
};


exports.delete = function(req, res) {
    Partenaire.delete(req.params.partenaireId, function(err, partenaire) {
        if (err)
            res.send(err);
        res.json({ message: "Partenaire successfully deleted" });
    });
};