const fs = require('fs');

function countStudents(path) {
  let data;

  try {
    data = fs.readFileSync(path, 'utf-8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n').filter((line) => line.trim() !== '');
  const students = lines.slice(1);

  console.log(`Number of students: ${students.length}`);

  const fields = {};

  students.forEach((student) => {
    const [firstName, , , field] = student.split(',');

    if (!fields[field]) {
      fields[field] = [];
    }

    fields[field].push(firstName);
  });

  Object.keys(fields).forEach((field) => {
    const names = fields[field];
    console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
  });
}

module.exports = countStudents;