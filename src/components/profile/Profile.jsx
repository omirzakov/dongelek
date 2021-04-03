import React from "react";

import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";



const Profile = () => {


    return (
        <>
            <Grid item xs={7} style={{ margin: "0 auto" }}>
                <Box component="div" marginTop={10} marginLeft={20} >
                    <Box component="div" display="flex" alignItems="center" flexDirection="column" marginTop={10} >
                        <Box component="div" className="profile-info">
                            <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" width="150px" alt="User" />
                            <Typography variant="h6">Умирзаков Мадияр</Typography>
                        </Box>
                    </Box>
                    <Box component="div" display="flex" style={{margin: "40px 0"}}>
                        <Button variant="contained" color="primary" style={{ marginRight: 10 }}>
                            Мои объявления
                            </Button>
                        <Button variant="contained" color="primary" style={{ marginRight: 10 }}>
                            Архив
                            </Button>
                        <Button variant="contained" color="primary" style={{ marginRight: 10 }}>
                            Баланс
                            </Button>
                    </Box>
                    <form action="">

                        <Box component="div">
                            Обновить пароль
                            <TextField type="password" id="standard-basic" label="Старый пароль" style={{ width: "100%", marginBottom: 20 }} />
                            <TextField type="password" id="standard-basic" label="Новый пароль" style={{ width: "100%", marginBottom: 20 }} />
                            <TextField type="password" id="standard-basic" label="Повторите пароль" style={{ width: "100%", marginBottom: 20 }} />
                            <Button variant="contained" color="primary">
                                Обновить пароль
                            </Button>
                        </Box>

                    </form>

                </Box>
            </Grid>
        </>

    );
}
export default Profile;