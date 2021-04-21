import React, { useState } from 'react'
import { Button, Form, Header, Image, Modal, TextArea } from 'semantic-ui-react'
import { addCar, getCars } from '../../../api/cars';


const pictureNotFound = 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg';
const initState = {
    name: '',
    description: '',
    picture: pictureNotFound,
    wheels: 4,
    doors: 4,
}

function CarModalAdd({loadData}) {
    const [open, setOpen] = useState(false)

    const [car, setCar] = useState(initState);

    const onChange = (e) => {
        const { value, name } = e.target;

        setCar({ ...car, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await addCar(car);
        loadData();
        setOpen(false);
    }

    return (
        <div style={{ zIndex: 20000, marginTop: 20 }}>
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button>Добавить автомобиль</Button>}
            >
                <Modal.Header>Добавить автомобиль</Modal.Header>
                <Modal.Content image>
                    <Modal.Description style={{ maxWidth: 500 }}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Field>
                                <label>Название</label>
                                <input placeholder='First Name' name='name' onChange={onChange} value={car.name} />
                            </Form.Field>
                            <Form.Field label="Описание"
                                control={TextArea}
                                name='description'
                                onChange={onChange}
                                value={car.description}
                            />

                            <Image src={car.picture || pictureNotFound} size='small' />
                            <Form.Field style={{ marginTop: 20 }}>
                                <label>Фото</label>
                                <input placeholder='First Name' name='picture' onChange={onChange} value={car.picture} />
                            </Form.Field>
                            <Form.Field style={{ marginTop: 20 }}>
                                <label>Кол-во колёс</label>
                                <input placeholder='Колеса' type='number' name='wheels' onChange={onChange} value={car.wheels} />
                            </Form.Field>
                            <Form.Field style={{ marginTop: 20 }}>
                                <label>Кол-во двери</label>
                                <input placeholder='Двери' type='number' name='doors' onChange={onChange} value={car.doors} />
                            </Form.Field>
                            <Button style={{ marginTop: 20 }} type='submit'>Submit</Button>
                        </Form>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        </div>
    )
}

export default CarModalAdd;