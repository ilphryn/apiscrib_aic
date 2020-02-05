'user strict';
let sql = require('../db');
let msg = require('../util');
const logger = require('../winston.js');

let Domaine = function(domaine) {
    this.libelle = domaine.libelle;
    this.etat = domaine.etat;
};

Domaine.create = function(newDomaine, result) { ///validate
    sql.query("INSERT INTO domaine set ?", newDomaine, function(err, res) {

        if (err) {
            logger.error(err);
            result(err, null);
            next();
        } else {
            logger.info('Domaine successfully added => id=' + res.insertId);
            result(null, msg.DATA_ADDED);
        }
    });
};
Domaine.getById = function(domaineId, result) { ///validate
    sql.query("Select * from domaine where id = ? ", domaineId, function(err, res) {
        if (err) {
            logger.error(err);
            result(err, null);
        } else {
            logger.info('get successfully Domaine by id = ' + domaineId);
            result(null, res);
        }
    });
};
Domaine.getAll = function(result) { ///validate
    sql.query("Select * from domaine", function(err, res) {

        if (err) {
            logger.error(err);
            result(null, err);
        } else {
            logger.info('get successfully all Domaine');
            result(null, res);
        }
    });
};
Domaine.update = function(domaineId, domaine, result) { ///validate
    sql.query("UPDATE domaine SET ? WHERE id = ?", [domaine, domaineId], function(err, res) {
        if (err) {
            logger.error(err);
            result(null, err);
        } else {
            logger.info('Domaine successfully modified => id:' + domaineId);
            result(null, msg.DATA_UPDATED);

        }
    });
};
Domaine.delete = function(domaineId, result) { ///validate
    sql.query("DELETE FROM domaine WHERE id = ?", [domaineId], function(err, res) {

        if (err) {
            logger.error(err);
            result(null, err);
        } else {
            logger.info('Domaine successfully deleted => id:' + domaineId);
            result(null, msg.DATA_DELETED);
        }
    });
};

module.exports = Domaine;