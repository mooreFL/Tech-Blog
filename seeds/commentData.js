const { Comment } = require('../models');

const commentdata = [
    {
        comment: 'Good Job!',
        blog_id: 1,
    },
    {
        comment: 'Incredible',
        blog_id: 2,
    },
    {
        comment: 'I really hate this.',
        blog_id: 2,
    },
    {
        comment: 'What were you thinking?',
        blog_id: 1,
    },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;