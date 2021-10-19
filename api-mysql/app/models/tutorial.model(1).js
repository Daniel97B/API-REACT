module.exports = (sequelize, Sequelize) => {
    const Entrenador = sequelize.define("tbentrenadores", {
      Nombre: {
        type: Sequelize.STRING
      },
      Apellido: {
        type: Sequelize.STRING
      },
      Edad: {
        type: Sequelize.STRING
      },
      Horario: {
        type: Sequelize.STRING
      },
      Clase: {
        type: Sequelize.STRING
      },
      
    });
  
    return Entrenador;
  };