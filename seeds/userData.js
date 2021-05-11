const { User } = require('../models');

const userData = [
    {
        username: 'adamlikesthebeatles',
        email: 'adam@mail.com',
        password: '$2b$10$F3rcu8eg2UUxyfHIWYMxK.uAZoEDTmXiyS6RmRbLamYkqLF/EN7Va',
    },
    {
        username: 'patty',
        email: 'patrickhhateshandlebars@email.com',
        password: '$2b$10$F3rcu8eg2UUxyfHIWYMxK.uAZoEDTmXiyS6RmRbLamYkqLF/EN7Va',
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;