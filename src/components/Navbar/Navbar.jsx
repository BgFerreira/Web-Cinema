import React from "react";
import { useHistory } from "react-router-dom";
import { StyledNavbar } from "./styledNavbar";
import { NavItem } from "./styledNavbar";

export default function Navbar() {
    const history = useHistory();
    
    function changePage(url) {
        history.push(`${url}`);
    }

    return (
     <StyledNavbar>
          <NavItem onClick={()=> changePage("/home")}>HOME</NavItem>
          <NavItem onClick={()=> changePage("/categories")}>CATEGORIES</NavItem>
          <NavItem onClick={()=> changePage("/cart")}>CART</NavItem>
          <NavItem onClick={()=> changePage("/history")}>HISTORY</NavItem>
          <NavItem onClick={()=> changePage("/login")}>LOGOUT</NavItem>
     </StyledNavbar>
    )
}