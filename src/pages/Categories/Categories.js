import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router";

import Navbar from "../../components/Navbar/Navbar.jsx";
import { Dashboard } from "../../components/Cards/Home/MovieStyled.jsx";
import CategorieCard from "../../components/Cards/Categories/CategoriesCard.jsx";

const key = "7327c1b63aa965038ebcc256ed2730d1";

const getCategories = async() => {
    const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`);
    return response.data.genres;
}

export default function Categories() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        (async () => {
            setCategories(await getCategories());
        })();
    },[])

    const history = useHistory();

    const goMovies = (genre) => {
        history.push(`/categories/${genre}`)
    }

    return (
        <div>
            <Navbar />
            <Dashboard>
                {categories.map((element) => {
                    return (
                        <CategorieCard onClick={() => goMovies(element.id)} id={element.id} key={element.name} categorie={element.name}>
                            <p>{element.name}</p>
                        </CategorieCard>
                    )
                })}
            </Dashboard>
        </div>
    )
}