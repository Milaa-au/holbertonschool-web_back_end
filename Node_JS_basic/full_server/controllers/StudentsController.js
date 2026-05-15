import readDatabase from '../utils';
 
export default class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2])
      .then((data) => {
        res.status(200).type('text');
        const fields = Object.keys(data).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
        let responseText = 'This is the list of our students';
        for (const f of fields) {
          responseText += `\nNumber of students in ${f}: ${data[f].length}. List: ${data[f].join(', ')}`;
        }
        res.send(responseText);
      })
      .catch(() => res.status(500).type('text').send('Cannot load the database'));
  }
 
  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
 
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).type('text').send('Major parameter must be CS or SWE');
      return;
    }
 
    readDatabase(process.argv[2])
      .then((data) => {
        const students = data[major] || [];
        res.status(200).type('text').send(`List: ${students.join(', ')}`);
      })
      .catch(() => res.status(500).type('text').send('Cannot load the database'));
  }
}
 