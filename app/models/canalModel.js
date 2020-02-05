'user strict';
let sql = require('../db');
let msg = require('../util');
const logger = require('../winston.js');



let Canal = function(canal) {
    this.libelle = canal.libelle;
    this.etat = canal.etat;
};

Canal.create = function(newCanal, result) { ///validate
    sql.query("INSERT INTO canal set ?", newCanal, function(err, res) {

        if (err) {
            logger.error(err);
            result(err, null);
            next();
        } else {
            logger.info('Canal successfully added => id=' + res.insertId);
            result(null, msg.DATA_ADDED);
        }
    });
};
Canal.getById = function(canalId, result) { ///validate
    sql.query("Select * from canal where id = ? ", canalId, function(err, res) {
        if (err) {
            logger.error(err);
            result(err, null);
        } else {
            logger.info('get successfully Canal by id = ' + canalId);
            result(null, res);
        }
    });
};
Canal.getAll = function(result) { ///validate
    sql.query("Select * from canal", function(err, res) {

        if (err) {
            logger.error(err);
            result(null, err);
        } else {
            logger.info('get successfully all Canal');
            result(null, res);
        }
    });
};
Canal.update = function(canalId, canal, result) { ///validate
    sql.query("UPDATE canal SET ? WHERE id = ?", [canal, canalId], function(err, res) {
        if (err) {
            logger.error(err);
            result(null, err);
        } else {
            logger.info('Canal successfully modified => id:' + canalId);
            result(null, msg.DATA_UPDATED);

        }
    });
};
Canal.delete = function(canalId, result) { ///validate
    sql.query("DELETE FROM canal WHERE id = ?", [canalId], function(err, res) {

        if (err) {
            logger.error(err);
            result(null, err);
        } else {
            logger.info('Canal successfully deleted => id:' + canalId);
            result(null, msg.DATA_DELETED);
        }
    });
};

module.exports = Canal;