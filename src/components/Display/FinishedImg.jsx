import styled from "styled-components";
import img from "../../images/popcorn.png";

const StylingImg = styled.img`
    width: 50%;
    object-fit: cover;
    margin-bottom: 40px;
`
const StylingDiv = styled.div`
    position: absolute;
    top: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        font-size: 32px;
    }
`
export default function FinishedImg(props) {
    return (
        <StylingDiv>
            <StylingImg src={img}/>
            <h2>Thank you to watch with us!</h2>
        </StylingDiv>        
    )
} 