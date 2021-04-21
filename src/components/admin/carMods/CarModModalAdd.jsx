import React, { useState } from 'react'
import { Button, Form, Header, Image, Modal, TextArea } from 'semantic-ui-react'
import { addCarMod } from '../../../api/carmods';
import { addCategory } from '../../../api/categories';

const initState = {
    modification: '',
}

function CarModModalAdd({refetch}) {
    const [open, setOpen] = useState(false)

    const [carMod, setCarMod] = useState(initState);

    const onChange = (e) => {
        const { value, name } = e.target;

        setCarMod({ ...carMod, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await addCarMod(carMod);
        refetch() 
        setOpen(false);
    }

    return (
        <div style={{ zIndex: 20000, marginTop: 20 }}>
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button>Добавить модификацию</Button>}
            >
                <Modal.Header>Добавить модификацию    </Modal.Header>
                <Modal.Content image>
                    <Modal.Description style={{maxWidth: 500}}>
                        <Form onSubmit={handleSubmit} >
                            <Form.Field>
                                <label>Название</label>
                                <input placeholder='First Name' name='modification' onChange={onChange} value={carMod.modification} />
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

export default CarModModalAdd;