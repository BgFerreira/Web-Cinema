import React from "react";
import { Poster } from "../Home/MovieStyled";
import {TrashButton} from "../../Button/Button.jsx";
import { StyledCartCard, DivInfo } from "./CartStyled";

const imgURL = "https://image.tmdb.org/t/p/w200";

export default function CartCard(props) {
    const movie = props.movie;

    const remove = () => {
        props.removeMovie(movie.id)
    }

    return (
        <StyledCartCard>
            <Poster src={`${imgURL}${movie.poster_path}`} />
            <DivInfo>
                <h2>{movie.title}</h2>
                <h3>${Number(movie.vote_average)*10},00</h3>
            </DivInfo>
            <TrashButton onClick={remove} />
        </StyledCartCard>
    )
}