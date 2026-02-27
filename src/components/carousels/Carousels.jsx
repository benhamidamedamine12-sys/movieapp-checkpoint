import Carousel from "react-bootstrap/Carousel";
import "./Carousels.css";
import image1 from "./../../Images/salle-cinema-du-futur.webp";
import image2 from "./../../Images/autre-image.jpg";
import image3 from "./../../Images/troisieme-image.jpg";

function MovieCarousels() {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img className="carousel-image" src={image1} alt="Cinéma" />
        <Carousel.Caption>
          <h3>Cinéma futuriste</h3>
          <p>Découvrez l'expérience cinéma de demain</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img className="carousel-image" src={image2} alt="Film" />
        <Carousel.Caption>
          <h3>Films primés</h3>
          <p>Les meilleurs films de l'année</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img className="carousel-image" src={image3} alt="Salle" />
        <Carousel.Caption>
          <h3>Confort optimal</h3>
          <p>Des sièges confortables pour une expérience unique</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MovieCarousels;
