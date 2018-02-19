'use strict';
require('dotenv').config();

const client = require('smartsheet');

var smartsheet = client.createClient({ accessToken: process.env.SMARTSHEET_ACCESS_TOKEN, logLevel: 'info' });

// smartsheet.users.getCurrentUser()
//   .then(function (userProfile) {
//     console.log(userProfile);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

smartsheet.sheets.getSheet({ id: process.env.SHEET_ID })
  .then(res => {
    console.log(res);
  });


// console.log('hello world');


