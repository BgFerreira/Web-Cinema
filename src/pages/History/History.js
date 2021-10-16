import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../context/Context";

import Navbar from "../../components/Navbar/Navbar";
import { Dashboard } from "../../components/Cards/Home/MovieStyled";

export default function History() {

    const { addMovieOnHistory } = useContext(MyContext);

    if (true) {
        return (
            <div>
                <Navbar />
                <Dashboard>
                    <h3 style={{ fontSize: "28px" }}>You didn't make any order</h3>
                </Dashboard>
            </div>
        )
    }

    return (
        <div>
            <Navbar />
            <Dashboard>

            </Dashboard>
        </div>
    )
}