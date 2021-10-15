import styled from "styled-components";

export const BackgroundImg = styled.img`
    object-fit: cover;
    box-shadow: 12px 12px 12px #111;
`
export const InfoDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 50%;
    background: #323232;
    border-radius: 15px;
    padding: 20px;

    h2 {
        font-size: 2.5vw;
        padding: 20px 0;
    }

    p {
        font-size: 1.1vw;
        padding: 20px 0;
    }
`