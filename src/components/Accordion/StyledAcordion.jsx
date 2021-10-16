import styled from "styled-components";


export const StyledAcordion = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    height: auto;
    text-align: center;
    background: #323232;
    margin-bottom: 10px;
    width: 70%;
`
export const StyledInternal = styled.div`
    width: 95%;
    max-height: ${(props) => (props.open ? '400px' : '0')};
    transition: all 0.8s ease-in-out;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    div {
        display: flex;
        justify-content: space-between;
    }

    .movieTitle, .moviePrice, .totalPrice {
        font-size: 30px;
        margin: 15px 0;
    }
`