'user strict';
let sql = require('../db');
let msg = require('../util');
const logger = require('../winston.js');



let Suborigine = function(suborigine) {
    this.libelle = suborigine.libelle;
    this.etat = suborigine.etat;
    this.idOrigine = suborigine.subitem;
};

Suborigine.create = function(newSuborigine, result) { ///validate
    sql.query("INSERT INTO suborigine set ?", newSuborigine, function(err, res) {

        if (err) {
            logger.error(err);
            result(err, null);
            next();
        } else {
            logger.info('Suborigine successfully added => id=' + res.insertId);
            result(null, msg.DATA_ADDED);
        }
    });
};
Suborigine.getById = function(suborigineId, result) { ///validate
    sql.query("Select * from suborigine where id = ? ", suborigineId, function(err, res) {
        if (err) {
            logger.error(err);
            result(err, null);
        } else {
            logger.info('get successfully Suborigine by id = ' + suborigineId);
            result(null, res);
        }
    });
};
Suborigine.getAll = function(result) { ///validate
    sql.query("Select * from suborigine", function(err, res) {

        if (err) {
            logger.error(err);
            result(null, err);
        } else {
            logger.info('get successfully all Suborigine');
            result(null, res);
        }
    });
};
Suborigine.update = function(suborigineId, suborigine, result) { ///validate
    sql.query("UPDATE suborigine SET ? WHERE id = ?", [suborigine, suborigineId], function(err, res) {
        if (err) {
            logger.error(err);
            result(null, err);
        } else {
            logger.info('Suborigine successfully modified => id:' + suborigineId);
            result(null, msg.DATA_UPDATED);

        }
    });
};
Suborigine.delete = function(suborigineId, result) { ///validate
    sql.query("DELETE FROM suborigine WHERE id = ?", [suborigineId], function(err, res) {

        if (err) {
            logger.error(err);
            result(null, err);
        } else {
            logger.info('Suborigine successfully deleted => id:' + suborigineId);
            result(null, msg.DATA_DELETED);
        }
    });
};

module.exports = Suborigine;