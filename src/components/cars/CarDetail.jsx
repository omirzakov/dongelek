import React, { useState } from "react";

import { Box, Button, Grid, Paper } from "@material-ui/core";


const images = [
    "https://photos-kl.kcdn.kz/webp/6f/6f09d574-b741-4951-9891-0b3a35d9d7cc/55-750x470.webp",
    "https://photos-kl.kcdn.kz/webp/6f/6f09d574-b741-4951-9891-0b3a35d9d7cc/54-750x470.webp",
    "https://photos-kl.kcdn.kz/webp/6f/6f09d574-b741-4951-9891-0b3a35d9d7cc/55-750x470.webp",
    "https://photos-kl.kcdn.kz/webp/6f/6f09d574-b741-4951-9891-0b3a35d9d7cc/57-750x470.webp",
    "https://photos-kl.kcdn.kz/webp/6f/6f09d574-b741-4951-9891-0b3a35d9d7cc/59-750x470.webp",
    "https://photos-kl.kcdn.kz/webp/6f/6f09d574-b741-4951-9891-0b3a35d9d7cc/60-750x470.webp"
]

const CarDetail = () => {
    const [selected, setSelected] = useState(0);

    const changeGallery = (id) => {
        setSelected(id);
    }

    return (
        <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
                <Grid container>
                    <Grid item xs={5}>
                        <div>
                            <img src={images[selected]} style={{ maxWidth: "100%" }} alt="" />
                        </div>
                        <Grid container>
                            {
                                images.map((image, i) => (
                                    <Grid item xs={3} key={i} style={{ cursor: "pointer" }} onClick={() => changeGallery(i)}>
                                        <img src={image} style={{ maxWidth: "100%" }} />
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs={7} style={{ padding: 20 }}>
                        <Box component="div" display="flex" justifyContent="space-between" marginBottom={2}>
                            <p>Город</p>
                            <p>Алматы</p>
                        </Box>
                        <hr />
                        <Box component="div" display="flex" justifyContent="space-between" marginBottom={2}>
                            <p>Кузов</p>
                            <p>кроссовер</p>
                        </Box>
                        <hr />
                        <Box component="div" display="flex" justifyContent="space-between" marginBottom={2}>
                            <p>Объем двигателя, л</p>
                            <p>2.5 (бензин)</p>
                        </Box>
                        <hr />
                        <Box component="div" display="flex" justifyContent="space-between" marginBottom={2}>
                            <p>Коробка передач</p>
                            <p>автомат</p>
                        </Box>
                        <hr />
                        <Box component="div" display="flex" justifyContent="space-between" marginBottom={2}>
                            <p>Руль</p>
                            <p>слева</p>
                        </Box>
                        <hr />
                    </Grid>
                </Grid>
                <Grid container style={{ marginTop: 10 }}>
                    <Paper>
                        <Button color="primary"> Позвонить </Button>
                        <Button color="primary"> Написать сообщение </Button>
                        <Button color="inherit"> Пожаловаться </Button>
                    </Paper>
                </Grid>
                <Grid container style={{ marginTop: 30 }}>
                    <Grid item xs={12} style={{ marginBottom: 10 }}>
                        <Paper style={{ padding: 10 }}>
                            <span style={{ fontWeight: "bold" }}><b>Канат: </b></span>
                            <span>Обмен на Mark II ?</span>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 10 }}>
                        <Paper style={{ padding: 10 }}>
                            <span style={{ fontWeight: "bold" }}><b>Канат: </b></span>
                            <span>Обмен на Mark II ?</span>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 10 }}>
                        <Paper style={{ padding: 10 }}>
                            <span style={{ fontWeight: "bold" }}><b>Канат: </b></span>
                            <span>Обмен на Mark II ?</span>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 10 }}>
                        <Paper style={{ padding: 10 }}>
                            <span style={{ fontWeight: "bold" }}><b>Канат: </b></span>
                            <span>Обмен на Mark II ?</span>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 10 }}>
                        <Paper style={{ padding: 10 }}>
                            <span style={{ fontWeight: "bold" }}><b>Канат: </b></span>
                            <span>Обмен на Mark II ?</span>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: 10 }}>
                        <Paper style={{ padding: 10 }}>
                            <span style={{ fontWeight: "bold" }}><b>Канат: </b></span>
                            <span>Обмен на Mark II ?</span>
                        </Paper>
                    </Grid>

                </Grid>
            </Grid>
            <Grid item xs={3}></Grid>
        </Grid>
    );
}
export default CarDetail;