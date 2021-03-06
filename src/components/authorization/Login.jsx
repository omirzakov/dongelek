import React, { useContext, useState } from "react";

import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";

import logo from "../../img/camry.png";
import { login } from "../../api/login";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../App";



const Login = () => {
    const [user, setUser] = useState({email: "", password: ""});
    const { setCookie } = useContext(AuthContext);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUser(prev => ({...prev, [name]: value}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        toast("Загрузка...")

        const res = await login(user);
        console.log(res)

        if(res && res.status && res.status >= 200 && res.status <= 300) {
            toast.success("Вы успешно зашли в аккаунт");
            localStorage.setItem("jwt", res.data.token);
            window.location.replace("/");
        }
        else {
            toast.error("Некоректный пароль");
        }
    }
    

    return (
        <Grid item xs={12}>
            <form onSubmit={handleSubmit}>
                <Box component="div" className="form-group" display="flex"
                    flexDirection="column" alignItems="center" justifyContent="center" marginTop={20}  >
                    <img src={logo} width="150px" />
                    <Typography variant="h5">
                        Авторизация
                    </Typography>
                    <TextField name="email" value={user.email} onChange={handleChange}  type="email" id="standard-basic" label="Почта" style={{ width: "50%", marginBottom: 20 }} />
                    <TextField name="password" value={user.password} onChange={handleChange} type="password" id="standard-basic" label="Пароль" style={{ width: "50%", marginBottom: 20 }} />
                    <Button type="submit" variant="contained" color="primary">
                        Принять
                    </Button>
                </Box>
            </form>
            <ToastContainer />
        </Grid>
    );
}
export default Login;