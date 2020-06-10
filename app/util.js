let moment = require('moment');
 
 // Define Error Codes
 let statusCode = {
     OK: 200,
     NOTFOUND: 404,
     FORBIDDEN: 403,
     UNAUTHORIZED: 401,
     INTERNALERROR: 500
 };

 // Define Error Messages
 let statusMessage = {
     DB_SRV_ERROR: 'Base de donnée indisponible',
     SERVER_BUSY: 'Serveur occupé.. Merci de reessayer plus tard',
     DATA_UPDATED: 'Enregistrement modifié avec succès',
     DATA_DELETED: 'Enregistrement supprimé avec succès',
     DATA_ADDED: 'Enregistrement effectué'
 };

function dateToDDMMYYHHmm(value) {
    const date = moment(value).format('DD/MM/YYYY HH:mm');
    return date;
}

 module.exports = {
    statusCode : statusCode, 
    statusMessage : statusMessage,
    dateToDDMMYYHHmm : dateToDDMMYYHHmm
 }