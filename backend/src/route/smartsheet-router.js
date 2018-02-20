'use strict';

const { Router } = require('express');

// I might delete this - I dont know if I want to create another client
const client = require('smartsheet');
const level = process.env.NODE_ENV === 'production' ? null : 'info';
const smartsheet = client.createClient({ accessToken: process.env.SMARTSHEET_ACCESS_TOKEN, logLevel: level });

module.exports = new Router()
  .get('/sheets', (req, res, next) => {
    const { sheetId } = req;
    smartsheet.sheets.getSheet({ id: sheetId })
      .then(result => {
        res.json(result);
      })
      .catch(next);
  })

  .get('/rows', (req, res, next) => {
    const { sheetId } = req;
    smartsheet.sheets.getSheet({ id: sheetId })
      .then(result => {
        res.json(result.rows);
      })
      .catch(next);
  })

  .get('/rows/:id', (req, res, next) => {
    const { sheetId } = req;
    smartsheet.sheets.getRow({ sheetId, rowId: req.params.id })
      .then(result => {
        res.json(result);
      })
      .catch(next);
  })

  .post('/rows', (req, res, next) => {
    const { sheetId } = req;

    let row = {
      cells: [
        {
          columnId: 2602986682771332,
          value: 'my stuff',
        },
        {
          columnId: 7106586310141828,
          value: false,
        },
        {
          columnId: 1477086775928708,
          value: '2018-2-26',
        },
      ],
    };

    smartsheet.sheets.addRows({ sheetId, body: row })
      .then(result => {
        res.json(result);
      })
      .catch(next);
  })

  .delete('/rows/:id', (req, res, next) => {
    const { sheetId } = req;
    smartsheet.sheets.deleteRow({ sheetId, rowId: req.params.id })
      .then(result => {
        res.json(result);
      })
      .catch(next);
  });
