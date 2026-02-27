import "./App.css";
import { useState, useEffect } from "react";
import { moviesData } from "./moviesData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./components/movieList/MovieList";
import MovieDetails from "./components/movieDetails/MovieDetails";
import Navbar from "./components/navbar/Navbar";
import Carousels from "./components/carousels/Carousels";
import MovieAdd from "./components/addMovie/AddMovie";
import FilterByTitle from "./components/filterTitle/FilterByTitle";
import FilterByRate from "./components/filterByRate/FilterByRate";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRate, setSearchRate] = useState(1);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MovieAdd setMovies={setMovies} />
                <Carousels />
                <h1 style={{ color: "black" }}>Movie App</h1>

                <FilterByTitle
                  searchTitle={searchTitle}
                  setSearchTitle={setSearchTitle}
                />
                <FilterByRate onRateChange={setSearchRate} />
                <MovieList
                  movies={movies}
                  searchTitle={searchTitle}
                  searchRate={searchRate}
                />
              </>
            }
          />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
