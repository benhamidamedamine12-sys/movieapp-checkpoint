import MovieCard from "../movieCard/MovieCard";
import "./MovieList.css";

const MovieList = ({ movies, searchTitle, searchRate }) => {
  return (
    <div className="movie-list">
      {/* le filtre pour la recherche par titre et par rate  */}
      {movies
        .filter((movie) =>
          movie.title.toUpperCase().includes(searchTitle.toUpperCase()),
        )
        .filter((movie) => movie.rate >= searchRate)
        // l'affichage des films après les filtres
        .map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
    </div>
  );
};

export default MovieList;
