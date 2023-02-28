const getActivitiesHandler = (req, res) => {
  res
    .status(200)
    .send(
      "Obtiene un arreglo de objetos, donde cada objeto es una actividad turística."
    );
};

const postActivitieHandler = (req, res) => {
  res
    .status(201)
    .send(
      "Esta ruta recibirá todos los datos necesarios para crear una actividad turística y relacionarla con los países solicitados."
    );
};

module.exports = { postActivitieHandler, getActivitiesHandler };
