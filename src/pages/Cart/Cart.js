import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { MyContext } from "../../context/Context";

import Navbar from "../../components/Navbar/Navbar";
import { Dashboard } from "../../components/Cards/Home/MovieStyled";
import CartCard from "../../components/Cards/Cart/Cart";
import Button from "../../components/Button/Button";

export default function Cart() {
    const { CartMovie, setRemoveMovie, addMovieOnHistory } = useContext(MyContext);
    const [total, setTotal] = useState(0);
    const history = useHistory();

    const removeMovie = (movie) => setRemoveMovie(movie);

    const buy = () => {

        const timestamp = Date.now();

        const order = {
            order: timestamp,
            movies: CartMovie,
            total: total
        }

        addMovieOnHistory(order);
        history.push("/finished");
    }

    useEffect(() => {
        setTotal(() => {
            let valor = 0;
            CartMovie.forEach(element => {
                valor += Number(parseFloat(element.vote_average) * 10);
            });
            return valor;
        })
    }, [CartMovie]);

    if (total == 0) {
        return (
            <div>
                <Navbar />
                <Dashboard>
                    <h3 style={{ fontSize: "28px" }}>Your cart is empty</h3>
                </Dashboard>
            </div>
        )
    }

    return (
        <div>
            <Navbar />
            <Dashboard>
                <h3 style={{ fontSize: "28px" }}>Total: ${total},00</h3>
                <Button onClick={buy}> BUY </Button>
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