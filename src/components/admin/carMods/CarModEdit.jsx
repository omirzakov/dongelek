import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Form, Image, TextArea } from 'semantic-ui-react';
import { getCarMod, updateCarMod } from '../../../api/carmods';
import { getCar, updateCar } from '../../../api/cars';

const pictureNotFound = 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg';


const initState = {
    modification: ""
}

const CarModEdit = (props) => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [carMod, setCarMod] = useState(initState);
    useEffect(async () => {

        const res = await getCarMod(id);
        console.log(res)
        setCarMod(res.data);
        setLoading(false);
    }, [])

    const onChange = (e) => {
        const { value, name } = e.target;

        setCarMod({...carMod, [name] : value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(carMod)
        const res = await updateCarMod(carMod); 

        console.log(res)

        if(res.data === "Success") {
            window.location.replace("/admin/carmods")
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
                    <input placeholder='First Name' name='modification' onChange={onChange} value={carMod.modification} />
                </Form.Field>
                <Button style={{marginTop:20}} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}
export default CarModEdit;