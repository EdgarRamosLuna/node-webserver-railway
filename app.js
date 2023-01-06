require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const app = express()
const port = process.env.PORT;
// require('hbs');
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials', function (err) {});
// Servir contenido estatico

app.use(express.static('public'));
 
app.get('/', function (req, res) {
  res.render('home', {
    nombre: 'Edgar Ramos',
    titulo: 'Curso de Node',
  });
});
/*app.get('/hola-mundo', function (req, res) {
    res.send('Hola Mundo')
});*/

app.get('/elements', function (req, res) {
  //  res.sendFile(__dirname + '/public/elements.html');
  res.render('elements', {
    nombre: 'Edgar Ramos',
    titulo: 'Curso de Node',
  });
});
app.get('/generic', function (req, res) {
   //res.sendFile(__dirname + '/public/generic.html');
   res.render('generic', {
    nombre: 'Edgar Ramos',
    titulo: 'Curso de Node',
   });
});

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () =>{
    console.log(`app listening at http://localhost:${port}`);
    
});