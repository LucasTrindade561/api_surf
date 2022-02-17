module.exports = {
  up: async (queryInterface) => {
    await queryInterface.removeColumn('athletes', 'aboutsurfer');
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('athletes');
  },
};
