const admin = require('firebase-admin');
admin.initializeApp();

const reparacion_create_post = async (req, res) => {
  const { clienteId, autoId, desc } = req.body;
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
