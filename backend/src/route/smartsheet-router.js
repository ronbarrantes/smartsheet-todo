'use strict';

const { Router } = require('express');
const smartsheetToken = require('../lib/smartsheet-token.js');

const smartsheetRouter = module.exports = new Router();

smartsheetRouter.get('/hello', (req, res) => {
  res.json({ hello: 'world' });
});