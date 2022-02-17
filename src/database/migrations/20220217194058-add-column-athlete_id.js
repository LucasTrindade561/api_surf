module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize.transaction((t) => Promise.all([
    queryInterface.addColumn('aboutsurfer', 'athlete_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'athletes',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }, { transaction: t }),
  ])),

  down: async () => {
  //
  },
};
