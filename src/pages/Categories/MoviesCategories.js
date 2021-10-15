import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { MyContext } from "../../context/Context";

import { Dashboard } from "../../components/Cards/Home/MovieStyled";
import { Loader } from "../../components/Loader/Loader";
import Navbar from "../../components/Navbar/Navbar";
import MovieHome from "../../components/Cards/Home/Movie";

import img from "../../images/loading.gif";

const key = "f93417762b0d5f1e87448cbe259e5b31";

const getMovies = async (genreId) => {
    const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}&with_watch_monetization_types=flatrate`);
    return response.data.results
}

export default function MoviesCategories() {

    const { setAddMovie } = useContext(MyContext)
    const [listMovies, setMoviesList] = useState();
    const history = useHistory();
    const categoriesName = useParams();
    const name = categoriesName.name;
    
    const goToSingleMovie = (idMovie) => {
        history.push(`/movie/${idMovie}`)
    }

    useEffect(() => {
        (async () => {
            setMoviesList(await getMovies(name));
        })();
    }, []);


    if (!listMovies) {
        return (
            <Dashboard>
                <Loader src={img} />
            </Dashboard>
        )
    }

    return (
        <div>
            <Navbar />
            <Dashboard>
            {
                    listMovies.map((element, index) => {
                        return (
                            <MovieHome addMovie={setAddMovie} key={index} movie={element} onclick={goToSingleMovie} />
                        )
                    })
                }
            </Dashboard>
        </div>
    )
}