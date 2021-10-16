import { useEffect, useState, useContext } from "react";
import { useParams, } from "react-router-dom";
import axios from "axios";
import { MyContext } from "../../context/Context";

import DetailsCard from "../../components/Cards/Details/DetailsCard";
import { Loader } from "../../components/Loader/Loader";
import { Dashboard } from "../../components/Cards/Home/MovieStyled";
import Navbar from "../../components/Navbar/Navbar.jsx"

const key = "7327c1b63aa965038ebcc256ed2730d1";

const getMovie = async (movieId) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`);
        return response.data;
    } catch {
        return false;
    }
}

const getCredit = async (movieId) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=en-US`);
        return response.data;
    } catch {
        return false;
    }
}

export default function Details() {

    const { CartMovie, setAddMovie} = useContext(MyContext);
    const [movie, setMovie] = useState();
    const [credit, setCredit] = useState();
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        (async () => {
            setMovie(await getMovie(id));
            setCredit(await getCredit(id));
        })()
    }, []);

    if(movie === undefined) {
        return (
            <Dashboard>
                <Loader />
            </Dashboard>
        )
    }

    return (
        <div>
            <Navbar />
            <Dashboard>
                <DetailsCard addMovie={setAddMovie} movie={movie} />
            </Dashboard>
            
        </div>
    )
}