/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const readfile = require('./3-read_file_async');

const app = express();
const port = 1245;

// Define the path to the file
const filePath = path.join(__dirname, 'database.csv');

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (res, req) => {
  res.send('This is the list of our students', readfile(filePath));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
