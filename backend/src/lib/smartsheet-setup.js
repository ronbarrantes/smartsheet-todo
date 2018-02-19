'use strict';
const client = require('smartsheet');
const level = process.env.NODE_ENV === 'production' ? null : 'info';
const smartsheet = client.createClient({ accessToken: process.env.SMARTSHEET_ACCESS_TOKEN, logLevel: level });

let sheetId;
let sheet = {};

let sheetAppName = process.env.SHEET_APP_NAME;

let initialSetup = {
  body: {
    name: sheetAppName,
    columns: [
      {
        title: 'Primary Column',
        primary: true,
        type: 'TEXT_NUMBER',
      },
      {
        title: 'ToDo',
        type: 'TEXT_NUMBER',
      },
      {
        title: 'Status',
        type: 'CHECKBOX',
      },
      {
        title: 'Due Date',
        type: 'DATE',
      },
      {
        title: 'Category',
        type: 'PICKLIST',
        options: ['Work', 'Home', 'Honey-Do', 'Bucket', 'Misc'],
      },
    ],
  },
};

// checks whether the sheet already exists
smartsheet.sheets.getSheet()
  .then(res => {
    let sheet = res.data.filter(sheet => sheet.name === sheetAppName);
    if (sheet.length === 0) {
      return smartsheet.sheets.createSheet(initialSetup)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
    return sheet;
  })
  .then(res => smartsheet.sheets.getSheet({ id: res[0].id }))
  .then(res => {
    console.log(res);
    sheetId = res.id;
    sheet.id = res.id;
    console.log(sheetId);
  })
  .catch(new Error('__SERVER_ERROR__ could not get ID'));

module.exports = (req, res, next) => {
  req.sheetId = sheetId;
  next();
};