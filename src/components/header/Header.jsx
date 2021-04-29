import React, { useContext, useEffect } from "react";

import { useStyles } from "./styles";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import camry from "../../img/camry.png";
import { NavLink, Link } from "react-router-dom";
import "./style.scss";
import { AuthContext } from "../../App";
import { validateToken } from "../../api/login";
import { Container, Menu } from "semantic-ui-react";



const Header = () => {
    const { cookie, setIsAuth, removeCookie, isAuth } = useContext(AuthContext);
    const classes = useStyles();

    useEffect(async () => {

        const res = await validateToken(cookie.token);
        if (res != undefined && res.data) {
            setIsAuth(true);
        }
    }, []);

    const logOut = () => {

        removeCookie("token");
        window.location.reload();
    }

    return (
        <Menu>
            <Container>
                <Menu.Item>
                    <Link to='/'>Главная</Link>
                </Menu.Item>
                {
                    isAuth &&
                    <Menu.Item>
                        <Link activeClassName="active-link" to="/newpublication/">
                            Подать объявление
                        </Link>
                    </Menu.Item>
                }
                {
                    isAuth ?
                        <Menu.Item position="right">
                            <Link to="/mypublications/" style={{paddingRight:"30px", color:"blue"}}>
                                Мои объявления
                            </Link>
                            <Link to="/profile/">
                                Профиль
                            </Link>
                            <p style={{paddingLeft:"30px", color:"green", cursor:"pointer"}} onClick={logOut}>
                                Выйти
                            </p>
                        </Menu.Item>
                        :
                        (
                        <div style={{display:"flex"}}>
                        <Menu.Item>
                            <Link to="/login/">
                                Логин
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/registration/">
                                Регистрация
                            </Link>
                        </Menu.Item>
                        </div>
                        )

                }
            </Container>
        </Menu>
    );
}
export default Header;