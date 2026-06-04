// List of Movies identified by id, title, genre, releaseYear and rating 

const movies = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        genre: "Drama",
        releaseYear: 1994,
        rating: 9.3
    },
    {
        id: 2,
        title: "The Godfather",
        genre: "Crime",
        releaseYear: 1972,
        rating: 9.2
    },
    {
        id: 3,
        title: "The Dark Knight",
        genre: "Action",
        releaseYear: 2008,
        rating: 9.0
    },
    {
        id: 4,
        title: "The Godfather Part II",
        genre: "Crime",
        releaseYear: 1974,
        rating: 9.0
    },
    {
        id: 5,
        title: "12 Angry Men",
        genre: "Drama",
        releaseYear: 1957,
        rating: 9.0
    },
    {
        id: 6,
        title: "Schindler's List",
        genre: "Biography",
        releaseYear: 1993,
        rating: 9.0
    },
    {
        id: 7,
        title: "The Lord of the Rings: The Return of the King",
        genre: "Adventure",
        releaseYear: 2003,
        rating: 9.0
    },
    {
        id: 8,
        title: "Pulp Fiction",
        genre: "Crime",
        releaseYear: 1994,
        rating: 8.9
    },
    {
        id: 9,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        genre: "Adventure",
        releaseYear: 2001,
        rating: 8.8
    },
    {
        id: 10,
        title: "The Good, the Bad and the Ugly",
        genre: "Western",
        releaseYear: 1966,
        rating: 8.8
    },
    {
        id: 11,
        title: "Forrest Gump",
        genre: "Drama",
        releaseYear: 1994,
        rating: 8.8
    },
    {
        id: 12,
        title: "Fight Club",
        genre: "Drama",
        releaseYear: 1999,
        rating: 8.8
    },
    {
        id: 13,
        title: "Inception",
        genre: "Sci-Fi",
        releaseYear: 2010,
        rating: 8.8
    },
    {
        id: 14,
        title: "The Lord of the Rings: The Two Towers",
        genre: "Adventure",
        releaseYear: 2002,
        rating: 8.8
    },
    {
        id: 15,
        title: "Star Wars: Episode V - The Empire Strikes Back",
        genre: "Action",
        releaseYear: 1980,
        rating: 8.7
    },
    {
        id: 16,
        title: "The Matrix",
        genre: "Sci-Fi",
        releaseYear: 1999,
        rating: 8.7
    },
    {
        id: 17,
        title: "Goodfellas",
        genre: "Crime",
        releaseYear: 1990,
        rating: 8.7
    },
    {
        id: 18,
        title: "One Flew Over the Cuckoo's Nest",
        genre: "Drama",
        releaseYear: 1975,
        rating: 8.7
    },
    {
        id: 19,
        title: "Seven",
        genre: "Crime",
        releaseYear: 1995,
        rating: 8.6
    },
    {
        id: 20,
        title: "Seven Samurai",
        genre: "Action",
        releaseYear: 1954,
        rating: 8.6
    },
    {
        id: 21,
        title: "It's a Wonderful Life",
        genre: "Drama",
        releaseYear: 1946,
        rating: 8.6
    },
    {
        id: 22,
        title: "The Silence of the Lambs",
        genre: "Crime",
        releaseYear: 1991,
        rating: 8.6
    },
    {
        id: 23,
        title: "City of God",
        genre: "Crime",
        releaseYear: 2002,
        rating: 8.6
    },
    {
        id: 24,
        title: "Saving Private Ryan",
        genre: "Drama",
        releaseYear: 1998,
        rating: 8.6
    },
    {
        id: 25,
        title: "Life Is Beautiful",
        genre: "Comedy",
        releaseYear: 1997,
        rating: 8.6
    },
    {
        id: 26,
        title: "The Green Mile",
        genre: "Crime",
        releaseYear: 1999,
        rating: 8.6
    },
    {
        id: 27,
        title: "Interstellar",
        genre: "Sci-Fi",
        releaseYear: 2014,
        rating: 8.6
    },
    {
        id: 28,
        title: "Star Wars: Episode IV - A New Hope",
        genre: "Action",
        releaseYear: 1977,
        rating: 8.6
    },
    {
        id: 29,
        title: "Terminator 2: Judgment Day",
        genre: "Action",
        releaseYear: 1991,
        rating: 8.6
    },
    {
        id: 30,
        title: "Back to the Future",
        genre: "Adventure",
        releaseYear: 1985,
        rating: 8.5
    },
    {
        id: 31,
        title: "Spirited Away",
        genre: "Animation",
        releaseYear: 2001,
        rating: 8.6
    },
    {
        id: 32,
        title: "Psycho",
        genre: "Horror",
        releaseYear: 1960,
        rating: 8.5
    },
    {
        id: 33,
        title: "The Pianist",
        genre: "Biography",
        releaseYear: 2002,
        rating: 8.5
    },
    {
        id: 34,
        title: "Parasite",
        genre: "Drama",
        releaseYear: 2019,
        rating: 8.5
    },
    {
        id: 35,
        title: "Leon: The Professional",
        genre: "Action",
        releaseYear: 1994,
        rating: 8.5
    },
    {
        id: 36,
        title: "The Lion King",
        genre: "Animation",
        releaseYear: 1994,
        rating: 8.5
    },
    {
        id: 37,
        title: "Gladiator",
        genre: "Action",
        releaseYear: 2000,
        rating: 8.5
    },
    {
        id: 38,
        title: "American History X",
        genre: "Drama",
        releaseYear: 1998,
        rating: 8.5
    },
    {
        id: 39,
        title: "The Departed",
        genre: "Crime",
        releaseYear: 2006,
        rating: 8.5
    },
    {
        id: 40,
        title: "The Prestige",
        genre: "Drama",
        releaseYear: 2006,
        rating: 8.5
    },
    {
        id: 41,
        title: "Whiplash",
        genre: "Drama",
        releaseYear: 2014,
        rating: 8.5
    },
    {
        id: 42,
        title: "The Usual Suspects",
        genre: "Crime",
        releaseYear: 1995,
        rating: 8.5
    },
    {
        id: 43,
        title: "Casablanca",
        genre: "Drama",
        releaseYear: 1942,
        rating: 8.5
    },
    {
        id: 44,
        title: "The Intouchables",
        genre: "Biography",
        releaseYear: 2011,
        rating: 8.5
    },
    {
        id: 45,
        title: "Modern Times",
        genre: "Comedy",
        releaseYear: 1936,
        rating: 8.5
    },
    {
        id: 46,
        title: "Grave of the Fireflies",
        genre: "Animation",
        releaseYear: 1988,
        rating: 8.5
    },
    {
        id: 47,
        title: "Cinema Paradiso",
        genre: "Drama",
        releaseYear: 1988,
        rating: 8.5
    },
    {
        id: 48,
        title: "Interstellar",
        genre: "Sci-Fi",
        releaseYear: 2014,
        rating: 8.6
    }
];

module.exports = movies;
