'user strict';
let sql = require('../db');
let msg = require('../util');
const logger = require('../winston.js');

let Nature = function(nature) {
    this.libelle = nature.libelle;
    this.etat = nature.etat;
    this.idDomaine = nature.subitem;
};

Nature.create = function(newNature, result) { ///validate
    sql.query("INSERT INTO nature set ?", newNature, function(err, res) {

        if (err) {
            logger.error(err);
            result(err, null);
            next();
        } else {
            logger.info('Nature successfully added => id=' + res.insertId);
            result(null, msg.DATA_ADDED);
        }
    });
};
Nature.getById = function(natureId, result) { ///validate
    sql.query("Select * from nature where id = ? ", natureId, function(err, res) {
        if (err) {
            logger.error(err);
            result(err, null);
        } else {
            logger.info('get successfully Nature by id = ' + natureId);
            result(null, res);
        }
    });
};
Nature.getAll = function(result) { ///validate
    sql.query("Select * from nature", function(err, res) {

        if (err) {
            logger.error(err);
            result(null, err);
        } else {
            logger.info('get successfully all Nature');
            result(null, res);
        }
    });
};
Nature.update = function(natureId, nature, result) { ///validate
    sql.query("UPDATE nature SET ? WHERE id = ?", [nature, natureId], function(err, res) {
        if (err) {
            logger.error(err);
            result(null, err);
        } else {
            logger.info('Nature successfully modified => id:' + natureId);
            result(null, msg.DATA_UPDATED);

        }
    });
};
Nature.delete = function(natureId, result) { ///validate
    sql.query("DELETE FROM nature WHERE id = ?", [natureId], function(err, res) {

        if (err) {
            logger.error(err);
            result(null, err);
        } else {
            logger.info('Nature successfully deleted => id:' + natureId);
            result(null, msg.DATA_DELETED);
        }
    });
};

module.exports = Nature;