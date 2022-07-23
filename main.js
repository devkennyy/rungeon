const express = require('express');
const rungeon = express();
const port = 3000;


rungeon.use(express.static(__dirname + '/public'));
rungeon.set('view engine', 'ejs');


rungeon.get('/', (req, res) => {
  res.render('index', {
    title: 'Rungeon'
  });
});

rungeon.get('/login', (req, res) => {
  res.render('login', {
    title: 'Rungeon - Login'
  });
});

rungeon.get('/signup', (req, res) => {
  res.render('signup', {
    title: 'Rungeon - SignUp'
  });
});

rungeon.get('/rungeon', (req, res) => {
  res.render('rungeon', {
    title: 'Rungeon - Game'
  });
});

rungeon.get('*', (req, res) => {
  res.status(404);
  res.render('404', {
    title: 'Rungeon - Page Not Found'
  });
});

rungeon.listen(port, () => {
  console.log(`Listening on port ${port} \nctrl + click: http://localhost:3000/`);
});
