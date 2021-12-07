module.exports = {
  up: async (queryInterface) => {
    const drummersList = [
      {
        name: 'daddy foong',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'big d foong',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'playboy foong',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert('drummers', drummersList);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('drummers', null, {});
  },
};
