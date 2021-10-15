import React, { Children, useState } from "react";
import { StyledAcordion, StyledInternal } from "./StyledAcordion";
import { AcordionButton } from "../Button/Button";

export default function Acordion(props) {
    const [ open, setOpen ] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    }

    return (
        
        <StyledAcordion>
             <AcordionButton onClick={handleClick}/>
            <StyledInternal open={open}>
                {props.children}
            </StyledInternal>
        </StyledAcordion>
    )
}