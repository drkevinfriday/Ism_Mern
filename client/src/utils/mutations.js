import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// CHANGED body TO postText // added title TESTING
export const ADD_POST = gql`
  mutation addPost($postText: String!, $title: String!) {
    addPost(postText: $postText, title: $title) {
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
      }
    }
  }
`;

// NEED TO CHECK IF RIGHT
export const REMOVE_POST = gql`
  mutation removePost($id: ID!) {
    removePost(id: $id) {
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
      }
    }
  }
`;

export const ADD_REACTION = gql`
  mutation addReaction($postId: ID!, $reactionBody: String!) {
    addReaction(postId: $postId, reactionBody: $reactionBody) {
      _id
      reactionCount
      reactions {
        _id
        reactionBody
        createdAt
        username
      }
    }
  }
`;

export const ADD_EMPATH = gql`
  mutation addEmpath($id: ID!) {
    addEmpath(empathId: $id) {
      _id
      username
      empathCount
      empaths {
        _id
        username
      }
    }
  }
`;
export const REMOVE_EMPATH = gql`
  mutation removeEMPATH($id: ID!) {
    removeEMPATH(id: $id) {
      _id
      username
      empaths {
        _id
        username
      }
    }
  }
`;

