'user strict';
let sql = require('../db');
let msg = require('../util');
const logger = require('../winston.js');


let Porteur = function(porteur) {
    this.libelle = porteur.libelle;
    this.etat = porteur.etat;
};

Porteur.create = function(newPorteur, result) { ///validate
    sql.query("INSERT INTO porteur set ?", newPorteur, function(err, res) {

        if (err) {
            logger.error(err);
            result(err, null);
            next();
        } else {
            logger.info('Porteur successfully added => id=' + res.insertId);
            result(null, msg.DATA_ADDED);
        }
    });
};
Porteur.getById = function(porteurId, result) { ///validate
    sql.query("Select * from porteur where id = ? ", porteurId, function(err, res) {
        if (err) {
            logger.error(err);
            result(err, null);
        } else {
            logger.info('get successfully Porteur by id = ' + porteurId);
            result(null, res);
        }
    });
};
Porteur.getAll = function(result) { ///validate
    sql.query("Select * from porteur", function(err, res) {

        if (err) {
            logger.error(err);
            result(null, err);
        } else {
            logger.info('get successfully all Porteur');
            result(null, res);
        }
    });
};
Porteur.update = function(porteurId, porteur, result) { ///validate
    sql.query("UPDATE porteur SET ? WHERE id = ?", [porteur, porteurId], function(err, res) {
        if (err) {
            logger.error(err);
            result(null, err);
        } else {
            logger.info('Porteur successfully modified => id:' + porteurId);
            result(null, msg.DATA_UPDATED);

        }
    });
};
Porteur.delete = function(porteurId, result) { ///validate
    sql.query("DELETE FROM porteur WHERE id = ?", [porteurId], function(err, res) {

        if (err) {
            logger.error(err);
            result(null, err);
        } else {
            logger.info('Porteur successfully deleted => id:' + porteurId);
            result(null, msg.DATA_DELETED);
        }
    });
};

module.exports = Porteur;