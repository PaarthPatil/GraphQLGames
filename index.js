// index.js

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

//database
import db from './_db.js';

//importing 
import { typeDefs } from './schema.js';

const resolvers={
  Query:{
    games(){
      return db.games;
    },
    authors(){
      return db.authors;
    },
    reviews(){
      return db.reviews;
    },
    review(_,args){
      return db.reviews.find((review)=>review.id===args.id)
    },
    game(_,args){
      return db.games.find((game)=>game.id===args.id)
    },
    author(_,args){
      return db.authors.find((author)=>author.id===args.id)
    },
  },
  Game:{
    reviews(parent){
      return db.reviews.filter((r)=>r.game_id===parent.id)
    }
  },
  Review:{
    author(parent){
      return db.authors.find((author)=>author.id===parent.author_id)
    },
    game(parent){
      return db.games.find((game)=>game.id===parent.game_id)
    }
  },
  Author:{
    reviews(parent){
      return db.reviews.filter((review)=>review.author_id===parent.id)
    }
  
  },
  Mutation:{

    addGame(_,args){
      let game ={
        ...args.game,
        id:Math.floor(Math.random()*1000).toString()
      }
      db.games.push(game)
      return game
     
    },

    deleteGame(_,args){
      db.games = db.games.filter((game)=>game.id!==args.id)
      return db.games;  
    },

    updateGame(_,args){
      db.games = db.games.map((game)=>{
        if(game.id===args.id){
          return {...game,...args.edits}
        }
        return game
      })
      return db.games.find((game)=>game.id===args.id)
    
    }
  }


}

/*
// ---------------------> STEP 1: DEFINE YOUR DATA <---------------------
// This is your "database" for now. Add your data here.
const db = {
  games: [
    { id: '1', title: 'Cyberpunk 2077', platform: ['PS5', 'Xbox', 'PC'], releaseYear: 2020 },
    { id: '2', title: 'The Legend of Zelda: Tears of the Kingdom', platform: ['Nintendo Switch'], releaseYear: 2023 },
    { id: '3', title: 'Elden Ring', platform: ['PS5', 'Xbox', 'PC'], releaseYear: 2022 },
    { id: '4', title: 'Starfield', platform: ['Xbox', 'PC'], releaseYear: 2023 },
  ],
  reviews: [
    { id: '101', rating: 9, content: 'An immersive open world with a compelling story.', author_id: '1', game_id: '1' },
    { id: '102', rating: 10, content: 'A masterpiece of game design and exploration.', author_id: '2', game_id: '2' },
    { id: '103', rating: 7, content: 'Vast, but can feel a bit empty at times.', author_id: '3', game_id: '4' },
    { id: '104', rating: 8, content: 'Challenging combat and incredible world-building.', author_id: '1', game_id: '3' },
    { id: '105', rating: 5, content: 'Buggy at launch, but has improved significantly.', author_id: '2', game_id: '1' },
    { id: '106', rating: 9, content: 'Building vehicles is revolutionary!', author_id: '3', game_id: '2' },
  ],
  authors: [
    { id: '1', name: 'Aarav Sharma', verified: true },
    { id: '2', name: 'Priya Patel', verified: false },
    { id: '3', name: 'Rohan Das', verified: true },
  ],
};

// index.js

// 2. YOUR SCHEMA (TYPE DEFINITIONS)
const typeDefs = `#graphql
  type Game {
    id: ID!
    title: String!
    platform: [String!]!
    releaseYear: Int
    reviews: [Review!]
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
    author: Author!
    game: Game!
  }
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
  }

  type Query {
    reviews: [Review]
    review(id: ID!): Review
    games: [Game]
    game(id: ID!): Game
    authors: [Author]
    author(id: ID!): Author
  }
`;

// 3. YOUR RESOLVERS
const resolvers = {
  // Resolvers for your main entry points
  Query: {
    games: () => db.games,
    authors: () => db.authors,
    reviews: () => db.reviews,
    game: (_, args) => db.games.find((g) => g.id === args.id),
    author: (_, args) => db.authors.find((a) => a.id === args.id),
    review: (_, args) => db.reviews.find((r) => r.id === args.id),
  },
  
  // Resolvers for the relationships between your types
  Game: {
    reviews: (parent) => db.reviews.filter((r) => r.game_id === parent.id),
  },
  Author: {
    reviews: (parent) => db.reviews.filter((r) => r.author_id === parent.id),
  },
  Review: {
    author: (parent) => db.authors.find((a) => a.id === parent.author_id),
    game: (parent) => db.games.find((g) => g.id === parent.game_id),
  }
};








*/


















// The rest of your server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(` Server ready at: ${url} `);