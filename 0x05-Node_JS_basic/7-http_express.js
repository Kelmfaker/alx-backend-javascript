/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 1245;

// Define the path to the file
const filePath = path.join(__dirname, 'database.csv');

function countStudents(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.trim().split('\n');
    const students = lines.slice(1).filter((line) => line.trim() !== '');

    let output = `Number of students: ${students.length}\n`;

    const fields = {};
    students.forEach((student) => {
      const [firstname, , , field] = student.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    Object.keys(fields).forEach((field) => { // Use Object.keys instead of for..in
      if (Object.hasOwnProperty.call(fields, field)) { // Use Object.hasOwnProperty.call
        output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      }
    });

    return output.trim();
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  try {
    const data = countStudents(filePath);
    res.send(`This is the list of our students\n${data}`);
  } catch (error) {
    res.status(500).send('Cannot load the database');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
