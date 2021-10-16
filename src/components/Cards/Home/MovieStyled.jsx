import styled from "styled-components";
import starRate from "../../../images/starRate.png"

export const Dashboard = styled.div`
    display: flex;
    width: 100%;
    height: inherit;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 40px;
    margin-bottom: 50px;

    h1 {
        font-size: 24px;
    }
`

export const InverseDashboard = styled.div`
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    height: inherit;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 40px;
    margin-bottom: 50px;

    h1 {
        font-size: 24px;
    }
`

export const StyledCard = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: #323232;
    border-radius: 15px;
    heigth: 500px;
    cursor:pointer;
    padding: 15px;
    width: 250px;

    :hover {
        transform: scale(1.05);
        box-shadow: 0 0 10px #cc2200;
    }
`
export const Poster = styled.img`
    object-fit: cover;
    border-radius: 15px;
    margin-bottom: 20px
`
export const CardFooter = styled.div`
    width: 100%;
    height: 74px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    font-size: 18px;

    p {
        font-size: 16px
    }
`
export const StarRate = styled.div`

    display: flex;
    position: absolute;
    top: -30px;
    left: calc(100% - 40px);
    background: url(${starRate});
    width: 80px;
    height: 80px;
    background-size: cover;
    background-repeat: no-repeat;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    font-weight: bold;
    color: #161616
`
export const Line = styled.div`
    height: 1px;
    width: 95%;
    background: #eee;
    margin-bottom: 20px;
`