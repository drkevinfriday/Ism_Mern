const { User, Post } =require('../models')
// import the gql tagged template function
const { gql } = require('apollo-server-express');



// create our typeDefs
const typeDefs = gql
`type Post {
    _id: ID
    postText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }
  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    poats: [Post]
    friends: [User]
  }

  type Auth {
    token: ID!
    user: User
  }


type Query {
    posts(username: String): [Post]
  }
  
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(_id: ID!): Post
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(postText: String!): Post
    addReaction(postId: ID!, reactionBody: String!): Post
    addFriend(friendId: ID!): User
  }
`;

// export the typeDefs
module.exports = typeDefs;