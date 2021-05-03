import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import CarsTable from "./cars/CarsTable";
import { AuthContext } from '../../App';
import { getProfile } from '../../api/user';
import { Box, CircularProgress } from '@material-ui/core';
import { Link, Route, Switch } from 'react-router-dom';
import CategoriesTable from './categories/CategoriesTable';
import CategoryEdit from './categories/CategoryEdit';
import CarEdit from './cars/CarEdit';
import CarModsTable from './carMods/CarModsTable';
import CarModEdit from './carMods/CarModEdit';
import PublicationsTable from './publications/PublicationsTable';
import PublicationEdit from './publications/PublicationEdit'
import UsersTable from './users/UsersTable';
import ReportsTable from './reports/ReportsTable';
import BankTable from './bank/BankTable';
const categories = [
    {
        name: "Категории",
        link: '/admin/categories'
    },
    {
        name: "Автомобили",
        link: "/admin/cars"
    },
    {
        name: "Модификации для автомобилей",
        link: "/admin/carmods"
    },
    {
        name: "Объявления",
        link: "/admin/publications"
    },
    {
        name:"Жалобы",
        link: "/admin/reports"
    },
    {
        name:"Банковские организации",
        link: "/admin/banks"
    }
]

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        zIndex: 2
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        width: "100%",
        minWidth: 5,
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

const AdminPage = () => {
    const classes = useStyles();
    const [loader, setLoader] = useState(true);


    useEffect(async () => {
        const token = localStorage.getItem("jwt");
        if (token) {
            const userInfo = await getProfile(token);

            const isAdmin = userInfo.roles.find((role) => {

                if (token === "ROLE_ADMIN") {
                    return true;
                }
            })

            if (isAdmin) {
                setLoader(false);
            }
            else {
                // window.location.replace("/");
            }

            setLoader(false)
        }
        else {
            // window.location.replace("/");
        }
    }, []);

    return (
        <>
            {
                loader ? <Box component="div" display="flex" margin="0 auto"><CircularProgress /></Box> :
                    <div className={classes.root}>
                        <CssBaseline />
                        <AppBar position="fixed" className={classes.appBar} style={{ zIndex: 2 }}>
                            <Toolbar>
                                <Typography variant="h6" noWrap>
                                    Админ панель
                            </Typography>
                            </Toolbar>
                        </AppBar>
                        <Drawer
                            className={classes.drawer}
                            variant="permanent"
                            style={{ zIndex: 2 }}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            anchor="left"
                        >
                            <div className={classes.toolbar} />
                            <Divider />
                            <List>
                                {
                                    categories.map((cat, i) => (
                                    <ListItem button key={i}>
                                        <ListItemIcon><InboxIcon /></ListItemIcon>
                                        <ListItemText>
                                            <Link to={cat.link}>
                                                {cat.name}
                                            </Link>
                                        </ListItemText>
                                    </ListItem>
                                    ))
                                }
                            </List>
                            <Divider />
                            <List>
                                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                                    <ListItem button key={text}>
                                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItem>
                                ))}
                            </List>
                        </Drawer>
                        <main className={classes.content}>
                            <Switch>
                                <Route path='/admin/categories' exact={true} strict={true}>
                                    <CategoriesTable />
                                </Route>
                                <Route path='/admin/cars' exact={true} strict={true}>
                                    <CarsTable />
                                </Route>
                                <Route path='/admin/category/:id/' exact={true} strict={true}>
                                    <CategoryEdit />
                                </Route>
                                <Route path='/admin/cars/:id/' exact={true} strict={true}>
                                    <CarEdit />
                                </Route>
                                <Route path='/admin/carmods' exact={true} strict={true}>
                                    <CarModsTable />
                                </Route>
                                <Route path='/admin/carmods/:id/' exact={true} strict={true}>
                                    <CarModEdit />
                                </Route>
                                <Route path='/admin/publications' exact={true} strict={true}>
                                    <PublicationsTable />
                                </Route>
                                <Route path='/admin/publications/:id/' exact={true} strict={true}>
                                    <PublicationEdit />
                                </Route>
                                <Route path='/admin/users' exact={true} strict={true}>
                                    <UsersTable />
                                </Route>
                                <Route path='/admin/reports' exact={true} strict={true}>
                                    <ReportsTable />
                                </Route>
                                <Route path='/admin/banks' exact={true} strict={true}>
                                    <BankTable />
                                </Route>
                            </Switch>
                        </main>
                    </div>
            }
        </>
    );
}
export default AdminPage;