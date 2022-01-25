module.exports = {
  up: (queryInterface) => queryInterface.renameColumn('athletes', 'about_surfer', 'aboutsurfer'),

  down: () => {

  },
};
