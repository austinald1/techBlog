const { Comment } = require('../models');


// creating sample comments
const commentData = [
    {
        content: " This comment is Here! Hopefully under Austin's Post",
        post_id: 2,
    },
    {
        content: "This comment is Here! Hopefully under Bob's Post",
        post_id: 1,
    },
    {
        content: " This comment is Here! Hopefully under Steven's Post",
        post_id: 3,
    },
 
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;