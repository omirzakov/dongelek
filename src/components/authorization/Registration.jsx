import React, { useEffect, useState } from "react";

import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import logo from "../../img/camry.png";
import { registration } from "../../api/registration";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initState = {email: "", password: "", repassword: ""}

const Registration = () => {

    const [user, setUser] = useState(initState);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUser(prev => ({...prev, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(user.password != user.repassword) {
            toast.error("🦄 Пароли не совпадают!")

            return;
        }

        registration(user);
        
        toast.success("🦄 Регистрация успешно пройдена");
        setUser(initState);

        setTimeout(() => {
            window.location.replace("http://localhost:3001/login/");
        }, 3000);
    }

    return (
        <Grid item xs={12}>

            <form onSubmit={handleSubmit}>  
                    <Box component="div" className="form-group" display="flex"            
                        flexDirection="column" alignItems="center" justifyContent="center" marginTop={20}  >
                        <img src={logo} width="150px" />
                        <Typography variant="h5">
                            Регистрация
                        </Typography>
                        <TextField onChange={handleChange} name="email" value={user.email} type="email" id="standard-basic" label="Почта" style={{ width: "50%", marginBottom: 20 }} />
                        <TextField onChange={handleChange} name="password" value={user.password} type="password" id="standard-basic" label="Пароль" style={{ width: "50%", marginBottom: 20 }} />
                        <TextField onChange={handleChange} name="repassword" value={user.repassword} type="password" id="standard-basic" label="Повторите пароль" style={{ width: "50%", marginBottom: 20 }} />
                        <Button type="submit" variant="contained" color="primary">
                            Принять
                        </Button>
                    </Box>
            </form>

            <ToastContainer />
        </Grid>
    );
}
export default Registration;