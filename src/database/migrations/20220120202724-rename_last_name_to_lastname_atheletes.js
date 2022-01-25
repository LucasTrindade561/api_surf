module.exports = {
  up: (queryInterface) => queryInterface.renameColumn('athletes', 'last_name', 'lastname'),

  down: () => {

  },
};
