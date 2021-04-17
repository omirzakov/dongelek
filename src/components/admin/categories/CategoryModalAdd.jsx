import React, { useState } from 'react'
import { Button, Form, Header, Image, Modal, TextArea } from 'semantic-ui-react'
import { addCategory } from '../../../api/categories';

const initState = {
    name: '',
    description: '',
    picture: ''
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
        console.log(res)

    }

    return (
        <div style={{ zIndex: 20000 }}>
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button>Добавить категорию</Button>}
            >
                <Modal.Header>Добавить категорию    </Modal.Header>
                <Modal.Content image>
                    <Image size='medium' src='https://lh3.googleusercontent.com/proxy/BSOYR6kSTTbvYkVKBLSYF5G0wEMuE-EvOuXOPhL8-NXA94Kh10PvhfLdkd3cVQE668GteYKcUeiaw24Wqaw' wrapped />
                    <Modal.Description style={{maxWidth: 500}}>
                        <Form onSubmit={handleSubmit} >
                            <Form.Field>
                                <label>Название</label>
                                <input placeholder='First Name' name='name' onChange={onChange} value={category.name} />
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