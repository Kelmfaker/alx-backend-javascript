const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} dbPath The path to the CSV data file.
 * @return number of students
 */
const countStudents = (dbPath) => {
  if (!fs.existsSync(dbPath)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(dbPath).isFile()) {
    throw new Error('Cannot load the database');
  }
  const fLines = fs
    .readFileSync(dbPath, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');
  const studentGroups = {};
  const dbFields = fLines[0].split(',');
  const studentPropNames = dbFields.slice(0, dbFields.length - 1);

  for (const line of fLines.slice(1)) {
    const studentRecord = line.split(',');
    const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
    const field = studentRecord[studentRecord.length - 1];
    if (!Object.keys(studentGroups).includes(field)) {
      studentGroups[field] = [];
    }
    const studentEntries = studentPropNames
      .map((propName, idx) => [propName, studentPropValues[idx]]);
    studentGroups[field].push(Object.fromEntries(studentEntries));
  }

  const totalStudents = Object
    .values(studentGroups)
    .reduce((pre, cur) => (pre || []).length + cur.length);
  console.log(`Number of students: ${totalStudents}`);
  for (const [field, group] of Object.entries(studentGroups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;
