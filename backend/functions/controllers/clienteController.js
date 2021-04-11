// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');

const clientes_index = async (req, res) => {
  const clientes = [];
  const snapshot = await (
    await admin.firestore().collection('clientes').get()
  ).forEach((doc) => {
    const t = { id: doc.id, data: doc.data() };
    clientes.push(t);
  });
  res.json(clientes);
};

const cliente_details = async (req, res) => {
  const clienteId = req.params.id;
  const cliente = await admin
    .firestore()
    .collection('clientes')
    .doc(clienteId)
    .get();
  if (!cliente.exists) {
    res.json({ mensaje: 'Cliente no encontrado' });
  } else {
    res.json({ mensaje: 'Cliente encontrado', cliente: cliente.data() });
  }
};

const cliente_create_post = async (req, res) => {
  const { primerNombre, apellido, telefono, correo } = req.body;
  if (!primerNombre) {
    res.status(418).send({ mensaje: 'Se necesita el primer nombre' });
  }

  const writeResult = await admin
    .firestore()
    .collection('clientes')
    .add({
      primerNombre,
      apellido,
      telefono,
      correo,
      fechaCreo: admin.firestore.Timestamp.fromDate(new Date()),
    });

  res.json({ mensaje: 'El cliente ha sido creado' });
};

const cliente_delete = async (req, res) => {
  const clienteId = req.params.id;
  await admin.firestore().collection('clientes').doc(clienteId).delete();
  res.json({ mensaje: 'El cliente ha sido eliminado' });
};

module.exports = {
  clientes_index,
  cliente_details,
  cliente_create_post,
  cliente_delete,
};
