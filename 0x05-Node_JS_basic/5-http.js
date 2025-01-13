const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Counts the students in a CSV data file.
 * @param {String} dbPath The path to the CSV data file.
 * @return list of our studens the same at 3-read_file
 */
const countStudents = (dbPath) => new Promise((resolve, reject) => {
  if (!dbPath) {
    reject(new Error('Cannot load the database'));
  }
  if (dbPath) {
    fs.readFile(dbPath, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const reportParts = [];
        const fLines = data.toString('utf-8').trim().split('\n');
        const studentGroups = {};
        const dbFields = fLines[0].split(',');
        const studentPropNames = dbFields.slice(
          0,
          dbFields.length - 1,
        );

        for (const line of fLines.slice(1)) {
          const studentRecord = line.split(',');
          const studentPropValues = studentRecord.slice(
            0,
            studentRecord.length - 1,
          );
          const field = studentRecord[studentRecord.length - 1];
          if (!Object.keys(studentGroups).includes(field)) {
            studentGroups[field] = [];
          }
          const studentEntries = studentPropNames.map((propName, idx) => [
            propName,
            studentPropValues[idx],
          ]);
          studentGroups[field].push(Object.fromEntries(studentEntries));
        }

        const totalStudents = Object.values(studentGroups).reduce(
          (pre, cur) => (pre || []).length + cur.length,
        );
        reportParts.push(`Number of students: ${totalStudents}`);
        for (const [field, group] of Object.entries(studentGroups)) {
          reportParts.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', '),
          ].join(' '));
        }
        resolve(reportParts.join('\n'));
      }
    });
  }
});

const SERVER_ROUTE_HANDLERS = [
  {
    route: '/',
    handler(_, res) {
      const responseText = 'Hello Holberton School!';

      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    },
  },
  {
    route: '/students',
    handler(_, res) {
      const responseParts = ['This is the list of our students'];

      countStudents(DB_FILE)
        .then((report) => {
          responseParts.push(report);
          const responseText = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseText));
        })
        .catch((err) => {
          responseParts.push(err instanceof Error ? err.message : err.toString());
          const responseText = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseText));
        });
    },
  },
];

app.on('request', (req, res) => {
  for (const routeHandler of SERVER_ROUTE_HANDLERS) {
    if (routeHandler.route === req.url) {
      routeHandler.handler(req, res);
      break;
    }
  }
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
