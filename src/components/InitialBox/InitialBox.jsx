import React from "react";
import { InitialBox } from "./Styled.InitialBox";

export default function Box(props) {
    return (
        <InitialBox {...props}> {props.children} </InitialBox>
    )
}