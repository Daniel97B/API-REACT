const db = require("../models");
const Entrenador = db.tbentrenadores;
const Op = db.Sequelize.Op;

// Create and Save a new Entrenador
exports.create = (req, res) => {

  // Validate request

  if (!req.body.Nombre) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Entrenador
  const entrenador = {
    Nombre: req.body.Nombre,
    Apellido: req.body.Apellido,
    Edad: req.body.Edad,
    Horario: req.body.Horario,
    Clase: req.body.Clase,

  };

  // Save Entrenador in the database
  Entrenador.create(entrenador)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Entrenador."
      });
    });
};

// Retrieve all Entrenador from the database.
exports.findAll = (req, res) => {
  const Nombre = req.query.Nombre;
  var condition = Nombre ? { Nombre: { [Op.like]: `%${Nombre}%` } } : null;

  Entrenador.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Entrenador."
      });
    });

};

// Find a single Entrenador with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
 
  Entrenador.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Entrenador with id=" + id
      });
    });
};

// Update a Entrenador by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
 
  Entrenador.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Entrenador was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Entrenador with id=${id}. Maybe Entrenador was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Entrenador with id=" + id
      });
    });
};

// Delete a Entrenador with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Entrenador.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Entrenador was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Entrenador with id=${id}. Maybe Entrenador was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Entrenador with id=" + id
      });
    });
};

// Delete all Entrenadorfrom the database.
exports.deleteAll = (req, res) => {
  Entrenador.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Entrenador were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Entrenador."
      });
    });
};
