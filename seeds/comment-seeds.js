const { Comment } = require('../models');


// creating sample comments
const commentData = [
    {
        content: " This comment is Here! Hopefully under Olivers Post",
        post_id: 2,
    },
    {
        content: "This comment is Here! Hopefully under Kyles Post",
        post_id: 1,
    },
    {
        content: " This comment is Here! Hopefully under Gordons Post",
        post_id: 3,
    },
 
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;