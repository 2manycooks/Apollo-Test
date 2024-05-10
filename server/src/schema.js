const gql = require("graphql-tag")

const typeDefs = gql`

    type Query {

    "Query for a specific track by ID"
    track(id: ID!): Track

    "Index of all tracks"
    tracksForHome: [Track!]!
        
    }

    type Mutation {
        incrementTrackViews(id: ID!): IncrementTrackViewsResponse

    
    
    }

    type IncrementTrackViewsResponse {

        "Similar to HTTP status code, represents status of mutation"
        code: Int!
        "Indicates if mutation was successful"
        success: Boolean!
        "Human-readable message for UI"
        message: String!
        "Newly updated track after successful mutation"
        track: Track
    
    
    }

    type Track {

        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        length: Int
        modulesCount: Int
        description: String
        numberOfViews: Int
        module: [Module!]

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