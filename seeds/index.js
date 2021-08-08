const sequelize = require('../config/connection');
const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

// IIFE to seed all example content
const seedAll = (async () => {
    await sequelize.sync({ force: true });

    await seedUsers();
    await seedPosts();
    await seedComments();
})();

