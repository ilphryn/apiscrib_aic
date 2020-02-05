'user strict';

module.exports = function(app) {

    let Canal = require('./controllers/canalCtrl.js'),
        Description = require('./controllers/descriptionCtrl.js'),
        Domaine = require('./controllers/domaineCtrl.js'),
        Nature = require('./controllers/natureCtrl.js'),
        Origine = require('./controllers/origineCtrl.js'),
        Plainte = require('./controllers/plainteCtrl.js'),
        Porteur = require('./controllers/porteurCtrl.js'),
        Suborigine = require('./controllers/suborigineCtrl.js'),
        Authentification = require('./auth/auth.controller.js')

    // Canal routes
    app.route('/canal')
        .get(Canal.getAll)
        .post(Canal.create);

    app.route('/canal/:canalId')
        .get(Canal.getById)
        .put(Canal.update)
        .delete(Canal.delete);

    // Description routes
    app.route('/description')
        .get(Description.getAll)
        .post(Description.create);

    app.route('/description/:descriptionId')
        .get(Description.getById)
        .put(Description.update)
        .delete(Description.delete);

    // Domaine routes
    app.route('/domaine')
        .get(Domaine.getAll)
        .post(Domaine.create);

    app.route('/domaine/:domaineId')
        .get(Domaine.getById)
        .put(Domaine.update)
        .delete(Domaine.delete);

    // Nature routes
    app.route('/nature')
        .get(Nature.getAll)
        .post(Nature.create);

    app.route('/nature/:natureId')
        .get(Nature.getById)
        .put(Nature.update)
        .delete(Nature.delete);

    // Origine routes
    app.route('/origine')
        .get(Origine.getAll)
        .post(Origine.create);

    app.route('/origine/:origineId')
        .get(Origine.getById)
        .put(Origine.update)
        .delete(Origine.delete);

    // Plainte routes
    app.route('/plainte')
        .get(Plainte.getAll)
        .post(Plainte.create);


    app.route('/plainte/ongoing')
        .get(Plainte.getOngoing)

    app.route('/extraction')
        .post(Plainte.extraction)

    app.route('/extract')
        .post(Plainte.extract)

    app.route('/plainte/:plainteId')
        .get(Plainte.getById)
        .put(Plainte.update)
        .delete(Plainte.delete);

    // Porteur routes
    app.route('/porteur')
        .get(Porteur.getAll)
        .post(Porteur.create);

    app.route('/porteur/:porteurId')
        .get(Porteur.getById)
        .put(Porteur.update)
        .delete(Porteur.delete);

    // Suborigine routes
    app.route('/suborigine')
        .get(Suborigine.getAll)
        .post(Suborigine.create);

    app.route('/suborigine/:suborigineId')
        .get(Suborigine.getById)
        .put(Suborigine.update)
        .delete(Suborigine.delete);

    // Authentication route
    app.route('/authenticate')
        .post(Authentification.auth);

};