import fs from 'fs';
 
export default function readDatabase(path) {
  return new Promise((resolve, reject) => {
    if (!path) {
      reject(new Error('Cannot load the database'));
      return;
    }
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n').slice(1).filter((line) => line.trim() !== '');
      const studentsByField = {};
 
      for (const line of lines) {
        const parts = line.split(',');
        const firstname = parts[0];
        const field = parts[parts.length - 1];
        if (!studentsByField[field]) studentsByField[field] = [];
        studentsByField[field].push(firstname);
      }
      resolve(studentsByField);
    });
  });
}
