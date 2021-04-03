import React from "react";

import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import logo from "../../img/camry.png";



const Registration = () => {



    return (
        <Grid item xs={12}>

            <form>  
                    <Box component="div" className="form-group" display="flex"            
                        flexDirection="column" alignItems="center" justifyContent="center" marginTop={20}  >
                        <img src={logo} width="150px" />
                        <Typography variant="h5">
                            Регистрация
                        </Typography>
                        <TextField type="text" id="standard-basic" label="Логин" style={{ width: "50%", marginBottom: 20 }} />
                        <TextField type="email" id="standard-basic" label="Почта" style={{ width: "50%", marginBottom: 20 }} />
                        <TextField type="password" id="standard-basic" label="Пароль" style={{ width: "50%", marginBottom: 20 }} />
                        <TextField type="password" id="standard-basic" label="Повторите пароль" style={{ width: "50%", marginBottom: 20 }} />
                        <Button variant="contained" color="primary">
                            Принять
                        </Button>
                    </Box>
            </form>
        </Grid>
    );
}
export default Registration;