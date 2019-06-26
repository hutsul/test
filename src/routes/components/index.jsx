import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ROUTES } from '../../constants/index';

import Header from "../../modules/header";
import Footer from "../../modules/footer";
import Home from '../../modules/home';

export default class RootRoutes extends Component {

    render(){
        return (
            <>
                <Header/>
                <main className="main-content">
                    <Switch>
                        <Route path={ROUTES.home} component={Home}/>
                        <Redirect to={ROUTES.home}/>
                    </Switch>
                </main>
                <Footer/>
            </>
        )
    }
}