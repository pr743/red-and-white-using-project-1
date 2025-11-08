import React from "react";
import "./Movie.css";
function Movie() {
  const movies = [
    {
      title: "The Naked Gun",
      year: 2025,
      poster:
        "https://m.media-amazon.com/images/M/MV5BNGFlNDhkNzItZjgxNC00OGYzLWFjZDAtZTJmNDY5ZmEyZDc0XkEyXkFqcGc%40._V1_.jpg",
      rating: "7.0",
    },
    {
      title: "Blue Moon",
      year: 2025,
      poster:
        "https://alchetron.com/cdn/Blue-Moon-2006-film-images-4e80083b-f5a8-4d1a-bc42-4a79ba67356.jpg",
      rating: "4.2",
    },
  ];
  const movie1 = [
    {
      title: "Thug Life",
      year: 2025,
      poster: "https://resizing.flixster.com/BQedJL6xsaWPd4J-_uGSwcFnefE%3D/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2E3MTc1MmY5LTZiMDItNDgwZC05OWY2LWMyNGJlYTc4OTEwZi5qcGc%3D",
      rating: "4.2",
    },
    {
      title: "Karam",
      year: 2025,
      poster:
        "https://m.media-amazon.com/images/M/MV5BMGRlOWEyYjctMDM2OS00ODA1LWFhMzgtN2FkNWRkOGE4YzhiXkEyXkFqcGc%40._V1_.jpg",
      rating: "4.5",
    },
  ];

  const movie2 = [
    {
      title: "Mission: Impossible – The Final Reckoning",
      year: 2025,
      poster:
        "https://m.media-amazon.com/images/M/MV5BZGQ5NGEyYTItMjNiMi00Y2EwLTkzOWItMjc5YjJiMjMyNTI0XkEyXkFqcGc%40._V1_.jpg",
      rating: "4.7",
    },
    {
      title: "Avatar: Fire & Ash",
      year: 2025,
      poster: "https://media.wdwnt.com/2025/09/avatar-fire-ash-poster.jpeg",
      rating: "4.9",
    },
    {
      title: "Superman",
      year: 2025,
      poster:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1f3c5157-f166-4869-b8f1-2668373c12e7/didayxy-868c08b3-2a70-4075-8302-1798265b90a4.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFmM2M1MTU3LWYxNjYtNDg2OS1iOGYxLTI2NjgzNzNjMTJlN1wvZGlkYXl4eS04NjhjMDhiMy0yYTcwLTQwNzUtODMwMi0xNzk4MjY1YjkwYTQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Tzk1GCKgN6BGz0A4MePhGlxjF4oa-tiG_sEx5_wMG6w",
      rating: 4.8,
    },
    {
  title: "Jurassic World: Rebirth",
  year: 2025,
  poster: "https://m.media-amazon.com/images/M/MV5BMGM3ZmI3NzQtNzU5Yi00ZWI1LTg3YTAtNmNmNWIyMWFjZTBkXkEyXkFqcGc%40._V1_.jpg",
  rating: 4.5
}
  ];
  const allMovie = [...movies, ...movie1, ...movie2];

  return (
    <div className="movie-container">
      <h1 className="title"> Movie Collection</h1>
      <div className="movie-grid">
        {allMovie.map((movie, index) => (
          <div key={index} className="movie-card">
            <img src={movie.poster} alt={movie.title} className="poster" />
            <h2>{movie.title}</h2>
            <p>Year:{movie.year}</p>
            <p>Rating:{movie.rating}</p>
            <button className="btn">Watch Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movie;
