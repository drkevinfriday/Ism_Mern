import { gql } from '@apollo/client';

// deleted image and category from query temporarily
/*
image{
  url
}
category{
  _id
  name
}
*/

export const QUERY_POSTS = gql`
  query posts($username: String) {
    posts(username: $username) {
      _id
      postText
      title
      createdAt
      username
      category {
        categoryName
        _id
      }
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;
// category{
//   _id
//   categoryName
// }
export const QUERY_POST = gql`
  query post($id: ID!) {
    post(_id: $id) {
      _id
      postText
      title
      createdAt
      username
      category {
        categoryName
        _id
      }
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;

// title 
//postText 
//username
//reactionCount
export const QUERY_CATEGORY = gql`
  query posts($category: String) {
    
    category
    
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      empathCount
      empaths {
        _id
        username
      }
      posts {
        _id
        postText
        title
        createdAt
       
        category {
          categoryName
          _id
        }
        reactionCount
        category{
          _id
          categoryName
        }
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      empathCount
      posts {
        _id
        postText
        title
        createdAt
        category
        reactionCount
        reactions {
          _id
          createdAt
          reactionBody
          username
        }
      }
      empaths {
        _id
        username
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      empathCount
      empaths {
        _id
        username
      }
    }
  }
`;
