const { Comment } = require('../models');

const commentdata = [
    {
        comment: 'test comment 1',
    },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;