const { Blog } = require('../models');

const blogdata = [
    {
        title: 'Test blog 1',
        text: 'This is test blog 1.',
        date: '2021-05-09',
        user_id: 1,
    },
    {
        title: 'Test blog 2',
        text: 'This is test blog 2.',
        date: '2021-05-09',
        user_id: 2,
    },
];

const seedBlog = () => Blog.bulkCreate(blogdata);

module.exports = seedBlog;