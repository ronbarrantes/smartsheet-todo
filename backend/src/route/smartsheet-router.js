'use strict';

const { Router } = require('express');

// I might delete this - I dont know if I want to create another client
const client = require('smartsheet');
const level = process.env.NODE_ENV === 'production' ? null : 'info';
const smartsheet = client.createClient({ accessToken: process.env.SMARTSHEET_ACCESS_TOKEN, logLevel: level });

const smartsheetRouter = module.exports = new Router();

smartsheetRouter.get('/hello', (req, res) => {

  const { sheetId } = req;

  res.json({ hello: sheetId });

});


smartsheetRouter.get('/get', (req, res) => {
  const { sheetId } = req;

  smartsheet.sheets.getSheet({ id: sheetId })
    .then(result => {
      res.json(result);
    });
});



