import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { AuthContext } from "../context/AuthContext";

import { toastWarnNotify } from "../helpers/ToastNotify";

const Main = () => {
  const { currentUser } = useContext(AuthContext);
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState("");
  const navigate=useNavigate()

  const API_KEY = "32e2256d77263eb3dc613bfabcba82d8";

  const videoUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
  const searchUrl = ` https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`;

  const getMovie = async () => {
    try {
      const { data } = await axios(videoUrl);
      //   console.log(data.results);
      setMovie(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getSearch = async () => {
    try {
      const { data } = await axios(searchUrl);
      console.log("data :>> ", data);
      setMovie(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser &&  search  ) {
      getSearch();
    } else if (!currentUser) {
      toastWarnNotify("Please Login");
      
      setTimeout(() => {
        navigate("/login")
        
      }, 3000);
    } else {
      toastWarnNotify("Please Enter a Text");
    }
  };

  useEffect(() => {
    getMovie();
  }, []);
  // console.log(movie);

  return (
    <div
      style={{
        height: "5rem",
        marginBottom: "3rem",
      }}
    >
      <nav className="navbar bg-dark  ">
        <div
          className="container-fluid"
          style={{
            width: "300px",
          }}
        >
          <form onSubmit={handleSubmit} className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-outline-danger" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <div className="d-flex flex-wrap justify-content-center  ">
        {movie.map((item, id) => {
          return (
            <div
              key={id}
              className=" d-flex flex-wrap justify-content-center  "
            >
              <MovieCard key={id} item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
