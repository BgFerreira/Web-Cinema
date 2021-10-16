import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../../context/Context";

import { BackgroundImg, InfoDiv } from "./StyledDetailsCard";
import { Flex } from "../../Display/Display.jsx";
import { StarRate } from "../Home/MovieStyled";
import Button from "../../Button/Button.jsx";


const imgURL = "https://image.tmdb.org/t/p/w300";

export default function DetailsCard(props) {
    const movie = props.movie;
    const genres = movie.genres;

    const {CartMovie} = useContext(MyContext);
    const names = genres ? genres.map((element) => element.name) : [];
    const [added, setAdded] = useState(false);
    const [buttonMessage, setButtonMessage] = useState("ADD TO CART")

    useEffect(() => {
        (async () => {
            setAdded(() => {
                if (CartMovie.find((film) => film.id === movie.id)) {
                    return true;
                } else {
                    return false;
                }
            })

            setButtonMessage(() => {
                if (CartMovie.find((film) => film.id === movie.id)) {
                    return "ON CART";
                } else {
                    return "ADD TO CART";
                }
            })
        })()
    }, [CartMovie]);

    const addMovie = (data) => {
        props.addMovie(data);
    }

    return (
        <div>
            <Flex>
                <BackgroundImg src={`${imgURL}${movie.poster_path}`} />
                <InfoDiv>
                    <h2>{movie.title}</h2>
                    <p>Relesed in: {movie.release_date}</p>
                    <p>Genre: {names.join(["/ "])}</p>
                    <p>{movie.overview}</p>
                    <p>Duration: {movie.runtime} minutes</p>
                    <StarRate>{movie.vote_average}</StarRate>
                    <Button onClick={() => { addMovie(movie) }} added={added}>{buttonMessage}</Button>
                </InfoDiv>
            </Flex>
        </div>
    )
}