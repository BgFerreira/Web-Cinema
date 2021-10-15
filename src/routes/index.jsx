import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { routers } from './Router.js';
import { MyContext } from '../context/Context.js';

import { GlobalStyle } from '../components/GlobalStyle/GlobalStyle.jsx';


function CustomRoute(props) {
    const { authenticated } = useContext(MyContext);

    if (props.isPrivate && !authenticated) {
        return (
            <Redirect to="/login" exact />
        )
    }

    return <Route {...props} />;
}

function Routes() {
    return (
       <BrowserRouter>
            <GlobalStyle />
            <Switch>
                {routers.map((route) => {
                    return (
                        <CustomRoute key={route.name} exact path={route.path} component={route.Component} isPrivate={route.isPrivate} />
                    )
                })}
                <Route component={() => {
                    return (
                        <h1>404: NOT FOUND</h1>
                    )
                }} />
            </Switch>
       </BrowserRouter>
    )
}
export default Routes;