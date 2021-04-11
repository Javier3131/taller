const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

const express = require('express');
var cors = require('cors');
const helmet = require('helmet');

const clienteRoutes = require('./routes/clienteRoutes');
const autoRoutes = require('./routes/autoRoutes');
const reparacionRoutes = require('./routes/reparacionRoute');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/clientes', clienteRoutes);
app.use('/autos', autoRoutes);
app.use('/reparaciones', reparacionRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});

exports.webapi = functions.https.onRequest(app);
