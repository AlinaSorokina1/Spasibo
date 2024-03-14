'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Students',
      [
        {
          name: 'Павел Васильев',
          phase: 1,
          countThanks: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Абубакар Хулаев',
          phase: 2,
          countThanks: -5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Алина Сорокина',
          phase: 3,
          countThanks: 999,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Students', null, {});
  },
};
