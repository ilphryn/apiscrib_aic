'use strict';

let Plainte = require('../models/plainteModel');
const logger = require('../winston.js');


exports.getAll = function (req, res) {
    Plainte.getAll(function (err, plainte) {
        if (err)
            res.send(err);
        res.send(plainte);
    });
};


exports.getOngoing = function (req, res) {
    Plainte.getOngoing(function (err, plainte) {
        if (err)
            res.send(err);
        res.send(plainte);
    });
};


exports.create = function (req, res) {
    let new_plainte = new Plainte(req.body);
    Plainte.create(new_plainte, function (err, plainte) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.json(plainte);
        }
    });
};


exports.getById = function (req, res) {
    Plainte.getById(req.params.plainteId, function (err, plainte) {
        if (err)
            res.send(err);
        res.json(plainte);
    });
};


exports.update = function (req, res) {
    Plainte.update(req.params.plainteId, new Plainte(req.body), function (err, plainte) {
        if (err)
            res.send(err);
        res.json(plainte);
    });
};


exports.delete = function (req, res) {
    Plainte.delete(req.params.plainteId, function (err, plainte) {
        if (err)
            res.send(err);
        res.json({ message: "Plainte successfully deleted" });
    });
};


exports.extraction = function (req, res) {
    Plainte.extraction(req.body.debut, req.body.fin, function (err, plainte) {
        if (err)
            res.send(err);
        res.json(plainte);
    });
};

exports.extract = function (req, res) {
    Plainte.extract(req.body.query, function (err, plainte) {
        if (err)
            res.send(err);
        res.json(plainte);
    });
    logger.info(req.body.query)

};