'user strict';
let sql = require('../db');
let msg = require('../util');
const logger = require('../winston.js');



let Partenaire = function(partenaire) {
    this.libelle = partenaire.libelle;
    this.etat = partenaire.etat;
};

Partenaire.create = function(newPartenaire, result) { ///validate
    sql.query("INSERT INTO partenaire set ?", newPartenaire, function(err, res) {

        if (err) {
            logger.error(err);
            result(err, null);
            next();
        } else {
            logger.info('Partenaire successfully added => id=' + res.insertId);
            result(null, msg.DATA_ADDED);
        }
    });
};
Partenaire.getById = function(partenaireId, result) { ///validate
    sql.query("Select * from partenaire where id = ? ", partenaireId, function(err, res) {
        if (err) {
            logger.error(err);
            result(err, null);
        } else {
            logger.info('get successfully Partenaire by id = ' + partenaireId);
            result(null, res);
        }
    });
};
Partenaire.getAll = function(result) { ///validate
    sql.query("Select * from partenaire", function(err, res) {

        if (err) {
            logger.error(err);
            result(null, err);
        } else {
            logger.info('get successfully all Partenaire');
            result(null, res);
        }
    });
};
Partenaire.update = function(partenaireId, partenaire, result) { ///validate
    sql.query("UPDATE partenaire SET ? WHERE id = ?", [partenaire, partenaireId], function(err, res) {
        if (err) {
            logger.error(err);
            result(null, err);
        } else {
            logger.info('Partenaire successfully modified => id:' + partenaireId);
            result(null, msg.DATA_UPDATED);

        }
    });
};
Partenaire.delete = function(partenaireId, result) { ///validate
    sql.query("DELETE FROM partenaire WHERE id = ?", [partenaireId], function(err, res) {

        if (err) {
            logger.error(err);
            result(null, err);
        } else {
            logger.info('Partenaire successfully deleted => id:' + partenaireId);
            result(null, msg.DATA_DELETED);
        }
    });
};

module.exports = Partenaire;