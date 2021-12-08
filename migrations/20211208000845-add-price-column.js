module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('drummers', 'price_per_gig', {
      type: Sequelize.FLOAT,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('drummers', 'price_per_gig');
  },
};
