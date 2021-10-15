import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
`

export const StyledInput = styled.input`
    background: #eeeeee;
    border-radius: 20px;
    width: 700px;
    height: 40px;
    border: solid 2px #090909;
    color: #111;
    padding: 0 10px;
    font-size: 18px;
`

export const ErrorSpan = styled.span`
    position: relative;
    top: 15px;
    font-size: 18px;
    color: #ee4422;
`