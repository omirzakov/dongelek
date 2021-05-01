import { Box } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react'
import { Button, Form, Modal, TextArea } from 'semantic-ui-react'
import { addCarMod, getCarMods } from '../../../api/carmods';
import { getCars } from '../../../api/cars';
import { validateToken } from '../../../api/login';
import { addPublication } from '../../../api/publications';
import { getProfile } from '../../../api/user';
import { AuthContext } from '../../../App';
import '../../publication/style.scss';

const initState = {
    name: '',
    additional_info: '',
    contact: '',
    email: '',
    picture: '',
    carModifications: [],
    car: {},
}

function PublicationModalAdd({ loadData }) {
    const [open, setOpen] = useState(false);
    const { cookie } = useContext(AuthContext);
    const [carMod, setCarMod] = useState(initState);
    const [carMods, setCarMods] = useState([]);
    const [cars, setCars] = useState([]);
    const [publication, setPublication] = useState(initState)

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
        setPublication({...publication, car: carData})
    }

    const activeCar = (car) => {
        return publication.car === car ? "active-car" : "";
    }

    const activeItem = (mod) => {
        const isExist = publication.carModifications.find(item => item === mod);

        return isExist ? "active-option" : "";
    }

    const handleSubmit = async (e) => {
        if(cookie.token) {
            const res = await validateToken(cookie.token);

            if(res.data) {
                const res = await addPublication(publication, cookie.token);
                loadData();
                setOpen(false);
            }
        }
    }



    return (
        <div style={{ zIndex: 20000, marginTop: 20 }}>
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button>Добавить объявление</Button>}
            >
                <Modal.Header>Добавить объявление    </Modal.Header>
                <Modal.Content image>
                    <Modal.Description style={{ maxWidth: 800, margin: "0 auto" }}>
                        <Form onSubmit={handleSubmit} >
                            <Box component="div" display="flex" flexWrap="wrap">
                            {
                                cars.map(car => (
                                    <Box key={car.id} component="div" className={`car-model ${activeCar(car)}`} onClick={() => selectCar(car)}>
                                        <div>
                                            <img src={car.picture} alt="" />
                                        </div>
                                        <div>
                                            { car.name }
                                        </div>
                                    </Box>
                                ))
                            }
                            </Box>
                            <Box component="div" display="flex" flexWrap="wrap">
                                {
                                    carMods.map((mod) => (
                                        <Box key={mod.id}  component="div" className={`select-btn ${activeItem(mod)}`} onClick={() => selectCarOptions(mod)}>
                                            {mod.modification}
                                        </Box>
                                    ))
                                }
                            </Box>
                            <Form.Field>
                                <label>Заголовок</label>
                                <input placeholder='Заголовок' name='name' onChange={onChange} value={publication.name} />
                            </Form.Field>

                            <Form.Field>
                                <label>Фото</label>
                                <input placeholder='Фото' name='picture' onChange={onChange} value={publication.picture} />
                            </Form.Field>
                            
                            <Form.Field label="Дополнительная информация"
                                control={TextArea}
                                name='additional_info'
                                value={publication.additional_info}
                                onChange={onChange}
                            />
                            <Form.Field>
                                <label>Контакты</label>
                                <input placeholder='Контакты' name='contact' onChange={onChange} value={publication.contact} />
                            </Form.Field>
                            <Form.Field>
                                <label>Почта</label>
                                <input placeholder='Почта' name='email' onChange={onChange} value={publication.email} />
                            </Form.Field>
                            <Modal.Actions>
                                <Button color='black' onClick={() => setOpen(false)}>
                                    Нет
                                </Button>
                                <Button
                                    type='submit'
                                    content="Добавить"
                                    labelPosition='right'
                                    icon='checkmark'
                                    positive
                                />
                            </Modal.Actions>
                        </Form>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        </div>
    )
}

export default PublicationModalAdd;