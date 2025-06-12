import React, { useEffect, useState } from 'react'
import './MovieCards.css'
import { Api_key } from '../../urls'
import axios from 'axios'
import Youtube from 'react-youtube'
const MovieCards = ({ catagory, genre }) => {
    const [movie, setMovie] = useState([])
    const [trailer, setTailer] = useState('')
    useEffect(() => {
        const timeOut = setTimeout(() => {
            axios.get(`https://api.themoviedb.org/${genre}`)
                .then(response => setMovie(response.data.results))
        }, 1000)

        return () => clearTimeout(timeOut)
    }, [genre])

    function handleMovie(id) {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${Api_key}&language=en-US`)
            .then((response) => {
                if (response.data.results.length !== 0) {
                    setTailer(response.data.results[0])
                }
                else {
                    console.log('No trailer Found')
                }
            })
    }

    const opts = {
        width: '100%',
        height: '200px',
        playerVars: {
            autoplay: 1,
        }
    }


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

                                <div className='movie-overlay' onClick={() => handleMovie(item.id)}>
                                    <h3>{item.title ? item.title : item.name}</h3>
                                    <p>⭐ {item.vote_average}</p>
                                </div>
                            </div>
                        </div>
                    </>
                ))}



            </div>

            {trailer && <Youtube opts={opts} videoId={trailer.id} />}
        </div>
    )
}

export default MovieCards