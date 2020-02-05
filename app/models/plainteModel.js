'user strict';
let sql = require('../db');
let msg = require('../util');
let query = require('../query');
const logger = require('../winston.js');


let Plainte = function(plainte) {
    this.agent = plainte.agent;
    this.idCanal = plainte.idCanal;
    this.commune = plainte.commune;
    this.idDescription = plainte.idDescription;
    this.detailsDescription = plainte.detailsDescription;
    this.dhCloture = plainte.dhCloture;
    this.dhEcheance = plainte.dhEcheance;
    this.dhReception = plainte.dhReception;
    this.dhRetour = plainte.dhRetour;
    this.dhSignalisation = plainte.dhSignalisation;
    this.dhTraitement = plainte.dhTraitement;
    this.dhTransmission = plainte.dhTransmission;
    this.idDomaine = plainte.idDomaine;
    this.etatEcheance = plainte.etatEcheance;
    this.etatPlainte = plainte.etatPlainte;
    this.IDplainte = plainte.idPlainte;
    this.idNature = plainte.idNature;
    this.numCase = plainte.numCase;
    this.numeroClt = plainte.numeroClt;
    this.observation = plainte.observation;
    this.oceane = plainte.oceane;
    this.idOrigine = plainte.idOrigine;
    this.partenaire = plainte.partenaire;
    this.idPorteur = plainte.idPorteur;
    this.priorite = plainte.priorite;
    this.quartier = plainte.quartier;
    this.statut = plainte.statut;
    this.idSubOrigine = plainte.idSubOrigine;
    this.tempsHorsAIC = plainte.tempsHorsAIC;
    this.tempsAttente = plainte.tempsAttente;
    this.tempsResolution = plainte.tempsResolution;
    this.tempsTraitement = plainte.tempsTraitement;

};

Plainte.create = function(newPlainte, result) { ///validate
    sql.query("INSERT INTO plainte set ?", newPlainte, function(err, res) {
        if (err) {
            logger.error(err);
            result(err, null);
        } else {
            logger.info('Plainte successfully added => IDplainte=' + res.insertId);
            result(null, msg.DATA_ADDED);
        }
    });
};
Plainte.getById = function(plainteId, result) { ///validate
    sql.query("Select * from plainte where IDplainte = ? ", plainteId, function(err, res) {
        if (err) {
            logger.error(err);
            result(err, null);
        } else {
            logger.info('get successfully plainte by IDplainte = ' + plainteId);
            result(null, res);
        }
    });
};
Plainte.getAll = function(result) { ///validate
    sql.query(query.allPlainte, function(err, res) {
        if (err) {
            logger.error(err);
            result(null, err);
        } else {
            logger.info('get successfully all plainte');
            result(null, res);
        }
    });
};

Plainte.getOngoing = function(result) { ///validate
    sql.query(query.allPlainteOngoing, function(err, res) {
        if (err) {
            logger.error(err);
            result(null, err);
        } else {
            logger.info('get successfully plainte en cours');
            result(null, res);
        }
    });
};

Plainte.update = function(plainteId, plainte, result) { ///validate
    sql.query("UPDATE plainte SET ? WHERE IDplainte = ?", [plainte, plainteId], function(err, res) {
        if (err) {
            logger.error(err);
            result(null, err);
        } else {
            logger.info('Plainte successfully modified => IDplainte:' + plainteId);
            result(null, msg.DATA_UPDATED);

        }
    });
};


Plainte.delete = function(plainteId, result) { ///validate
    sql.query("DELETE FROM plainte WHERE IDplainte = ?", [plainteId], function(err, res) {

        if (err) {
            logger.error(err);
            result(null, err);
        } else {
            logger.info('Plainte successfully deleted => IDplainte:' + plainteId);
            result(null, msg.DATA_DELETED);
        }
    });
};


Plainte.extraction = function(debut, fin, result) { ///validate
    sql.query("SELECT * FROM plainte WHERE dhReception BETWEEN ? AND ?", [debut, fin], function(err, res) {
        if (err) {
            logger.error(err);
            result(err, null);
        } else {
            logger.info('extraction success.. ');
            result(null, res);
        }
    });
};

Plainte.extract = function(query, result) { ///validate
    sql.query(query, function(err, res) {
        if (err) {
            logger.error(err);
            result(err, null);
        } else {
            logger.info('extraction success.. ');
            result(null, res);
        }
    });
};


module.exports = Plainte;