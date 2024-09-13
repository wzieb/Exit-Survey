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

export const ADD_RESPONSE = gql`
  mutation addThought($responseText: String!) {
    addResponse(thoughtText: $responseText) {
      _id
      responseText
      username
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;
