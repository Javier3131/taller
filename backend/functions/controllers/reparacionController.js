const admin = require('firebase-admin');
admin.initializeApp();

const reparacion_create_post = async (req, res) => {
  const { autoId, desc } = req.body;
  if (!autoId) {
    res.status(418).send({ mensaje: 'Se necesita el Id del Auto' });
  }

  const reparacion = {
    autoId,
    desc,
    fechaCreo: new Date(),
  };

  const writeResult = await admin
    .firestore()
    .collection('reparaciones')
    .add(reparacion);

  res.json({ mensaje: 'El auto sido creado' });
};

const reparacion_index = async (req, res) => {
  const autoId = req.params.autoId;
  const reparaciones = [];
  const snapshot = await (
    await admin
      .firestore()
      .collection('reparaciones')
      .where('autoId', '==', autoId)
      .orderBy('fechaCreo', 'desc')
      .get()
  ).forEach((doc) => {
    const t = { id: doc.id, data: doc.data() };
    reparaciones.push(t);
  });
  res.json(reparaciones);
};

const reparacion_delete = async (req, res) => {
  const reparacionId = req.params.id;

  if (!reparacionId) {
    res.status(418).send({ mensaje: 'Se necesita el Id del Auto' });
  }

  await admin.firestore().collection('reparaciones').doc(reparacionId).delete();
  res.json({ mensaje: 'La reparacion ha sido eliminada' });
};

module.exports = {
  reparacion_index,
  reparacion_create_post,
  reparacion_delete,
};
