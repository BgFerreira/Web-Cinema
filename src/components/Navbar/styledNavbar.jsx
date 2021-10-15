import styled from "styled-components";

export const StyledNavbar = styled.div`
    position: sticky;
    z-index: 1;
    top: 0;
    background-color: #232323;
    display: flex;
    justify-content: space-evenly;
    height: 80px;
    width: 100%;
    color: #eeeeee;
    font-size: 24px ;
    font-weight: bold;
    align-items: center;
    margin-bottom: 50px;
`
export const NavItem = styled.p`
    cursor: pointer;

    :hover {
        color: #cc2200;
    }
`