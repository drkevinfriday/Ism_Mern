const { User, Post, Category } =require('../models')
// import the gql tagged template function
const { gql } = require('apollo-server-express');
<<<<<<< HEAD



=======
>>>>>>> 4d738ec3d9f858272d1ef62f59d5566a670a12bb
// create our typeDefs
// deleted category and image from schema temporarily
const typeDefs = gql
`type Post {
    _id: ID
    title: String
    postText: String
    createdAt: String
    username: String
    category: String
    reactionCount: Int
    reactions: [Reaction]
  }
  type Category {
    _id: ID
    categoryName: String
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
    empathCount: Int
    posts: [Post]
    empaths: [User]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query{
    posts(username: String): [Post]
  }
<<<<<<< HEAD

  
  


=======
  type Query {
    category: Category
  }
>>>>>>> 4d738ec3d9f858272d1ef62f59d5566a670a12bb
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    posts(category: String): [Post]

    post(_id: ID!): Post
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(postText: String!, title: String!, category: String!): Post
    addReaction(postId: ID!, reactionBody: String!): Post
    addEmpath(EmpathId: ID!): User
  }
`;
// export the typeDefs
module.exports = typeDefs;