const gql = require("graphql-tag")

const typeDefs = gql`

    type Query {

    "Query for a specific track by ID"
    track(id: ID!): Track

    "Index of all tracks"
    tracksForHome: [Track!]!

    }

    type Track {

        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        length: Int
        modulesCount: Int
        dscription: String
        numberOfViews: Number
        modules: [Module!]

    }

    type Author {
        id: ID!
        name: String!
        photo: String
    }

    type Module {
        id: ID!
        title: String!
        length: Int
    
    }

`
module.exports = typeDefs