import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Form, Image, TextArea } from 'semantic-ui-react';
import { getCategory, updateCategory } from '../../../api/categories';

const pictureNotFound = 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg';


const initState = {
    name: '',
    description: '',
    picture: pictureNotFound,
    slug: ''
}

const CategoryEdit = (props) => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState(initState);
    useEffect(async () => {

        const data = await getCategory(id);
        setCategory(data);
        setLoading(false);
    }, [])

    const onChange = (e) => {
        const { value, name } = e.target;

        setCategory({ ...category, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await updateCategory(category);

        if (res.data === "Success") {
            window.location.replace("/admin/categories")
        }
    }


    return (
        <div style={{ width: "100%", width: 900 }}>
            <Link to="/admin/categories" style={{ paddingBottom: 20 }}>
                Назад
            </Link>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Название</label>
                    <input placeholder='First Name' name='name' onChange={onChange} value={category.name} />
                </Form.Field>
                <Form.Field>
                    <label>Slug</label>
                    <input placeholder='Slug' name='slug' onChange={onChange} value={category.slug} />
                </Form.Field>
                <Form.Field label="Описание"
                    control={TextArea}
                    name='description'
                    onChange={onChange}
                    value={category.description}
                />

                <Image src={pictureNotFound} size='small' />
                <Form.Field style={{ marginTop: 20 }}>
                    <label>Фото</label>
                    <input placeholder='First Name' name='picture' onChange={onChange} value={category.picture} />
                </Form.Field>
                <Button style={{ marginTop: 20 }} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}
export default CategoryEdit;