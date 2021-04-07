import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Box } from '@material-ui/core';
import { Link } from "react-router-dom";


const useStyles = makeStyles({
    root: {
        maxWidth: "100%",
        marginBottom: 20
    },
    text: {
        fontSize: 20
    },
    img: {
        maxWidth: "100%",
        width: "350px",
        borderRadius: "6px"
    }
});

const CarItem = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <Link to="/cars/1/" style={{color: "black", textDecoration:"none"}}>
                <Box component="div" display="flex">
                    <Box component="div" padding={2}>
                        <img src="https://photos-kl.kcdn.kz/webp/6f/6f09d574-b741-4951-9891-0b3a35d9d7cc/55-750x470.webp" className={classes.img} alt="car" />
                    </Box>
                    <Box component="div" display="flex" justifyContent="space-between" alignItems="center" width="100%" padding={5}>
                        <Box component="div" className={classes.text}>
                            Toyota chester
                    </Box>
                        <Box component="div" className={classes.text}>
                            <div>1992</div>
                            <div style={{ marginTop: 10 }}>3.2 млн тг</div>
                        </Box>
                    </Box>
                </Box>
            </Link>
        </Card>
    );
}
export default CarItem;