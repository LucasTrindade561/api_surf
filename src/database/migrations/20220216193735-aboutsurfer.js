module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('aboutsurfer', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      aboutsurfer: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('aboutsurfer');
  },
};
