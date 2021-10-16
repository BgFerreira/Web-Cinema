import React, { useState } from "react";
import { StyledAcordion, StyledInternal } from "./StyledAcordion";
import { AcordionButton } from "../Button/Button";

export default function Acordion(props) {
    const [ open, setOpen ] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    }

    const acordionTitle = props.AcordionTitle

    return (
        
        <StyledAcordion>
             <AcordionButton onClick={handleClick}>{acordionTitle}</AcordionButton>
            <StyledInternal open={open}>
                {props.children}
            </StyledInternal>
        </StyledAcordion>
    )
}