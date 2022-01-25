module.exports = {
  up: (queryInterface) => queryInterface.renameColumn('users', 'last_name', 'lastname'),

  down: () => {

  },
};
