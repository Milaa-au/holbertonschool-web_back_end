const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
})

app.get('/students', (req, res) => {
  res.type('text/plain');
  countStudents(process.argv[2])
    .then((output) => {
      res.send(`This is the list of our students\n${output}`);
    })
    .catch((err) => {
      res.send(`${err}`);
    });
});

app.listen(1245);
module.exports = app;
