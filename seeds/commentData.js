const { Comment } = require('../models');

const commentdata = [
    {
        comment: 'test comment 1',
        date: '2021-05-09',
        user_id: 1,
        post_id: 2,
    },
    {
        comment: 'test comment 2',
        date: '2021-05-09',
        user_id: 1,
        post_id: 1,
    },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;