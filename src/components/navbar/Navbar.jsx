import React, { useEffect, useState } from "react";

import { List, ListItem, ListItemIcon, ListItemText, Paper } from "@material-ui/core";
import { useStyles } from "./styles";
import { Link } from "react-router-dom";
import { navlinks } from "./navlist";
import { getCars } from "../../api/cars";
import ModelList from "./ModelList";



const Navbar = () => {
    const classes = useStyles();



    return (
        <Paper>
            <List component="nav" aria-label="main mailbox folders">
                {
                    navlinks.map((link) => (
                        <Link to={link.href} className={classes.link}>
                        <ListItem button>
                                <ListItemIcon>
                                    <link.Icon />
                                </ListItemIcon>
                                <ListItemText primary={link.name} />
                        </ListItem>
                        </Link>
                    ))
                }
            </List>
            <ModelList />
        </Paper >
    );

}
export default Navbar;