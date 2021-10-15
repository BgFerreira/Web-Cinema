import { useContext, useEffect, useState } from "react";

import { MyContext } from "../../../context/Context";
import { StyledCard, Poster, CardFooter, StarRate } from "./MovieStyled";

const imgURL = "https://image.tmdb.org/t/p/w200";

export default function MovieHome(props) {
    
    const movie = props.movie;
    
    const goDetails = () => {
        props.onclick(movie.id);
    }

    return (
        <StyledCard>
            <Poster onClick={goDetails} src={`${imgURL}${movie.poster_path}`} />
            <StarRate onClick={goDetails}>{movie.vote_average}</StarRate>
            <CardFooter onClick={goDetails}>
            <h3>{movie.title}</h3>
            <p>${Number(movie.vote_average)*10},00</p>
            </CardFooter>
        </StyledCard>
    )
}