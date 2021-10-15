import React, { useState } from "react";


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
        setAuthenticated(true);
    };


    // =========================================== LOGOUT =====================================================

    const myLogout = async () => {
        setUser({ email: "", password: "" });
        setMovieOnCart([]);
        setMovieOnHistory([]);
        setAuthenticated(false);
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
        const timestamp = Date.now();

        let valor = 0;
        CartMovie.forEach(element => {
            valor += Number(parseFloat(element.vote_average) * 10);
        });

        history.push({
            order: timestamp,
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
                myLogout,
                user,
                authenticated,
                setAuthenticated,
            }}
        >
            {children}
        </MyContext.Provider>
    );
};