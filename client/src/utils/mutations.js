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

export const ADD_POST = gql`
  mutation addThought($thoughtText: String!) {
    addThought(thoughtText: $thoughtText) {
      _id
      thoughtText
      createdAt
      username
      reactionCount
      reactions {
        _id
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

<<<<<<< HEAD
// CHANGED body TO postText 
export const ADD_POST = gql`
  mutation addPost($postText: String!) {
    addPost(postText: $postText) {
      _id
      postText
      title
      createdAt
      username
      image{
        url
      }
      category{
        _id
        name
      }
      reactionCount
      reactions {
        _id
=======

export const ADD_EMPATH = gql`
  mutation addFriend($id: ID!) {
    addFriend(friendId: $id) {
      _id
      username
      friendCount
      friends {
        _id
        username
>>>>>>> server
      }
    }
  }
`;

<<<<<<< HEAD
// NEED TO CHECK IF RIGHT
export const REMOVE_POST = gql`
  mutation removePost($id: ID!) {
    removePost(id: $id) {
      _id
      postText
      title
      createdAt
      username
      image{
        url
      }
      category{
        _id
        name
      }
      reactionCount
      reactions {
        _id
=======
export const REMOVE_EMPATH = gql`
  mutation removeFriend($id: ID!) {
    removeFriend(id: $id) {
      _id
      username
      friends {
        _id
        username
>>>>>>> server
      }
    }
  }
`;

export const ADD_REACTION = gql`
<<<<<<< HEAD
  mutation addReaction($postId: ID!, $reactionBody: String!) {
    addReaction(postId: $postId, reactionBody: $reactionBody) {
=======
  mutation addReaction($thoughtId: ID!, $reactionBody: String!) {
    addReaction(thoughtId: $thoughtId, reactionBody: $reactionBody) {
>>>>>>> server
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
<<<<<<< HEAD

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

=======
>>>>>>> server
