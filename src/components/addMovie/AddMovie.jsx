import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./AddMovie.css";
import Form from "react-bootstrap/Form";

function Example({ setMovies }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [rate, setRate] = useState(1);
  const [title, setTitle] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [description, setDescription] = useState("");
  const [trailerURL, setTrailerURL] = useState("");

  const hundleSubmit = (e) => {
    e.preventDefault();
    add_movie({
      title,
      posterURL,
      description,
      rate,
      trailerURL,
    });
    setTitle("");
    setPosterURL("");
    setDescription("");
    setRate(1);
    setTrailerURL("");
    handleClose();
  };
  const add_movie = (newMovie) => {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
    console.log(newMovie);
  };

  return (
    <>
      <Button
        className="button-addmovie"
        variant="primary"
        onClick={handleShow}
      >
        Add Movie
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter movie title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {/* ---------------posterURL--------------- */}
          <Form.Label>Poster URL</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter movie poster URL"
            value={posterURL}
            onChange={(e) => setPosterURL(e.target.value)}
          />
          {/* ---------------description--------------- */}
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter movie description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {/* ---------------rate--------------- */}
          <Form.Label>Rate</Form.Label>
          <Form.Control
            type="number"
            max={5}
            min={1}
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="Enter movie rate"
          />
          {/* ---------------trailerURL--------------- */}
          <Form.Label>Trailer URL</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter movie trailer URL"
            value={trailerURL}
            onChange={(e) => setTrailerURL(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            disabled={
              !title.trim() ||
              !posterURL.trim() ||
              !description.trim() ||
              !trailerURL.trim()
            }
            variant="primary"
            onClick={hundleSubmit}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
