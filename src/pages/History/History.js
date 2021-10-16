import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../context/Context";

import Navbar from "../../components/Navbar/Navbar";
import { Dashboard } from "../../components/Cards/Home/MovieStyled";
import Acordion from "../../components/Accordion/Acordion";

export default function History() {

    const { moviesOnHistory } = useContext(MyContext);

    const getOrderTime = (timestamp) => {
        const orderTime = new Date(timestamp);
        
        const FormatedTime = `
            ${((orderTime.getDate() < 10 ? `0${orderTime.getDate()}` : `${orderTime.getDate()}`))} /
            ${((orderTime.getMonth() + 1 < 10 ? `0${orderTime.getMonth() + 1}` : `${orderTime.getMonth() + 1}`))} /
            ${orderTime.getFullYear()} - 
            ${((orderTime.getHours() < 10 ? `0${orderTime.getUTCHours()}` : `${orderTime.getUTCHours()}`))} :
            ${((orderTime.getMinutes() < 10 ? `0${orderTime.getMinutes()}` : `${orderTime.getMinutes()}`))} :
            ${((orderTime.getSeconds() < 10 ? `0${orderTime.getSeconds()}` : `${orderTime.getSeconds()}`))}
        `
        return FormatedTime;
    }

    if (localStorage.getItem("moviesOnHistory").length == 0) {
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
                {
                    moviesOnHistory.map((element) => {
                        return (
                            <Acordion AcordionTitle={`Order in: ${getOrderTime(element.order)}`}>
                                {
                                    element.movies.map((data) => {
                                        return (
                                           <div>
                                                <span className="movieTitle">{data.title}</span>
                                                <span className="moviePrice">${data.vote_average * 10},00</span>
                                           </div>
                                        )
                                    })
                                }
                                <span className="totalPrice">Total: ${element.total},00</span>
                            </Acordion>
                        )
                    })
                }
            </Dashboard>
        </div>
    )
}