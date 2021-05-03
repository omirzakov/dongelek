import React, { useContext, useEffect, useState } from "react";

import { Box, Button, CircularProgress, Grid, List, ListItem, ListItemText, TextField, Typography } from "@material-ui/core";
import { validateToken } from "../../api/login";
import { AuthContext } from "../../App";
import { getProfile, updatePassword } from "../../api/user";
import { ToastContainer, toast } from "react-toastify";
import { Link } from 'react-router-dom';

const initStatePasswords = {
    oldpass: "",
    newpass: "",
    repass: ""
}

const Profile = () => {
    const { cookie } = useContext(AuthContext);
    const [loader, setLoader] = useState(true);
    const [user, setUser] = useState({});
    const [passData, setPassData] = useState(initStatePasswords);

    useEffect(async () => {
        const token = localStorage.getItem("jwt");
        if(token) {
            const res = await validateToken(token);

            if(res.data) {
                const data = await getProfile(token);
                setUser(data);
                setLoader(false);
            }
        }
    }, []);

    const handleChangePassword = (e) => {
        const { name, value } = e.target;
        setPassData({...passData, [name] : value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('111')

        if(passData.repass != passData.newpass) {
            toast.error("Новые пароли не совпадают");
            return;
        }

        if(passData.newpass.length < 8) {
            toast.error("Длина пароля должна быть не меньше 8 символов");
            return;
        }

        if(passData.newpass === passData.oldpass) {
            toast.error("Придумайте другой пароль");
            return;
        }

        const res = await updatePassword(cookie.token, passData.oldpass, passData.newpass);

        if(res.status >= 200 && res.status <= 300) {
            toast.success("Пароль успешно обновлён");
        }
        else {
            toast.error("Не удалось обновить пароль");
        }

    }

    return (
        <>
        {
            loader ? <Box component="div" display="flex" margin="0 auto"><CircularProgress  /></Box>:
            <Grid item xs={7} style={{ margin: "0 auto" }}>
            <Box component="div" marginTop={10} marginLeft={20} >
                <List component="nav" aria-label="secondary mailbox folders">
                    <ListItem button>
                        <ListItemText primary={`Почта: ${user.email}`} />
                    </ListItem>
                </List>
                <Box component="div" display="flex" style={{margin: "40px 0"}}>
                    <Link to="/mypublications/" className="ui blue button">
                        Мои объявления
                    </Link>
                    <Link to="/user/credits/" className="ui blue button">
                        История
                    </Link>
                </Box>
                <form onSubmit={handleSubmit}>

                    <Box component="div">
                        Обновить пароль
                        <TextField onChange={handleChangePassword} value={passData.oldpass} name="oldpass" type="password" label="Старый пароль" style={{ width: "100%", marginBottom: 20 }} />
                        <TextField onChange={handleChangePassword} value={passData.newpass}  name="newpass" type="password" label="Новый пароль" style={{ width: "100%", marginBottom: 20 }} />
                        <TextField onChange={handleChangePassword} value={passData.repass} name="repass" type="password"  label="Повторите пароль" style={{ width: "100%", marginBottom: 20 }} />
                        <Button type="submit" variant="contained" color="primary">
                            Обновить пароль
                        </Button>
                    </Box>

                </form>

            </Box>
        </Grid>   
        }
        <ToastContainer />
        </>

    );
}
export default Profile;