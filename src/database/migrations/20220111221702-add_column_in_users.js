module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize.transaction((t) => Promise.all([
    queryInterface.addColumn('users', 'last_name', {
      type: Sequelize.STRING,
    }, { transaction: t }),
  ])),

  down: () => {},
};
