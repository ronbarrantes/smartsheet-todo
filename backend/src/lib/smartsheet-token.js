'use strict';
require('dotenv').config();

const client = require('smartsheet');
const httpErrors = require('http-errors');
const level = process.env.NODE_ENV === 'production' ? null : 'info';
const smartsheet = client.createClient({ accessToken: process.env.SMARTSHEET_ACCESS_TOKEN, logLevel: level });

module.exports = (req, res, next) => {
  smartsheet.sheets.getSheet({ name: 'ToDo App' })
    .then(res => {
      req.id = res.data[0].id;
      req.smartsheet = smartsheet;
      next();
    })
    .catch(next);
};


