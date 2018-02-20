'use strict';
const client = require('smartsheet');
const faker = require('faker');


const level = process.env.NODE_ENV === 'production' ? null : 'info';
const smartsheet = client.createClient({ accessToken: process.env.SMARTSHEET_ACCESS_TOKEN, logLevel: level });

let sheetId;
let sheet = {}; // closure sheet 

let sheetAppName = process.env.SHEET_APP_NAME + faker.lorem.word(11);

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
    console.log('TOTAL SHEETS --> ', res.data.length);

    let matchingSheets = res.data.filter(sheet => sheet.name === sheetAppName);
    console.log('MATCHING SHEETS for -->', sheetAppName, matchingSheets.length);
    // if the sheet doesnt exist 
    if (matchingSheets.length > 0) {
      console.log('inside if');
      return matchingSheets[0]; // should return only one
    }

    console.log('outside if');
    let newSheet = smartsheet.sheets.createSheet(initialSetup)
      .then(res => {
        console.log('FROM API', res);
        return res.result;
      });

    console.log('FROM OUTSIDE API', newSheet);
    return newSheet;

    // let sheet = res.data.filter(sheet => sheet.name === sheetAppName);
    // if (sheet.length === 0) {
    //   return smartsheet.sheets.createSheet(initialSetup)
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err));
    // }
    // return sheet[0];
  })


  // .then(res => smartsheet.sheets.getSheet({ id: res.id }))
  // .then(res => {
  //   console.log(res);
  //   sheetId = res.id;
  //   sheet.id = res.id;
  //   console.log(sheetId);
  // })

  .then(res => {
    console.log('SECOND RESPONSE', res.id);
    return smartsheet.sheets.getSheet({ id: res.id });
  })
  .then(res => {
    console.log('THIRD RESOPONSE', res);


  })



  .catch(new Error('__SERVER_ERROR__ could not get ID'));

module.exports = (req, res, next) => {
  req.sheetId = sheetId;
  next();
};