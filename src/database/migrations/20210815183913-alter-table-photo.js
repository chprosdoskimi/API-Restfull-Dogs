module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('photos', 'filename', {
      type: Sequelize.STRING,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.removeColumn('photos', 'filename', {});
  },
};
