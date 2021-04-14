import React, { useContext, useEffect, useState } from "react";

import { Box, Button, CircularProgress, Grid, List, ListItem, ListItemText, TextField, Typography } from "@material-ui/core";
import { validateToken } from "../../api/login";
import { AuthContext } from "../../App";
import { getProfile, updatePassword } from "../../api/user";
import { ToastContainer, toast } from "react-toastify";

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
        if(cookie.token) {
            const res = await validateToken(cookie.token);

            if(res.data) {
                const data = await getProfile(cookie.token);
                console.log(data)
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
                <Box component="div" display="flex" alignItems="center" flexDirection="column" marginTop={10} >
                    <Box component="div" className="profile-info">
                        <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" width="150px" alt="User" />
                    </Box>
                </Box>
                <List component="nav" aria-label="secondary mailbox folders">
                    <ListItem button>
                        <ListItemText primary={`Почта: ${user.email}`} />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary={`ФИО: ${user.fullname}`} />
                    </ListItem>
                </List>
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