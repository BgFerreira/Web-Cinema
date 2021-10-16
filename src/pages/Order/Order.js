import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Dashboard } from "../../components/Cards/Home/MovieStyled";
import FinishedImg from "../../components/Display/FinishedImg";

export default function Finished() {
    return (
        <div>
            <Navbar />
            <Dashboard>
                    <FinishedImg />
            </Dashboard>
        </div>
    )
}