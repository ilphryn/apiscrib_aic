'use strict';

let Porteur = require('../models/porteurModel');

exports.getAll = function(req, res) {
    Porteur.getAll(function(err, porteur) {
        if (err)
            res.send(err);
        res.send(porteur);
    });
};


exports.create = function(req, res) {
    let new_porteur = new Porteur(req.body);
    Porteur.create(new_porteur, function(err, porteur) {
        if (err)
            res.status(500).send('Something wrong!');
        res.json(porteur);
    });
};


exports.getById = function(req, res) {
    Porteur.getById(req.params.porteurId, function(err, porteur) {
        if (err)
            res.send(err);
        res.json(porteur);
    });
};


exports.update = function(req, res) {
    Porteur.update(req.params.porteurId, new Porteur(req.body), function(err, porteur) {
        if (err)
            res.send(err);
        res.json(porteur);
    });
};


exports.delete = function(req, res) {
    Porteur.delete(req.params.porteurId, function(err, porteur) {
        if (err)
            res.send(err);
        res.json({ message: "Porteur successfully deleted" });
    });
};