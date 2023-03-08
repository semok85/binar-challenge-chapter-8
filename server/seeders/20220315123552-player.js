"use strict";
const { hashPassword } = require("../utils/passwordHandler");

module.exports = {
  async up(queryInterface, _) {
    await queryInterface.bulkInsert("Players", [
      {
        username: "PussyPlayer613",
        email: "pussy.slay3r@gmail.com",
        password: await hashPassword("123456"),
        experience: 400000,
        lvl: 600,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "HardcoreLevellingWarrior",
        email: "hclw@gmail.com",
        password: await hashPassword("123456"),
        experience: 600000,
        lvl: 666,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "softplayer",
        email: "soft@gmail.com",
        password: await hashPassword("123456"),
        experience: 50000,
        lvl: 106,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "playerForLiving",
        email: "living@gmail.com",
        password: await hashPassword("123456"),
        experience: 7000,
        lvl: 507,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "winningTeam",
        email: "winning@gmail.com",
        password: await hashPassword("123456"),
        experience: 100,
        lvl: 700,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, _) {
    await queryInterface.bulkDelete("Players", null, {});
  },
};
