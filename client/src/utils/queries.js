import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me($userId: ID!) {
    me(_id: $userId) {
      _id
      username
      email
      bookCount
      savedBooks
    }
  }
`;
