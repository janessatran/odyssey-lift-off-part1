const { gql } = require("apollo-server"); // used to wrap graphql strings

const typeDefs = gql`
  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
  }

  "A track is a group of modules that teaches about a certain subject"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  "Author of a complete track or module"
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

module.exports = typeDefs;
