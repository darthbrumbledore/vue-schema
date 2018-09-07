// #### Setting up all my required libraries ####
const express = require('express');
const _ = require('lodash');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const mysql = require('mysql');

// #### Setting up the port to work localhost and when deployed ####

const port = process.env.PORT || 3000;

// #### Setting up all custom libraries and files ####
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'jamfsoftware',
  password: 'jamfsw03',
  database: 'jamfsoftware'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
})
// #### Create express instance ####
var app = express();

// #### Setup middleware ####
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());


// #### Setup routes ####
app.get('/tables', (req, res) => {
  console.log('got the tables end point')
  connection.query('SHOW tables', (err, rows) => {
    // rows.forEach((row) => {
    //   console.log(`${row.Tables_in_jamfsoftware}`)
    // })
    res.send(rows);
  })
});

app.get('/tables/:name', (req, res) => {
  columnName = req.params.name;
  connection.query(`select table_name, column_name from information_schema.columns where table_schema='jamfsoftware' and column_name LIKE '%${columnName}%'`, (err, rows) => {
    // console.log(rows);
    res.send(rows);
  })
})

app.get('/describe-table/:name', (req, res) => {
  tableName = req.params.name
  connection.query(`describe ${tableName}`, (err, rows) => {
    res.send(rows)
  })

})

// app.post();
//
// app.patch();
//
// app.delete();



// #### Set up listener ####
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
