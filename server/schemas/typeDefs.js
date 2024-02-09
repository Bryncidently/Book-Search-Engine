const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks:[Book]
  },
  type Auth {
    token: ID!
    user: User
  },
  type Book {
    description: String
    title: String
    bookId: ID!
    authors:[String]
    image: String
    link: String
  },
  

  type Query {
    me: User
  },
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeBook(bookId: ID!): User
  }

  
`;

module.exports = typeDefs;