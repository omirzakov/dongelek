import { Grid } from "@material-ui/core";
import React from "react";
import CarItem from "./CarItem";



const CarList = () => {


    return (
        <Grid container>
            <Grid item xs={4}>
                <CarItem />
            </Grid>
            <Grid item xs={4}>
                <CarItem />
            </Grid>
            <Grid item xs={4}>
                <CarItem />
            </Grid>
            <Grid item xs={4}>
                <CarItem />
            </Grid>
            <Grid item xs={4}>
                <CarItem />
            </Grid>
            <Grid item xs={4}>
                <CarItem />
            </Grid>
        </Grid>
    );
}
export default CarList;