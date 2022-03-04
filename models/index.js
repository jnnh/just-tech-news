const User = require('./Users');
const Post = require('./Post');
const Vote = require('./Votes');

//create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

Vote.belongsTo(User, {
    foreginKey: 'user_id'
});

Vote.belongsTo(Post, {
    foreginKey: 'post_id'
});

User.hasMany(Vote, {
    foreginKey: 'user_id'
});

Post.hasMany(Vote, {
    foreginKey: 'post_id'
});

//create Many-to-Many associations
User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreginKey: 'user_id'
});

Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreginKey: 'post_id'
});

module.exports = { User, Post, Vote };