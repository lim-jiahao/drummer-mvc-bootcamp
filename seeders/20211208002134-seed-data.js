module.exports = {
  up: async (queryInterface, Sequelize) => {
    const equipmentList = [
      {
        name: 'flute',
        drummer_id: 22,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'sticks',
        drummer_id: 22,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'lsd',
        drummer_id: 23,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'drum set',
        drummer_id: 23,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'cocaine',
        drummer_id: 24,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'xylophone',
        drummer_id: 24,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert('equipments', equipmentList);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('equipments', null, {});
  },
};
