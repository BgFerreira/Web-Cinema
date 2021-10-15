import React from "react";

import img from "../../../images/popcorn.png";
import { StyledCard } from "../Home/MovieStyled";

export default function CategorieCard(props) {
    const OpenList = (categorieId) => {
        props.onClick(categorieId);
    }

    return (
        <StyledCard>
            <img src={img} style={{"width": "240px", "objectFit": "cover", "marginBottom": "40px"}} onClick={() => {OpenList(props.id)}} />
            <h3 style={{"fontSize": "1.5vw"}} onClick={() => {OpenList(props.id)}}>{props.children}</h3>
        </StyledCard>
    )
}