const functions = require('firebase-functions');

const express = require('express');
const tripRoutes = require('./routes/clienteRoutes');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/clientes');
app.use('/autos');

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});

exports.webapi = functions.https.onRequest(app);
