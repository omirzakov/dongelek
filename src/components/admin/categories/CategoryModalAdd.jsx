import React, { useEffect, useState } from 'react'
import { Button, Form, Header, Image, Modal, TextArea } from 'semantic-ui-react'
import { addCategory, getCategories } from '../../../api/categories';

const initState = {
    name: '',
    description: '',
    picture: '',
    slug: '',
}

function CategoryModalAdd() {
    const [open, setOpen] = useState(false)

    const [category, setCategory] = useState(initState);

    const onChange = (e) => {
        const { value, name } = e.target;

        setCategory({ ...category, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await addCategory(category);
        setOpen(false);
        window.location.reload();   
    }

    useEffect(async () => {
        const res = await getCategories();
        console.log(res)
    }, [])

    return (
        <div style={{ zIndex: 20000, marginTop: 20 }}>
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button>Добавить категорию</Button>}
            >
                <Modal.Header>Добавить категорию    </Modal.Header>
                <Modal.Content image>
                    <Modal.Description style={{maxWidth: 500, margin: "0 auto"}}>
                        <Form onSubmit={handleSubmit} >
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
                            <Form.Field style={{ marginTop: 20 }}>
                                <label>Фото</label>
                                <input placeholder='First Name' name='picture' onChange={onChange} value={category.picture} />
                            </Form.Field>
                            <Modal.Actions>
                                <Button color='black' onClick={() => setOpen(false)}>
                                    Nope
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

export default CategoryModalAdd;