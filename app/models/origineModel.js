'user strict';
let sql = require('../db');
let msg = require('../util');
const logger = require('../winston.js');


let Origine = function(origine) {
    this.libelle = origine.libelle;
    this.etat = origine.etat;
};

Origine.create = function(newOrigine, result) { ///validate
    sql.query("INSERT INTO origine set ?", newOrigine, function(err, res) {

        if (err) {
            logger.error(err);
            result(err, null);
            next();
        } else {
            logger.info('Origine successfully added => id=' + res.insertId);
            result(null, msg.DATA_ADDED);
        }
    });
};
Origine.getById = function(origineId, result) { ///validate
    sql.query("Select * from origine where id = ? ", origineId, function(err, res) {
        if (err) {
            logger.error(err);
            result(err, null);
        } else {
            logger.info('get successfully Origine by id = ' + origineId);
            result(null, res);
        }
    });
};
Origine.getAll = function(result) { ///validate
    sql.query("Select * from origine", function(err, res) {

        if (err) {
            logger.error(err);
            result(null, err);
        } else {
            logger.info('get successfully all Origine');
            result(null, res);
        }
    });
};
Origine.update = function(origineId, origine, result) { ///validate
    sql.query("UPDATE origine SET ? WHERE id = ?", [origine, origineId], function(err, res) {
        if (err) {
            logger.error(err);
            result(null, err);
        } else {
            logger.info('Origine successfully modified => id:' + origineId);
            result(null, msg.DATA_UPDATED);

        }
    });
};
Origine.delete = function(origineId, result) { ///validate
    sql.query("DELETE FROM origine WHERE id = ?", [origineId], function(err, res) {

        if (err) {
            logger.error(err);
            result(null, err);
        } else {
            logger.info('Origine successfully deleted => id:' + origineId);
            result(null, msg.DATA_DELETED);
        }
    });
};

module.exports = Origine;