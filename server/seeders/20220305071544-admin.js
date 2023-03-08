"use strict";
const { hashPassword } = require("../utils/passwordHandler");

module.exports = {
  async up(queryInterface, _) {
    await queryInterface.bulkInsert("Admins", [
      {
        username: "admin@admin.com",
        password: await hashPassword("123456"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, _) {
    await queryInterface.bulkDelete("Admins", null, {});
  },
};
