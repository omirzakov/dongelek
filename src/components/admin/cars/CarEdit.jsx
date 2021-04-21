import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Form, Image, TextArea } from 'semantic-ui-react';
import { getCar, updateCar } from '../../../api/cars';

const pictureNotFound = 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg';


const initState = {
    name: '',
    description: '',
    picture: pictureNotFound,
    wheels: 4,
    doors: 4,
}

const CarEdit = (props) => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [car, setCar] = useState(initState);
    useEffect(async () => {

        const res = await getCar(id);
        setCar(res.data);
        setLoading(false);
    }, [])

    const onChange = (e) => {
        const { value, name } = e.target;

        setCar({...car, [name] : value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await updateCar(car); 

        if(res.data === "Success") {
            window.location.replace("/admin/cars")
        }
    }


    return (
        <div style={{width:"100%", width: 900}}>
            <Link to="/admin/cars" style={{paddingBottom: 20}}>
                Назад
            </Link>
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
                <Form.Field style={{marginTop:20}}>
                    <label>Фото</label>
                    <input placeholder='First Name' name='picture' onChange={onChange} value={car.picture} />
                </Form.Field>
                <Form.Field style={{marginTop:20}}>
                    <label>Кол-во колёс</label>
                    <input placeholder='Колеса' type='number' name='wheels' onChange={onChange} value={car.wheels} />
                </Form.Field>
                <Form.Field style={{marginTop:20}}>
                    <label>Кол-во двери</label>
                    <input placeholder='Двери' type='number' name='doors' onChange={onChange} value={car.doors} />
                </Form.Field>
                <Button style={{marginTop:20}} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}
export default CarEdit;