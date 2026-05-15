const fs = require('fs');
const express = require('express');

const app = express();
const port = 1245;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').slice(1).filter((line) => line.trim() !== '');
      const fields = {};

      for (const line of lines) {
        const parts = line.split(',');
        const firstname = parts[0];
        const field = parts[parts.length - 1];

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }

      let text = `Number of students: ${lines.length}`;
      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          text += `\nNumber of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
        }
      }

      resolve(text);
    });
  });
}

app.get('/', (req, res) => {
  res.type('text');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.type('text');

  countStudents(process.argv[2])
    .then((text) => {
      res.send(`This is the list of our students\n${text}`);
    })
    .catch((err) => {
      res.send(`This is the list of our students\n${err.message}`);
    });
});

app.listen(port);

module.exports = app;