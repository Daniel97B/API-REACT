module.exports = app => {

  const tutorials = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Entrenador
  router.post("/", tutorials.create);

  // Retrieve all Entrenador
  router.get("/", tutorials.findAll);

  // Retrieve a single Entrenador with id
  router.get("/:id", tutorials.findOne);

  // Update a Entrenador with id
  router.put("/:id", tutorials.update);

  // Delete a Entrenador with id
  router.delete("/:id", tutorials.delete);

  // Delete all Entrenador
  router.delete("/", tutorials.deleteAll);

  app.use('/api/tutorials', router);

};