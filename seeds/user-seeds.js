const { User } = require('../models');


// Creating sample users
const userData = [
    {
        user_name: 'Austin Alderete',
        email: 'austin@gmail.com',
        password: 'test1234'
    },
    {
        user_name: 'Bob Dude',
        email: 'bobdude@yahoo.com',
        password: 'password1234'
    },
    {
        user_name: 'Steven Guy',
        email: 'Steven@gmail.com',
        password: 'testpass1234'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;