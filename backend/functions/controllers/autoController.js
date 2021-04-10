const admin = require('firebase-admin');
const { v4: uuidv4, v4 } = require('uuid');

admin.initializeApp();

const auto_create_post = async (req, res) => {
  const { clienteId, marca, modelo, color, placa, anio } = req.body;
  if (!clienteId) {
    res.status(418).send({ mensaje: 'Se necesita el Id del Cliente' });
  }

  const auto = {
    clienteId,
    id: uuidv4(),
    marca,
    modelo,
    color,
    placa,
    anio,
    fechaCreo: new Date(),
    reparaciones: [],
  };

  await admin
    .firestore()
    .collection('clientes')
    .doc(clienteId)
    .update({ autos: admin.firestore.FieldValue.arrayUnion(auto) });

  res.json({ mensaje: 'El auto sido creado' });
};

const auto_delete = async (req, res) => {
  const { clienteId, autoId } = req.body;

  if (!clienteId) {
    res.status(418).send({ mensaje: 'Se necesita el Id del Cliente' });
  }

  if (!autoId) {
    res.status(418).send({ mensaje: 'Se necesita el Id del Auto' });
  }

  const cliente = await admin
    .firestore()
    .collection('clientes')
    .doc(clienteId)
    .get();
  const autos = cliente.autos.filter((x) => x.id !== autoId);
  console.log('Autos a setear despues de filtrar', autos);

  await admin
    .firestore()
    .collection('clientes')
    .doc(clienteId)
    .set({ autos: autos }, { merge: true });

  res.json({ mensaje: 'El auto sido eliminado' });
};

module.exports = {
  auto_create_post,
  auto_delete,
};
