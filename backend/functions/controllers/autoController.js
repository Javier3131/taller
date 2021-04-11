const admin = require('firebase-admin');

const auto_create_post = async (req, res) => {
  const { clienteId, marca, modelo, color, placa, anio } = req.body;
  if (!clienteId) {
    res.status(418).send({ mensaje: 'Se necesita el Id del Cliente' });
  }

  const auto = {
    clienteId,
    marca,
    modelo,
    color,
    placa,
    anio,
    fechaCreo: admin.firestore.Timestamp.fromDate(new Date()),
  };

  const writeResult = await admin.firestore().collection('autos').add(auto);

  res.json({ mensaje: 'El auto sido creado' });
};

const auto_index = async (req, res) => {
  const clienteId = req.params.clienteId;
  const autos = [];
  const snapshot = await (
    await admin
      .firestore()
      .collection('autos')
      .where('clienteId', '==', clienteId)
      .orderBy('fechaCreo', 'desc')
      .get()
  ).forEach((doc) => {
    const t = { id: doc.id, data: doc.data() };
    autos.push(t);
  });
  res.json(autos);
};

const auto_delete = async (req, res) => {
  const autoId = req.params.id;

  if (!autoId) {
    res.status(418).send({ mensaje: 'Se necesita el Id del Auto' });
  }

  await admin.firestore().collection('autos').doc(autoId).delete();
  res.json({ mensaje: 'El auto ha sido eliminado' });
};

module.exports = {
  auto_create_post,
  auto_index,
  auto_delete,
};
