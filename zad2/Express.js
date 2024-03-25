const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;


app.use(bodyParser.urlencoded({ extended: true }));


let students = [];


app.get('/', (req, res) => {
  res.send('<h1>Strona główna</h1>');
});


app.get('/student', (req, res) => {
  res.send('<h1>Strona studenta</h1>');
});


app.get('/add-student', (req, res) => {
  res.send(`
    <h1>Dodaj studenta</h1>
    <form action="/student" method="post">
      <label for="name">Imię:</label>
      <input type="text" id="name" name="name"><br>
      <label for="surname">Nazwisko:</label>
      <input type="text" id="surname" name="surname"><br>
      <label for="major">Kierunek:</label>
      <input type="text" id="major" name="major"><br>
      <button type="submit">Dodaj studenta</button>
    </form>
  `);
});


app.post('/student', (req, res) => {
  const { name, surname, major } = req.body;
  students.push({ name, surname, major });
  res.send(`<h1>Hello, ${name} ${surname} on ${major} studies!</h1>`);
});


app.get('/users', (req, res) => {
  const userList = students.map(student => `<p>${student.name} ${student.surname} - ${student.major}</p>`).join('');
  res.send(`<h1>Lista użytkowników</h1><ul>${userList}</ul>`);
});


app.listen(PORT, () => {
  console.log(`Serwer nasłuchuje na porcie ${PORT}`);
});