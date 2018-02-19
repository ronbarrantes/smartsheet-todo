'use strict';

const { Router } = require('express');
const smartsheetToken = require('../lib/smartsheet-token.js');

const smartsheetRouter = module.exports = new Router();

smartsheetRouter.get('/hello', smartsheetToken, (req, res, next) => {
  const { id, smartsheet } = req;

  smartsheet.sheets.getSheet({ id })
    .then(result => {
      console.log(result);
      res.json(result);
    });


  // res.json({ res: typeof 'hello' });
  // .catch(next);

});