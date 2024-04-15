const gql = require("graphql-tag")

const typeDefs = gql`
    type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!
    
    }





"A track is a group of Modules that teaches about a specific topic"
type Track {
id: ID!
"track title"
title: String!
"track's main author"
author: Author!
"main illustration to display in track card or track page detail"
thumbnail: String
"the track's approximate length to complete, in minutes"
length: Int
"the number of modules this track contains"
modules:Count
}

"Author of a complete Track"
type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile URL"
    photo: String


}


`

module.exports = typeDefs