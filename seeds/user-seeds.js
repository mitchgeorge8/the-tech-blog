const { User } = require("../models");

const userData = [
  {
    username: "GratifiedPeppermint",
    email: "test1@email.com",
    password: "password123",
  },
  {
    username: "DisgustedPaprika",
    email: "test2@email.com",
    password: "password123",
  },
  {
    username: "ResentfulPumpkins",
    email: "test3@email.com",
    password: "password123",
  },
  {
    username: "StressedCroissant",
    email: "test4@email.com",
    password: "password123",
  },
  {
    username: "MorbidTacos",
    email: "test5@email.com",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
