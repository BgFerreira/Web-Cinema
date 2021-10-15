import React from "react";
import { StyledFooter } from "./Styled.InitialBox";

export default function Footer(props) {
    return (
        <StyledFooter {...props}> {props.children} </StyledFooter>
    )
}