'use strict';

const sql = require('../db');
const jwt = require('jsonwebtoken');
const config = require('../auth/config.json');
const ldapjs = require('ldapjs')
const logger = require('../winston.js');
const db = require('../db');
 
/*

//PARAMETRES LDAP
const host = '192.168.224.76';
const dn = 'DC=ocitnetad,DC=ci';
const domaine = 'ocitnetad.ci'
const client = ldapjs.createClient({ url: `ldap://${host}:389`,reconnect: true });


// 0 : unauthorized
// 1 : authorized
// 2 : inactive

//AUTHENTIFICATION BY AD


function authenticate({login, password}) {

    const userPrincipalName = `${login}@${domaine}`;
    let userCheck = new Promise((result) => {
        //
        let authAD = new Promise((resolve, reject) => {
            client.bind(userPrincipalName, password, err => {
                if (!err) {
                    const searchOptions = { scope: 'sub', filter: `(userPrincipalName=${userPrincipalName})` };
                    client.search(dn, searchOptions, (err, res) => {
                        res.on('searchEntry', entry => {
                            resolve(entry.object.name);
                            client.unbind();
                        })
                    });
                } else {
                    reject()
                    client.unbind();
                }
            }); 
        })
        //
        //
        authAD
            .then((identity) => {

                sql.query("SELECT * FROM users", function (err, res) {
                    if (err) {
                        logger.error(err);
                        return
                    } else {
                        const USERS = JSON.parse(JSON.stringify(res));
                        const user = USERS.find(u => u.login === login);
                        if (user) {
                            if (user.etat === 1) {
                                const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '4h' });
                                const userInfo = { name:user.name,login:user.login, groupware:user.groupware,token }
                                result({ authCode : 1, userInfo })
                                logger.info(`user [${login}] successfully logon`)
                            } else {
                                logger.warn(`user [${login}] is not activated`)
                                result({ authCode : 2, userInfo : null })
                            }
                        } else {
                            sql.query(`INSERT INTO users(name, login, etat) VALUES ('${identity}','${login}',0);`, function (err, res) {
                                if (!err) {
                                    logger.info(`new user [${login}] successfully created but not activated`)
                                    result({ authCode : 2, userInfo : null })

                                } else {
                                    logger.warn(`cannot create new user [${login}]`)
                                    logger.error(err)
                                }
                            })
                        }
                        // result(userInfo);
                    }
                })

            })
             .catch((err) => {
                 logger.warn(`user [${login}] connection failed`)
                 result( { authCode : 0, userInfo : null })
             })
    });
    return userCheck
}

*/

// For test **********************
function authenticate({login, password}) {
    return new Promise((resolve, reject) => {

        const token = jwt.sign({ sub: 'emmanuel.koffi' }, config.secret, { expiresIn: '4h' });
        const userInfo = { name:'Emmanuel KOFFI',login:'emmanuel.koffi', groupware:'admin',token }
        var userCheck = { authCode : 1, userInfo }
        resolve(userCheck)
    })
};
// For test **********************



module.exports = { authenticate };