import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from "react-router-dom"
import axios from 'axios';
import { MyContext } from "../../context/Context";

import Navbar from '../../components/Navbar/Navbar';
import { Dashboard, Line } from '../../components/Cards/Home/MovieStyled';
import MovieHome from '../../components/Cards/Home/Movie.jsx';

const key = "7327c1b63aa965038ebcc256ed2730d1";


async function GetPopularMovies() {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`);
    return response.data.results;
}

export default function Home() {
    const history = useHistory();
    const { setAddMovie } = useContext(MyContext)
    const [movies, setMovies] = useState();

    const goMovieDetails = (idMovie) => {
        history.push(`/movie/${idMovie}`);
    }

    useEffect(() => {
        (async () => {
            setMovies(await GetPopularMovies());
        })();
    }, []);

    return (
        <div>
            <Navbar />
            <Dashboard>
                {!movies ? <></> :
                    (<>
                        {movies.map((element, index) => {
                            return (
                                <MovieHome key={index} movie={element} onclick={goMovieDetails} addMovie={setAddMovie} />
                            )
                        })
                        }
                    </>)
                }
            </Dashboard>
        </div>
    )
}