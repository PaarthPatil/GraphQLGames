export const typeDefs = `#graphql
    type Game{
        id: ID!
        title: String!
        platform: [String!]!
        releaseYear: Int
        reviews: [Review!]
    }  
    type Review{
        id: ID!
        rating: Int!
        content: String!
        author: Author!
        game_id: ID!
        game: Game!
    }  
    type Author{
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }
    type Query{
        reviews: [Review]
        review(id: ID!): Review
        games: [Game]
        game(id: ID!): Game 
        authors: [Author]
        author(id: ID!): Author
    }   

    type Mutation{
        deleteGame(id: ID!): [Game]
        addGame(game: AddGameInput!): Game
        updateGame(id:ID!,edits:editGameInput!):Game
        deleteReview(id: ID!): Review
        deleteAuthor(id: ID!): Author

    } 

    input AddGameInput{
        title: String!
        platform: [String!]!
        releaseYear: Int
    }

    input editGameInput{
        title: String
        platform: [String!]
        releaseYear: Int
    }

`
// int float string boolean ID  -----> these are all the types of variables i.e. arguments that can be used