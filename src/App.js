import React from "react";

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

function App() {
    return (
        <div className="App">
            <Header />
            <div className="main-wrapper">
                <Grid container style={{ padding: 30 }}>
                    <Switch>
                        <Route path="/" exact={true} strict={true}>
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
                        <Route path="/publication/new/" exact={true} strict={true}>
                            <PublicationForm />
                        </Route>
                    </Switch>
                    <Switch>
                        <Route path="/profile/" exact={true} strict={true}>
                            <Profile />
                        </Route>
                    </Switch>
                    <Switch>
                        <Route path="/admin/" exact={true} strict={true}>
                            <AdminPage />
                        </Route>
                    </Switch>
                </Grid>
            </div>

            <Footer />
        </div>
    );
}

export default App;
