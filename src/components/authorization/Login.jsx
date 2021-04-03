import React from "react";

import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import logo from "../../img/camry.png";



const Login = () => {

    return (
        <Grid item xs={12}>
            <form>
                <Box component="div" className="form-group" display="flex"
                    flexDirection="column" alignItems="center" justifyContent="center" marginTop={20}  >
                    <img src={logo} width="150px" />
                    <Typography variant="h5">
                        Авторизация
                    </Typography>
                    <TextField type="email" id="standard-basic" label="Почта" style={{ width: "50%", marginBottom: 20 }} />
                    <TextField type="password" id="standard-basic" label="Пароль" style={{ width: "50%", marginBottom: 20 }} />
                    <Button variant="contained" color="primary">
                        Принять
                    </Button>
                </Box>
            </form>
        </Grid>
    );
}
export default Login;