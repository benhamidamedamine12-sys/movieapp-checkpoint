import "./MovieCard.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Card style={{ width: "18rem", height: "50rem" }}>
        <Card.Img variant="top" src={movie.posterUrl} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Card.Text className="Rate">Rating: {movie.rate}/10</Card.Text>
          <Link to={`/movie/${movie.id}`}>
            <Button variant="primary" style={{ width: "100%" }}>
              Watch & Details
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
