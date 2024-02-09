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
    bookId: String
    authors:[String]
    image: String
    link: String
  },
  input BookData {
    description: String
    title: String
    bookId: String
    authors:[String]
    image: String
    link: String
  }
  type Query {
    me: User
  },
  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    saveBook(book: BookData!): User
    removeBook(bookId: ID!): User
  }

  
`;

module.exports = typeDefs;