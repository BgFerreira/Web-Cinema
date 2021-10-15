import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../context/Context";

import Navbar from "../../components/Navbar/Navbar";
import { Dashboard } from "../../components/Cards/Home/MovieStyled";

export default function History() {

    const { CartMovie, setRemoveMovie, addMovieOnHistory } = useContext(MyContext);
    const [total, setTotal] = useState(0);
    
    if(false) {
        return
    }
    
    return (
        <div>
            <Navbar />
            <Dashboard>

            </Dashboard>
        </div>
    )
}