import React from "react";

import { useStyles } from "./styles";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import camry from "../../img/camry.png";
import { NavLink, Link } from "react-router-dom";
import "./style.scss";



const Header = () => {
    const classes = useStyles();


    return (
        <AppBar position="static">
            <Toolbar>
                <Link to="/" className={classes.link}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <img src={camry} width="120px" className={classes.logo} />
                        <Typography variant="h6" className={classes.title}>
                            Dongelek
                    </Typography>
                    </IconButton>
                </Link>
                <Typography variant="h6" className={classes.title}>
                    <NavLink to="/" className={classes.link}>
                        Главная
                    </NavLink>
                    <NavLink activeClassName="active-link" to="/cars/" className={classes.link}>
                        Машины
                    </NavLink>
                    <NavLink activeClassName="active-link" to="/publication/new/" className={classes.link}>
                        Подать объявление
                    </NavLink>
                </Typography>
                <Link to="/login/" className={classes.link}>
                    <Button color="inherit">
                        Авторизация
                    </Button>
                </Link>
                <Link to="/registration/" className={classes.link}>
                    <Button color="inherit">
                        Регистрация
                    </Button>
                </Link>
            </Toolbar>
        </AppBar>
    );
}
export default Header;