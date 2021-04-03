import React from "react";

import { Grid } from "@material-ui/core";
import Navbar from "../navbar/Navbar";
import CarList from "../cars/CarList";



const Home = () => {

    return (
        <>
            <Grid item xs={3} spacing={5}>
                <Navbar />
            </Grid>
            <Grid item xs={9} spacing={5} className="main-content">
                <CarList />
            </Grid>
        </>
    );
}
export default Home;