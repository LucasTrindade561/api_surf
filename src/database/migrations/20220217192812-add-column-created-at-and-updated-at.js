module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize.transaction((t) => Promise.all([
    queryInterface.addColumn('aboutsurfer', 'created_at', {
      type: Sequelize.DATE,
      allowNull: false,
    }, { transaction: t }),
    queryInterface.addColumn('aboutsurfer', 'updated_at', {
      type: Sequelize.DATE,
      allowNull: false,
    }, { transaction: t }),
  ])),

  down: async () => {
    //
  },
};
