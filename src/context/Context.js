import React, { useEffect, useState } from "react";
import { array } from "yup";
import { string } from "yup/lib/locale";
import api from "../services/api"

export const MyContext = React.createContext({
    id: null,
    user: null,
    moviesOnCart: [],
    moviesOnWishList: [],
    moviesOnHistory: []
});

export function MyProvider({ children }) {
    const [authenticated, setAuthenticated] = useState(false);
    const [CartMovie, setMovieOnCart] = useState(localStorage.CartMovie == undefined ? [] : JSON.parse(localStorage.getItem("CartMovie")));
    const [moviesOnHistory, setMovieOnHistory] = useState(localStorage.moviesOnHistory == undefined ? [] : JSON.parse(localStorage.getItem("moviesOnHistory")));
    const [user, setUser] = useState([]);
    
    const myLogin = (data) => { 
        setUser(data);
        console.log(data)
        setAuthenticated(true);
    };


    // =========================================== LOGOUT =====================================================

    const handleLogout = async () => {
        setUser({ email: "", password: "" });
        setMovieOnCart([]);
        setMovieOnHistory([]);
    }

    // =========================================== LOGOUT =====================================================


    // =========================================== CART =====================================================

    const setAddMovie = async (movie) => {
        setMovieOnCart((prevState) => {
            if (prevState.find((film) => film.id === movie.id)) {
                return prevState
            };

            localStorage.setItem("CartMovie", JSON.stringify(prevState.concat(movie)));
            return prevState.concat(movie);
        });
    };


    const setRemoveMovie = (movie) => {
        
        //const id = Number(movie.target.id);
        
        setMovieOnCart((prevState) => {
            const moviesFiltred = prevState.filter((element) => element.id !== movie);
            console.log("Filtro")
            console.log(moviesFiltred)
            localStorage.setItem("CartMovie", JSON.stringify(moviesFiltred));
            return moviesFiltred;
        });
    };

    const setCleanMovie = () => {
        localStorage.setItem("CartMovie", "[]");
        setMovieOnCart([]);
    };


    // =========================================== CART =====================================================


    // =========================================== HISTORY =====================================================

    const setAddHistory = (movie) => {
        if (movie == []) {
            return
        }
        setMovieOnHistory((prevState) => {
            return prevState.concat(movie);
        });

        if (moviesOnHistory.length == 0) {
            return
        }
    };

    const setCleanHistory = (movie) => {
        if (movie == []) {
            return
        }

        setMovieOnHistory([]);

        if (moviesOnHistory.length == 0) {
            return
        }
    }


    const addMovieOnHistory = () => {
        const history = localStorage.moviesOnHistory == undefined ? [] : JSON.parse(localStorage.getItem("moviesOnHistory"));

        let valor = 0;
        CartMovie.forEach(element => {
            valor = ((parseFloat(element.vote_average) * 5 + 10) + valor).toFixed;
        });

        history.push({
            order: Math.random() * 1000000,
            movies: CartMovie,
            total: valor
        })

        localStorage.setItem("moviesOnHistory", JSON.stringify(history));
        localStorage.setItem("CartMovie", "[]");
        setMovieOnCart([]);
    }

    // =========================================== HISTORY =====================================================


    return (
        <MyContext.Provider
            value={{
                CartMovie,
                setAddMovie,
                setRemoveMovie,
                setCleanMovie,

                moviesOnHistory,
                setAddHistory,
                setCleanHistory,
                addMovieOnHistory,

                user: null,

                myLogin,
                user,
                handleLogout,
                authenticated,
                setAuthenticated,
            }}
        >
            {children}
        </MyContext.Provider>
    );
};