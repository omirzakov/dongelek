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
import Profile from "./components/admin/profile/Profile";
import AdminPage from "./components/admin/AdminPage";
import CarDetail from "./components/cars/CarDetail";
import { useCookies } from "react-cookie";
import UserPublications from "./components/publication/UserPublications";
import PublicationsByCategory from "./components/publication/PublicationsByCategory";

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
                        <Switch>
                            <Route path="/" strict={true} exact={true} strict={true}>
                                <Home />
                            </Route>
                        </Switch>
                        <Switch>
                            <Route path="/registration/" exact={true} strict={true}>
                                <Registration />
                            </Route>
                        </Switch>

                        <Switch>
                            <Route path="/login/" exact={true} strict={true}>
                                <Login />
                            </Route>
                        </Switch>
                        <Switch>
                            <Route path="/publication/:id/" exact={true} strict={true}>
                                <CarDetail />
                            </Route>
                        </Switch>
                        <Switch>
                            <Route path="/newpublication/" exact={true} strict={true}>
                                <PublicationForm />
                            </Route>
                        </Switch>
                        <Switch>
                            <Route path="/profile/" exact={true} strict={true}>
                                <Profile />
                            </Route>
                        </Switch>
                        <Switch>
                            <Route path="/admin/" >
                                <AdminPage />
                            </Route>
                        </Switch>
                        <Switch>
                            <Route path="/mypublications/" exact={true} strict={true}>
                                <UserPublications />
                            </Route>
                        </Switch>
                        <Route path="/publications/:name" exact={true} strict={true} >
                            <PublicationsByCategory />
                        </Route>
                    </Grid>
                </div>
                <Footer />
            </AuthContext.Provider>
        </div>
    );
}

export default App;
