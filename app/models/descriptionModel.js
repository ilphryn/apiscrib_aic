'user strict';
let sql = require('../db');
let msg = require('../util');
const logger = require('../winston.js');


let Description = function(description) {
    this.libelle = description.libelle;
    this.etat = description.etat;
    this.idNature = description.subitem;
};

Description.create = function(newDescription, result) { ///validate
    sql.query("INSERT INTO description set ?", newDescription, function(err, res) {

        if (err) {
            logger.error(err);
            result(err, null);
            next();
        } else {
            logger.info('Description successfully added => id=' + res.insertId);
            result(null, msg.DATA_ADDED);
        }
    });
};
Description.getById = function(descriptionId, result) { ///validate
    sql.query("Select * from description where id = ? ", descriptionId, function(err, res) {
        if (err) {
            logger.error(err);
            result(err, null);
        } else {
            logger.info('get successfully Description by id = ' + descriptionId);
            result(null, res);
        }
    });
};
Description.getAll = function(result) { ///validate
    sql.query("Select * from description", function(err, res) {

        if (err) {
            logger.error(err);
            result(null, err);
        } else {
            logger.info('get successfully all Description');
            result(null, res);
        }
    });
};
Description.update = function(descriptionId, description, result) { ///validate
    sql.query("UPDATE description SET ? WHERE id = ?", [description, descriptionId], function(err, res) {
        if (err) {
            logger.error(err);
            result(null, err);
        } else {
            logger.info('Description successfully modified => id:' + descriptionId);
            result(null, msg.DATA_UPDATED);

        }
    });
};
Description.delete = function(descriptionId, result) { ///validate
    sql.query("DELETE FROM description WHERE id = ?", [descriptionId], function(err, res) {

        if (err) {
            logger.error(err);
            result(null, err);
        } else {
            logger.info('Description successfully deleted => id:' + descriptionId);
            result(null, msg.DATA_DELETED);
        }
    });
};

module.exports = Description;