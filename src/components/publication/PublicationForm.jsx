import React, { useState, useContext, useEffect } from "react";

import { Box, Button, TextField, Typography } from "@material-ui/core";
import logo from "../../img/camry.png";
import "./style.scss";
import { AuthContext } from '../../App';
import { getCarMods } from "../../api/carmods";
import { addCarGallery, getCars } from "../../api/cars";
import { validateToken } from "../../api/login";
import { addPublication } from "../../api/publications";
import { Flag, Form, Grid, Image, TextArea } from 'semantic-ui-react'
import { ToastContainer, toast } from 'react-toastify';

const years = ['2021', '2020', '2019', '2018', '2017', '2016',
                '2015', '2014', '2013', '2012', '2011', '2010',
               '2009', '2008', '2007', '2006', '2005', '2004',
               '2003', '2002', '2001', '2000', '1999', '1998',
               '1997', '1996', '1995', '1994', '1993', '1992',
               '1991', '1990']


const initState = {
    name: '',
    additional_info: '',
    contact: '',
    email: '',
    price: '',
    year: '',
    picture: '',
    carModifications: [],
    car: {},
}

const PublicationForm = () => {

    const [gallery, setGallery] = useState([{['comment-0']: ''}]);
    const { cookie } = useContext(AuthContext);
    const [carMod, setCarMod] = useState(initState);
    const [carMods, setCarMods] = useState([]);
    const [cars, setCars] = useState([]);
    const [publication, setPublication] = useState(initState)

    const addComment = () => {
        if (gallery.length >= 5) {
            return;
        }
        const comment = {
            [`comment-${gallery.length}`]: ''
        }
        const data = [...gallery];
        data.push(comment);
        setGallery(data);
    }

    const handleChange = (e, id) => {
        console.log(e.target.name, id)
        setGallery(gallery.map((comment, i) => {
            if (id == i) {
                return {
                    [`comment-${id}`]: e.target.value
                }
            }

            return comment;
        }))
    }

    const onChange = (e) => {
        const { value, name } = e.target;

        setPublication({ ...publication, [name]: value });
    }

    async function loadCarModifications() {
        const res = await getCarMods();
        setCarMods(res.data)
    }

    async function loadCars() {
        const res = await getCars();
        setCars(res.data)
    }

    useEffect(() => {
        loadCarModifications();
        loadCars();
    }, [])

    const selectCarOptions = (data) => {
        let array = publication.carModifications;
        const item = array.find(item => item === data);

        if (item) {
            array = array.filter(mod => mod != data);
        } else {
            array.push(data);
        }

        setPublication({ ...publication, carModifications: array })
    }

    const selectCar = (carData) => {
        setPublication({ ...publication, car: carData })
    }

    const activeCar = (car) => {
        return publication.car === car ? "active-car" : "";
    }

    const activeItem = (mod) => {
        const isExist = publication.carModifications.find(item => item === mod);

        return isExist ? "active-option" : "";
    }

    const activeYear = (year) => {
        if(year === publication.year) {
            return "active-option";
        }

        return "";
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (cookie.token) {
                const res = await validateToken(cookie.token);
    
                if (res.data) {
                    console.log(publication)
                    const res1 = await addPublication(publication, cookie.token);
                    const res2 = await addCarGallery(publication.name, gallery);

                    toast.success('Объявление успешно создана');
    
                    setPublication(initState);
                    setGallery([]);
    
                }
            }
        } catch(e) {
            toast.error('Неудалось добавить объявление, проверьте еще раз');
        }
    }

    console.log(publication)

    return (

        <Form style={{ width: "100%", maxWidth: "1350px", margin: "0 auto" }}>
            <Grid>
                <Grid.Column width="7">
                    <Box component="div">
                        <Box component="div" className="form-title">
                            Галерея
                                </Box>
                        <Box component="div" marginTop={3}>
                            {
                                gallery.map((picture, i) => (
                                    <TextField required key={i} type="text" onChange={(e) => handleChange(e, i)} value={picture[`comment-${i}`]} placeholder='Дополнительное фото' name={`comment-${i}`} style={{ width: "100%", marginBottom: 20 }} />
                                ))
                            }
                            {
                                gallery.length < 5 &&
                                <Button color="primary" onClick={addComment}>Добавить +</Button>
                            }
                        </Box>
                        <div className='gallery-field'>
                            {
                                gallery.map((picture, i) => {
                                    if (picture[`comment-${i}`] === '') {
                                        return;
                                    }

                                    return <Image style={{ margin: 10 }} key={i} size="small" src={picture[`comment-${i}`]} />
                                })
                            }
                        </div>
                    </Box>

                </Grid.Column>
                <Grid.Column width="9">.
                   <h3>Модель</h3>       
                    <Box component="div" display="flex" flexWrap="wrap" marginTop={5} style={{ marginTop: 10 }}>
                        {
                            cars.map(car => (
                                <Box component="div" className={`car-model ${activeCar(car)}`} onClick={() => selectCar(car)}>
                                    <div>
                                        <img src={car.picture} alt="" />
                                    </div>
                                    <div>
                                        {car.name}
                                    </div>
                                </Box>
                            ))
                        }
                    </Box>

                    <Box component="div">
                        <Box component="div" className="form-title">
                            <h3>Год выпуска</h3>
                        </Box>
                        <Box component="div" display="flex" flexWrap="wrap">
                            {
                                years.map((year) => (
                                    <Box component="div" className={`select-btn ${activeYear(year)}`} onClick={() => setPublication({...publication, year: year})} >{year}</Box>
                                ))
                            }
                        </Box>
                    </Box>

                    <Box component="div">
                        <Box component="div" className="form-title">
                            <h3>Опции</h3>
                        </Box>
                        <Box component="div" display="flex" flexWrap="wrap">
                            {
                                carMods.map((mod) => (
                                    <Box component="div" className={`select-btn ${activeItem(mod)}`} onClick={() => selectCarOptions(mod)}>
                                        {mod.modification}
                                    </Box>
                                ))
                            }
                        </Box>
                    </Box>
                    <Box component="div">
                        <Form.Field>
                            <h4>Цена в тг &nbsp;
                                <Flag name="kz" />
                            </h4>
                            <input required placeholder='Цена' type="number" name='price' onChange={onChange} value={publication.price} />
                            <div style={{marginTop: 20, display:"flex"}}>
                                <div style={{paddingRight:"20px"}}>
                                    Цена в долларах <Flag name="us" /> = {(publication.price/420).toFixed(2)} $
                                </div>
                                <div>
                                    Цена в евро <Flag name="eu" /> = {(publication.price/520).toFixed(2)} €
                                </div>
                            </div>
                        </Form.Field>
                    </Box>
                </Grid.Column>
                <Grid.Column width="16">
                    <Form.Field>
                        <label>Заголовок</label>
                        <input required placeholder='Заголовок' name='name' onChange={onChange} value={publication.name} />
                    </Form.Field>
                    <Form.Field>
                        <label>Фото</label>
                        <input required placeholder='Фото' name='picture' onChange={onChange} value={publication.picture} />
                    </Form.Field>

                    <Form.Field label="Дополнительная информация"
                        control={TextArea}
                        name='additional_info'
                        value={publication.additional_info}
                        onChange={onChange}
                    />
                    <Form.Field>
                        <label>Контакты</label>
                        <input required placeholder='Контакты' name='contact' onChange={onChange} value={publication.contact} />
                    </Form.Field>
                    <Form.Field>
                        <label>Почта</label>
                        <input required placeholder='Почта' name='email' onChange={onChange} value={publication.email} />
                    </Form.Field>
                    <Box component="div">
                        <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
                            Подать объявление
                        </Button>
                    </Box>
                    <ToastContainer />
                </Grid.Column>
            </Grid>
        </Form>
    );
}
export default PublicationForm;