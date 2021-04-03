import React from "react";

import { List, ListItem, ListItemIcon, ListItemText, Paper } from "@material-ui/core";
import { useStyles } from "./styles";
import CommuteIcon from '@material-ui/icons/Commute';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import { Link } from "react-router-dom";
import { navlinks } from "./navlist";



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
        </Paper >
    );

}
export default Navbar;