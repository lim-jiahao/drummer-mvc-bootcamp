module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('reservations', null, {});
    await queryInterface.bulkDelete('drummers', null, {});

    const drummersList = [
      {
        name: 'daddy foong',
        price_per_gig: 100,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'big d foong',
        price_per_gig: 200,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'playboy foong',
        price_per_gig: 300,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert('drummers', drummersList);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('drummers', 'price_per_gig');
  },
};
