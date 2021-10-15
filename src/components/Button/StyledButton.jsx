import styled from "styled-components";

export const ButtonDefault = styled.button`
    width: 300px;
    height: 60px;
    cursor: pointer;
    background-color: #992200;
    color: #111111;
    font-size: 1.3rem;
    font-weight: bold;
    border: none;
    border-radius: 100px;

    &:hover {
        background-color: #881100;
        transform: scale(1.05);
        box-shadow: 0 0 3px #ccc
    }
`

export const StyledTrashButton = styled.button`
    position: absolute;
    top:70%;
    left:86%;
    width: 80px;
    height: 80px;
    cursor: pointer;
    background-color: #992200;
    color: #111111;
    font-size: 1.3rem;
    font-weight: bold;
    border: none;
    border-radius: 15px;


    &:hover {
        background-color: #881100;
        transform: scale(1.05);
        box-shadow: 0 0 3px #ccc
    }

    img {
        width: 60px
    }
`

export const StyledAcordionButton = styled.button`
    width: 100%;
    height: 40px;
    cursor: pointer;
    background-color: #992200;
    color: #111111;
    font-size: 1.3rem;
    font-weight: bold;
    border: none;
    border-radius: 10px;

    &:hover {
        background-color: #881100;
        box-shadow: 0 0 3px #ccc
    }
`