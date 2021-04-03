import React from "react";

import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import logo from "../../img/camry.png";
import "./style.scss";



const PublicationForm = () => {



    return (

        <Grid item xs={12}>
            <form>
                <Box component="div" className="form-group" display="flex"
                    flexDirection="column" alignItems="center" justifyContent="center" marginTop={10}  >
                    <img src={logo} width="150px" />
                    <Typography variant="h5">
                        Новое объявление
                    </Typography>
                    <Box maxWidth="550px">
                        <Box component="div">
                            <TextField type="text" id="standard-basic" label="Название" style={{ width: "100%", marginBottom: 20 }} />
                        </Box>
                        <Box component="div" display="flex">
                            <Box component="div" className="car-model">
                                <div>
                                    <img src="https://cdn.iconscout.com/icon/free/png-512/mercedes-8-202855.png" alt=""/>
                                </div>
                                <div>
                                    Mercedes
                                </div>
                            </Box>
                            <Box component="div" className="car-model">
                                <div>
                                    <img src="https://cdn.iconscout.com/icon/free/png-512/toyota-7-827471.png" alt=""/>
                                </div>
                                <div>
                                    Toyota
                                </div>
                            </Box>
                            <Box component="div" className="car-model">
                                <div>
                                    <img src="https://img.icons8.com/ios/452/audi.png" alt=""/>
                                </div>
                                <div>
                                    Audi
                                </div>
                            </Box>
                            <Box component="div" className="car-model">
                                <div>
                                    <img src="data:image/png;base64,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" alt=""/>
                                </div>
                                <div>
                                    Mitsubishi
                                </div>
                            </Box>
                        </Box>

                        <Box component="div">
                            <Box component="div" className="form-title">
                                Год выпуска
                            </Box>
                            <Box component="div" display="flex">
                                <Box component="div" className="select-btn">
                                    2021
                                </Box>
                                <Box component="div" className="select-btn">
                                    2020
                                </Box>
                                <Box component="div" className="select-btn">
                                    2019
                                </Box>
                                <Box component="div" className="select-btn">
                                    2018
                                </Box>
                                <Box component="div" className="select-btn">
                                    2017
                                </Box>
                                <Box component="div" className="select-btn">
                                    2016
                                </Box>
                            </Box>
                        </Box>

                        <Box component="div">
                            <Box component="div" className="form-title">
                                Опции автомобиля
                            </Box>
                            <Box component="div" display="flex" flexWrap="wrap">
                                <Box component="div" className="select-btn">
                                    Ксенон
                                </Box>
                                <Box component="div" className="select-btn">
                                    Датчик света
                                </Box>
                                <Box component="div" className="select-btn">
                                    Турбонаддув
                                </Box>
                                <Box component="div" className="select-btn">
                                    SRS
                                </Box>
                                <Box component="div" className="select-btn">
                                    ABS
                                </Box>
                                <Box component="div" className="select-btn">
                                    ГУР
                                </Box>
                                <Box component="div" className="select-btn">
                                    Мультрируль
                                </Box>
                                <Box component="div" className="select-btn">
                                    Подогрев руля
                                </Box>
                                <Box component="div" className="select-btn">
                                    Подогрев сидений
                                </Box>
                                <Box component="div" className="select-btn">
                                    Датчик дождя
                                </Box>
                            </Box>
                        </Box>

                        <Box component="div">
                            <Box component="div" className="form-title">
                                Галерея
                            </Box>
                            <TextField type="text" id="standard-basic" label="Фотография" style={{ width: "100%", marginBottom: 20 }} />
                            <Button color="primary">Добавить +</Button>
                        </Box>    
                        <Box component="div">
                            <Box component="div" className="form-title">
                                Комментарий
                            </Box>
                            <TextField type="text" id="standard-basic" label="Комментарий" style={{ width: "100%", marginBottom: 20 }} />
                        </Box>
                        <Box component="div">
                            <Box component="div" className="form-title">
                                Контактный номер
                            </Box>
                            <TextField type="text" id="standard-basic" label="Номер телеофна" style={{ width: "100%", marginBottom: 20 }} />
                        </Box>
                        <Box component="div">
                            
                            <Button variant="contained" color="primary">
                                Подать объявление
                            </Button>
                        </Box>

                    </Box>
                </Box>
            </form>
        </Grid>
    );
}
export default PublicationForm;