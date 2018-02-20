'use strict';

const { Router } = require('express');

// I might delete this - I dont know if I want to create another client
const client = require('smartsheet');
const level = process.env.NODE_ENV === 'production' ? null : 'info';
const smartsheet = client.createClient({ accessToken: process.env.SMARTSHEET_ACCESS_TOKEN, logLevel: level });

const smartsheetRoute = module.exports = new Router();

smartsheetRoute.get('/hello', (req, res, next) => {

  const { sheetId } = req;
  // console.log('ID --> ', sheetId);



  // smartsheet.sheets.getSheet({ id: sheetId })
  //   .then(result => {
  //     res.json(result.columns);
  //   })
  //   .catch(next);

  res.json({ hello: sheetId });

});