let movies = [
  {
    id: 1,
    title: 'Inception',
    genre: 'Sci-Fi',
    releaseYear: 2010,
    rating: 8.8,
  },
  {
    id: 2,
    title: 'The Dark Knight',
    genre: 'Action',
    releaseYear: 2008,
    rating: 9.0,
  },
  {
    id: 3,
    title: 'Interstellar',
    genre: 'Sci-Fi',
    releaseYear: 2014,
    rating: 8.6,
  },
  {
    id: 4,
    title: 'Pulp Fiction',
    genre: 'Crime',
    releaseYear: 1994,
    rating: 8.9,
  },
  {
    id: 5,
    title: 'The Matrix',
    genre: 'Sci-Fi',
    releaseYear: 1999,
    rating: 8.7,
  },
];

function getAllMovies() {
  return [...movies];
}

function findMovieById(id) {
  const numericId = Number(id);
  return movies.find((movie) => movie.id === numericId);
}

function findMovieByTitle(title) {
  if (!title) return undefined;
  const normalizedTitle = title.trim().toLowerCase();
  return movies.find(
    (movie) => movie.title.trim().toLowerCase() === normalizedTitle
  );
}

function addMovie(movieData) {
  const maxId = movies.reduce(
    (max, movie) => (movie.id > max ? movie.id : max),
    0
  );
  const newMovie = {
    id: maxId + 1,
    title: movieData.title.trim(),
    genre: movieData.genre.trim(),
    releaseYear: Number(movieData.releaseYear),
    rating: Number(movieData.rating),
  };
  movies.push(newMovie);
  return newMovie;
}

function updateMovie(id, updateData) {
  const numericId = Number(id);
  const index = movies.findIndex((movie) => movie.id === numericId);
  if (index === -1) return null;

  movies[index] = {
    id: numericId,
    title: updateData.title.trim(),
    genre: updateData.genre.trim(),
    releaseYear: Number(updateData.releaseYear),
    rating: Number(updateData.rating),
  };
  return movies[index];
}

function updateMovieRating(id, rating) {
  const numericId = Number(id);
  const movie = movies.find((movie) => movie.id === numericId);
  if (!movie) return null;

  movie.rating = Number(rating);
  return movie;
}

function deleteMovie(id) {
  const numericId = Number(id);
  const index = movies.findIndex((movie) => movie.id === numericId);
  if (index === -1) return null;

  const deletedMovie = movies.splice(index, 1)[0];
  return deletedMovie;
}

module.exports = {
  getAllMovies,
  findMovieById,
  findMovieByTitle,
  addMovie,
  updateMovie,
  updateMovieRating,
  deleteMovie,
};
