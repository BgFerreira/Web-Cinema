import react from "react";

import { BackgroundImg, InfoDiv } from "./StyledDetailsCard";
import { Flex } from "../../Display/Display.jsx";
import { Dashboard, StarRate } from "../Home/MovieStyled";
import Button from "../../Button/Button.jsx";

const imgURL = "https://image.tmdb.org/t/p/w300";

export default function DetailsCard(props) {
    const movie = props.movie;
    const genres = movie.genres;

    const names = genres ? genres.map((element) => element.name) : [];

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
                    <Button onClick={() => { addMovie(movie) }}>ADD TO CART</Button>
                </InfoDiv>
            </Flex>
        </div>
    )
}