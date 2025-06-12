import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from 'axios';
import { Carousel } from 'antd';

const Banner = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/discover/movie?api_key=25f9829bfa6ae5d71e68506b7eb94ab5&with_genres=28')
      .then(response => {
        const validMovies = response.data.results.filter(movie => movie?.backdrop_path);
        setMovies(validMovies);
      })
      .catch(err => {
        setError('Failed to load movies.');
      });
  }, []);

  if (error) return <div>{error}</div>;
  if (movies.length < 3) return null;

  return (
    <div className="main-banner">
      <Carousel autoplay autoplaySpeed={3000}>
        {movies.slice(0, 3).map((item, index) => {
          const imageUrl = `https://image.tmdb.org/t/p/original${item.backdrop_path}`;
          return (
            <div key={index}>
              <div
                className="slide-image"
                style={{ backgroundImage: `url(${imageUrl})` }}
              >
                <div className="banner-content">
                  <h1>{item.title}</h1>
                  <div className="button-container">
                    <button>Play</button>
                    <button style={{ background: '#E50914', border: 'none', color: 'white' }}>My List</button>
                  </div>
                  <h3>{item.overview}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
      <div className="fade_bottom"></div>
    </div>
  );
};

export default Banner;
