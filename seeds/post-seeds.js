const { Post } = require('../models');


// creating sample posts
const postData = [
    {
        title: "Austin's First Post Title",
        content: "Hello! My name is Kyle, and this is my first post content!",
        user_id: 1,
    },
    {
        title: "Bob's First Post Title",
        content: "Hello! My name is Bob, and this is my first post content!",
        user_id: 2,
    },
    {
        title: "Steven's First Post Title",
        content: "Hello! My name is Steven, and this is my first post content!",
        user_id: 3,
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;