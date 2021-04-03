import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Box } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        maxWidth: "100%",
        marginBottom: 20
    },
    text: {
        fontSize: 20
    },
    img: {
        borderRadius: "6px"
    }
});

const CarItem = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <Box component="div" display="flex">
                <Box component="div" padding={2}>
                    <img src="https://photos-kl.kcdn.kz/webp/7e/7ec1de44-232b-494d-8b9f-d1674febdb90/17-200x150.webp" className={classes.img} alt="car"/>
                </Box>
                <Box component="div" display="flex" justifyContent="space-between" alignItems="center" width="100%" padding={5}>
                    <Box component="div" className={classes.text}>
                        Toyota chester
                    </Box>
                    <Box component="div" className={classes.text}>
                        <div>1992</div>
                        <div style={{marginTop:10}}>3.2 млн тг</div>
                    </Box>
                </Box>
            </Box>
        </Card>
    );
}
export default CarItem;