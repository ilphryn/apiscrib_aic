'use strict';

const { createLogger, format, transports, filename } = require('winston');
const pjson = require('../package.json');
require('winston-daily-rotate-file');
const path = require('path');
const fs = require('fs');
const logDir = 'logs';

const filename_gen = path.join(logDir, `${pjson.name}_general.log`);
const transportSelect = [];


const getTransports = function () {

  if (process.env.NODE_ENV !== 'production') {

    return [new transports.Console({
      level: 'debug',
      format: format.combine(
        format.colorize(),
        format.printf(info => `[${info.level}]\t${info.timestamp} ::: ${info.message}`)
      )
    })];
  } else {
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir);
    }
    return [new (transports.DailyRotateFile)({
      dirname: `${logDir}`,
      filename: `${pjson.name}_general_%DATE%.log`,
      datePattern: 'DD-MM-YYYY_HH',
      zippedArchive: true,
      createSymlink: true,
      symlinkName: 'active.log',
      maxSize: '15m',
      maxFiles: '30',
    })]
  }
}

const logger = createLogger({
  level: 'info',
  format: format.combine(
    // format.colorize(),
    format.timestamp({
      format: 'DD-MM-YYYY HH:mm:ss'
    }),
    format.printf(info => `[${info.level}]\t${info.timestamp} ::: ${info.message}`)
  ),
  transports: getTransports(),
});


module.exports = logger;