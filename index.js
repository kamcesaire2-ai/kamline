const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('/vols', (req, res) => res.sendFile(path.join(__dirname, 'public', 'vols.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, 'public', 'contact.html')));
app.get('/reserver', (req, res) => res.sendFile(path.join(__dirname, 'public', 'reserver.html')));

app.post('/contact', (req, res) => {
  console.log('Nouvelle demande:', req.body);
  res.redirect('/?merci=1');
});

app.listen(PORT, () => console.log('Kamline sur port ' + PORT));