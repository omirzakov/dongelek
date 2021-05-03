import React, { createContext, useState } from "react";

import { Grid } from "@material-ui/core";
import Header from "./components/header/Header";
import "./styles/reset.scss";
import Footer from "./components/footer/Footer";
import { Route, Switch } from "react-router";
import Home from "./components/home/Home";
import Registration from "./components/authorization/Registration";
import Login from "./components/authorization/Login";
import PublicationForm from "./components/publication/PublicationForm";
import Profile from "./components/profile/Profile";
import AdminPage from "./components/admin/AdminPage";
import CarDetail from "./components/cars/CarDetail";
import { useCookies } from "react-cookie";
import UserPublications from "./components/publication/UserPublications";
import PublicationsByCategory from "./components/publication/PublicationsByCategory";
import CreditPage from "./components/credit/CreditPage";
import UserCredits from "./components/credit/UserCredits";
import { routes } from "./components/routes/routes";

export const AuthContext = createContext();

function App() {
    const [cookie, setCookie, removeCookie] = useCookies(['token']);
    const [isAuth, setIsAuth] = useState(false);


    return (
        <div className="App">
            <AuthContext.Provider value={{ cookie, setCookie, removeCookie, isAuth, setIsAuth }}>
                <Header />
                <div className="main-wrapper">
                    <Grid container style={{ padding: 30 }}>
                        {
                            routes.map((route) => (
                                <Switch>
                                    <Route path={route.path} strict={route.strict} exact={route.exact} component={route.Component} />
                                </Switch>
                            ))
                        }
                    </Grid>
                </div>
                <Footer />
            </AuthContext.Provider>
        </div>
    );
}

export default App;
