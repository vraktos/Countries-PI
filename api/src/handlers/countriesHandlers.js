const getCountryByIdHandler = (req, res) => {
  const { id } = req.params;
  console.log(id);
  res
    .status(200)
    .send(
      `Esta ruta devuelve el detalle del pais de id ${id} mas las actividades turisticas`
    );
};

const getCountriesHandler = (req, res) => {
  const { name } = req.query;
  if (name) {
    res.status(200).send(name);
  } else {
    res
      .status(200)
      .send(
        "Obtiene un arreglo de objetos, donde cada objeto es un país con toda su información."
      );
  }
};

module.exports = { getCountryByIdHandler, getCountriesHandler };
