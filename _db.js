// This is your "database" for now. Add your data here.
const db = {
  games: [
    { id: '1', title: 'Cyberpunk 2077', platform: ['PS5', 'Xbox', 'PC'], releaseYear: 2020 },
    { id: '2', title: 'The Legend of Zelda: Tears of the Kingdom', platform: ['Nintendo Switch'], releaseYear: 2023 },
    { id: '3', title: 'Elden Ring', platform: ['PS5', 'Xbox', 'PC'], releaseYear: 2022 },
    { id: '4', title: 'Starfield', platform: ['Xbox', 'PC'], releaseYear: 2023 },
    { id: '5', title: 'Rising Hero', platform: ['Xbox', 'PC'], releaseYear: 2025 },
  ],
  reviews: [
    { id: '1', rating: 9, content: 'An immersive open world with a compelling story.', author_id: '1', game_id: '1' },
    { id: '2', rating: 10, content: 'A masterpiece of game design and exploration.', author_id: '2', game_id: '2' },
    { id: '3', rating: 7, content: 'Vast, but can feel a bit empty at times.', author_id: '3', game_id: '4' },
    { id: '4', rating: 8, content: 'Challenging combat and incredible world-building.', author_id: '1', game_id: '3' },
    { id: '5', rating: 5, content: 'Buggy at launch, but has improved significantly.', author_id: '2', game_id: '1' },
    { id: '6', rating: 9, content: 'Building vehicles is revolutionary!', author_id: '3', game_id: '2' },
  ], 
  authors: [
    { id: '1', name: 'Aarav Sharma', verified: true },
    { id: '2', name: 'Priya Patel', verified: false },
    { id: '3', name: 'Rohan Das', verified: true },
  ],
};

export default db;