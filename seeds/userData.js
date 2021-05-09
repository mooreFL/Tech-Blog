const { User } = require('../models');

const userData = [
    {
        username: 'adamlikesthebeatles',
        email: 'adam@mail.com',
        password: 'rootroot',
    },
    {
        username: 'patty',
        email: 'patrickhhateshandlebars@email.com',
        password: 'rootroot',
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;