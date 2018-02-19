'use strict';

const { Router } = require('express');
const smartsheetToken = require('../lib/smartsheet-id.js');

// I might delete this - I dont know if I want to create another client
const client = require('smartsheet');
const level = process.env.NODE_ENV === 'production' ? null : 'info';
const smartsheet = client.createClient({ accessToken: process.env.SMARTSHEET_ACCESS_TOKEN, logLevel: level });

const smartsheetID = module.exports = new Router();
smartsheetID.get('/hello', smartsheetToken, (req, res, next) => {
  const { id } = req;

  smartsheet.sheets.getSheet({ id })
    .then(result => {
      res.json(result.columns);
    })
    .catch(next);
});