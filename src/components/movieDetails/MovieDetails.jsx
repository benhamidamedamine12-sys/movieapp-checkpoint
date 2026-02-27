import "./MovieDetails.css";
import { useParams, useNavigate } from "react-router-dom";
import { moviesData } from "../../moviesData";
import Button from "react-bootstrap/Button";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = moviesData.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <h2>Film non trouvé</h2>;
  }

  // Convertir YouTube link en embed URL
  const getEmbedUrl = (trailerUrl) => {
    if (trailerUrl.includes("youtu.be")) {
      const videoId = trailerUrl.split("youtu.be/")[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return trailerUrl;
  };

  return (
    <div className="movie-details-container">
      <div className="movie-details">
        <div className="trailer-section">
          <h1>{movie.title}</h1>
          <iframe
            width="100%"
            height="500"
            src={getEmbedUrl(movie.trailer)}
            title="Movie Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="description-section">
          <h2>Description</h2>
          <p>{movie.description}</p>
          <p className="rating">
            <strong>Note :</strong> {movie.rate}/10
          </p>
          <img src={movie.posterUrl} alt={movie.title} className="poster-img" />
        </div>

        <Button
          variant="secondary"
          onClick={() => navigate("/")}
          className="back-button"
        >
          Retour à l'accueil
        </Button>
      </div>
    </div>
  );
};

export default MovieDetails;
