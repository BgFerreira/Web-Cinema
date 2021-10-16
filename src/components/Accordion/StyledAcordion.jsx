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
    max-height: ${(props) => (props.open ? '9999px' : '0')};
    transition: all 0.4s ease-in-out;
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

export const Feedback = styled.div`
    display: ${(props) => (props.added ? 'flex' : 'none')}
`