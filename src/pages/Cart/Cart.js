import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { MyContext } from "../../context/Context";

import Navbar from "../../components/Navbar/Navbar";
import { Dashboard } from "../../components/Cards/Home/MovieStyled";
import CartCard from "../../components/Cards/Cart/Cart";
import Button from "../../components/Button/Button";
import Acordion from "../../components/Accordion/Acordion";

export default function Cart() {
    const { CartMovie, setAddMovie, setRemoveMovie, setAddHistory, addMovieOnHistory, setCleanMovie } = useContext(MyContext);
    const [total, setTotal] = useState(0);
    const history = useHistory();

    const removeMovie = (movie) => setRemoveMovie(movie);

    useEffect(() => {
        setTotal(() => {
            let valor = 0;
            CartMovie.forEach(element => {
                valor = parseFloat((((element.vote_average) * 5 + 10) + valor).toFixed(2));
            });
            return valor;
        })
    }, [CartMovie]);

    if (total == 0) {
        return (
            <div>
                <Navbar />
                <Dashboard>
                    <h3 style={{ fontSize: "26px" }}>There is no movie in your Cart</h3>
                </Dashboard>
            </div>
        )
    }

    return (
        <div>
            <Navbar />
            <Dashboard>
                <Button onClick={addMovieOnHistory}> BUY </Button>
                {
                    CartMovie.map((element) => {
                        return (
                            <Dashboard>
                                <CartCard key={element.id} removeMovie={removeMovie} movie={element} />
                            </Dashboard>
                        )
                    })
                }
            </Dashboard>
        </div>
    )
}