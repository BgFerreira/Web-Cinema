import { ButtonDefault, StyledTrashButton } from "./StyledButton.jsx";
import img from "../../images/trash.png"

export default function Button(props) {
    return (
        <ButtonDefault {...props}> {props.children} </ButtonDefault>
    )
}

export function TrashButton(props) {
    return (
        <StyledTrashButton {...props}>
            <img src={img} />
        </StyledTrashButton>
    )
}