import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Movies.css'; 






const Movies = () => {
    const [title, setTitle] = useState('')
    const [movies, setMovies] = useState([])

    let handleChange = (event) => {
        setTitle(event.target.value)
    }
    let handleSubmit = async () => {

        let response = await axios.get(`https://www.omdbapi.com/?s=${title}&apikey=a5ef1268`)
    console.log(response.data.Search);
    setMovies(response.data.Search)
    }
    return (
        <div className="movies-container">
          <h1 className="movies-title">Search Movies</h1>
          <div className="movies-search">
            <input
              type="text"
              placeholder="Enter movie title"
              value={title}
              onChange={handleChange}
              className="movies-input"
            />
            <button onClick={handleSubmit} className="movies-button">
              Search
            </button>
          </div>
          <div className="movies-list">
            {movies.map((item) => (
              <div key={item.imdbID} className="movie-card">
                <Link to={`/detail/${item.imdbID}`}>
                <div className='box hover'>
                 <img src={item.Poster} alt={item.Title} className="movie-poster" />
                 </div>
                </Link>
                <h2 className="movie-title">{item.Title}</h2>
                <h3 className="movie-year">{item.Year}</h3>
              </div>
            ))}
          </div>
        </div>
      );
    };
    
    export default Movies;