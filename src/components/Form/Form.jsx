import React from "react";
import { StyledForm } from "./StyledForm";

export default function Formulario(props) {
    return (
        <StyledForm {...props}>
            {props.children}
        </StyledForm>
    )
}