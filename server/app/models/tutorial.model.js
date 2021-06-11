module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("Cars", {
    manufacturer: {
      type: Sequelize.STRING
    },
    model: {
      type: Sequelize.STRING
    },
    year: {
      type: Sequelize.INTEGER
    },
    price: {
      type: Sequelize.INTEGER
    }
  });

  return Tutorial;
};
