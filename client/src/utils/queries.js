import { gql } from '@apollo/client';

const GET_ME = gql`
query user($userId: ID!) {
  me(userId: $userId) {
    _id
    username
    email
    bookCount
    savedBooks
  }
}
`;