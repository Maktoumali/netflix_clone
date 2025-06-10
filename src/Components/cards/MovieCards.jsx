import React, { useEffect, useState } from 'react'
import './MovieCards.css'
import axios from 'axios'
const MovieCards = ({ catagory, genre }) => {
    const [movie, setMovie] = useState([])
    const [isHovered, setIshovered] = useState(false)

    useEffect(() => {
        const timeOut = setTimeout(() => {
            axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=25f9829bfa6ae5d71e68506b7eb94ab5&with_genres=${genre}`)
                .then(response => setMovie(response.data.results))
        }, 1000)

        return ()=> clearTimeout(timeOut)
    }, [genre])
    console.log(movie)
    return (
        <div className='movie-title'>
            <div className='movie-catagory-heading'>
                <h1>{catagory}</h1>
            </div>
            <div className='main-movie-cards'>
                {movie.map((item) => (
                    <>
                        <div className='movie-cards' key={item.id}>
                            <div className='movie-image-container'>
                                <img src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt="This is an image" className='movie-image' />

                                <div className='movie-overlay'>
                                    <h3>{item.title}</h3>
                                    <p>⭐ {item.vote_average}</p>
                                </div>
                            </div>
                        </div>
                    </>
                ))}



            </div>
        </div>
    )
}

export default MovieCards