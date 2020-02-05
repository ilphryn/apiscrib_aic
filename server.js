// require('rootpath')();
//
const errorHandler = require('./app/error.handler');
const logger = require('./app/winston.js');
const bodyParser = require('body-parser');
const jwt = require('./app/auth/jwt');
const express = require('express');
const helmet = require('helmet')
const cors = require('cors');
const app = express();
//
const port = (process.env.NODE_ENV === 'production') ? '3000' : '3000';
const hostname = (process.env.NODE_ENV === 'production') ? '10.242.30.39' : 'localhost';
//
let routes = require('./app/app.routes.js');
let database = require('./app/db')
//
//
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(errorHandler);
app.use(helmet())
app.use(cors());
app.use(jwt());

routes(app); //register the route

//  database.then((res) => { logger.info('Database successfully connected') })
//          .catch((err) => { logger.error(`Can't reach database`)})

        
//  db connect and server start
   database.connect((err) => {
       if (err) {
          logger.error(`Can't reach database : `+ err)
           throw err
       } else {
          logger.info('Database successfully connected')
       }
   });


app.listen(port, hostname, () => {
    logger.info(`Node Server running on ${process.env.NODE_ENV || 'Dev'}_Mode at http://${hostname}:${port}/`);
});



