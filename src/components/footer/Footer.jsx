import { Box, Paper } from "@material-ui/core";
import React from "react";

import logo from "../../img/camry.png";



const Footer = () => {


    return (
        <Paper>
            <Box component="div" textAlign="center" padding={3}>
                    <img src={logo} alt="logo_camry" width="75px"/>
                    Madiyar Umirzakov - Dongelek
            </Box>
        </Paper>
    )
}
export default Footer;