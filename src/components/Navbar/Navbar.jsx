import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { StyledNavbar } from "./styledNavbar";
import { NavItem } from "./styledNavbar";
import { MyContext } from "../../context/Context";

export default function Navbar() {
    const history = useHistory();
    const { myLogout } = useContext(MyContext);
    
    function changePage(url) {
        history.push(`${url}`);
    }

    const logout = async() => {
        await myLogout();
        history.push("/login");
    }

    return (
     <StyledNavbar>
          <NavItem onClick={()=> changePage("/home")}>HOME</NavItem>
          <NavItem onClick={()=> changePage("/categories")}>CATEGORIES</NavItem>
          <NavItem onClick={()=> changePage("/cart")}>CART</NavItem>
          <NavItem onClick={()=> changePage("/history")}>HISTORY</NavItem>
          <NavItem onClick={()=> logout()}>LOGOUT</NavItem>
     </StyledNavbar>
    )
}