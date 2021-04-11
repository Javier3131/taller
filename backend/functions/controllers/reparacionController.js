const admin = require('firebase-admin');

const reparacion_create_post = async (req, res) => {
  const { autoId, desc } = req.body;
  if (!autoId) {
    res.status(418).send({ mensaje: 'Se necesita el Id del Auto' });
  }

  const auto = await admin.firestore().collection('autos').doc(autoId).get();
  if (!auto.exists) {
    res.json({ mensaje: 'Auto no encontrado' });
  } else {
    const reparacion = {
      autoId,
      auto: auto.data(),
      desc,
      fechaCreo: admin.firestore.Timestamp.fromDate(new Date()),
    };

    const writeResult = await admin
      .firestore()
      .collection('reparaciones')
      .add(reparacion);

    res.json({ mensaje: 'La reparacion ha sido creado' });
  }
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

const reparacion_report_get = async (req, res) => {
  const reparaciones = [];
  const snapshot = await (
    await admin
      .firestore()
      .collection('reparaciones')
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
  reparacion_report_get,
};
