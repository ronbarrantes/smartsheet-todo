'use strict';

const client = require('smartsheet');
const level = process.env.NODE_ENV === 'production' ? null : 'info';
const smartsheet = client.createClient({ accessToken: process.env.SMARTSHEET_ACCESS_TOKEN, logLevel: level });

let sheetId;

module.exports = (req, res, next) => {
  if (sheetId) {
    req.id = sheetId;
    next();
  }

  if (!sheetId) {
    smartsheet.sheets.getSheet()
      .then(res => {
        return res.data.filter(sheet => sheet.name === 'ToDo App');
      })
      .then(res => {
        sheetId = res[0].id;
        req.id = sheetId;
        next();
      })
      .catch(next);
  }
};


