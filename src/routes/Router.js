import Login from "../pages/Login/Login.js";
import Home from "../pages/Home/Home.js";
import History from "../pages/History/History.js";
import Details from "../pages/Details/Details.js";
import Categories from "../pages/Categories/Categories.js";
import MoviesCategories from "../pages/Categories/MoviesCategories.js";
import Finished from "../pages/Order/Order.js";
import Cart from "../pages/Cart/Cart.js";

export const routers = [
    {
        name: "categories",
        Component: MoviesCategories,
        path: "/categories/:name",
        isVisible: false,
        isPrivate: true
    },
    {
        name: "details",
        Component: Details,
        path: "/movie/:id",
        isVisible: false,
        isPrivate: true
    },

    {
        name: "finished",
        Component: Finished,
        path: "/finished",
        isVisible: false,
        isPrivate: true
    },
    {
        name: "login",
        Component: Login,
        path: "/login",
        isVisible: false,
        isPrivate: false
    },
    {
        name: "cart",
        Component: Cart,
        path: "/cart",
        isVisible: false,
        isPrivate: true
    },
    {
        name: "history",
        Component: History,
        path: "/history",
        isVisible: true,
        isPrivate: true
    },
    {
        name: "categories",
        Component: Categories,
        path: "/categories",
        isVisible: true,
        isPrivate: true
    },
    {
        name: "home",
        Component: Home,
        path: "/home",
        isVisible: true,
        isPrivate: true
    },

    {
        name: "root",
        Component: null,
        path: "/",
        isVisible: false,
        isPrivate: true
    }
];