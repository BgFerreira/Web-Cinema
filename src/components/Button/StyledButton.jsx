import styled from "styled-components";

export const ButtonDefault = styled.button`
    width: 300px;
    height: 60px;
    cursor: pointer;
    background-color: ${(props => (props.added ? "#22cc00": "#cc2200"))};
    color: #111111;
    font-size: 1.3rem;
    font-weight: bold;
    border: none;
    border-radius: 100px;

    :hover {
        background-color: ${(props => (props.added ? "#11bb00": "#bb1100"))};
        transform: scale(1.05);
        box-shadow: 0 0 3px #ccc
    }
`

export const StyledTrashButton = styled.button`
    position: absolute;
    top:70%;
    left:80%;
    width: 80px;
    height: 80px;
    cursor: pointer;
    background-color: #cc2200;
    border: none;
    border-radius: 15px;


    &:hover {
        background-color: #bb1100;
        transform: scale(1.05);
        box-shadow: 0 0 3px #ccc
    }

    img {
        width: 60px
    }
`

export const StyledAcordionButton = styled.div`
    display: flex;
    align-items: center;
    width: 98%;
    height: 40px;
    cursor: pointer;
    background-color: #cc2200;
    color: #111111;
    font-size: 1.3rem;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    padding: 10px;

    &:hover {
        background-color: #bb1100;
        box-shadow: 0 0 3px #ccc
    }
`