const faker = require('faker');

const db = require('../config/connection');
const { Post, User } = require('../models');

db.once('open', async () => {
  await Post.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  // create friends/empaths data
  for (let i = 0; i < 100; i += 1) {
    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { _id: userId } = createdUsers.ops[randomUserIndex];

    let empathId = userId;

    while (empathId === userId) {
      const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
      empathId = createdUsers.ops[randomUserIndex];
    }

    await User.updateOne({ _id: userId }, { $addToSet: { empaths: empathId } });
  }

  // create posts
  let createdPosts = [];
  for (let i = 0; i < 100; i += 1) {
    const postText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    const createdPost = await Post.create({ postText, username });

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { posts: createdPost._id } }
    );

    createdPosts.push(createdPost);
  }

  // create reactions
  for (let i = 0; i < 100; i += 1) {
    const reactionBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username } = createdUsers.ops[randomUserIndex];

    const randomPostIndex = Math.floor(Math.random() * createdPosts.length);
    const { _id: postId } = createdPosts[randomPostIndex];

    await Post.updateOne(
      { _id: postId },
      { $push: { reactions: { reactionBody, username } } },
      { runValidators: true }
    );
  }

  console.log('all done!');
  process.exit(0);
});