import styled from "styled-components";


export const StyledAcordion = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    height: auto;
    text-align: center;
    background: #323232;
    margin-bottom: 10px;
`
export const StyledInternal = styled.div`
    width: 90%;
    max-height: ${(props) => (props.open ? '400px' : '0')};
    transition: all 0.8s ease-in-out;
    overflow: hidden;
`