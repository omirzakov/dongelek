import React, { useEffect, useState } from 'react'
import { Button, Form, Header, Image, Modal, TextArea } from 'semantic-ui-react'
import { addBank } from '../../../api/bank';
import { addCategory, getCategories } from '../../../api/categories';

const initState = {
    name: "",
    picture: ""
}

function BankAdd() {
    const [open, setOpen] = useState(false);
    const [bank ,setBank] = useState(initState);

    const onChange = (e) => {
        const { value, name } = e.target;

        setBank({ ...bank, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await addBank(bank);

        console.log(res)
        setOpen(false);
        window.location.reload();   
    }

    useEffect(async () => {

    }, [])

    console.log(bank)

    return (
        <div style={{ zIndex: 20000, marginTop: 20 }}>
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button>Добавить банк</Button>}
            >
                <Modal.Header>Добавить банк    </Modal.Header>
                <Modal.Content image>
                    <Modal.Description style={{maxWidth: 500, margin: "0 auto"}}>
                        <Form onSubmit={handleSubmit} >
                            <Form.Field>
                                <label>Название</label>
                                <input required placeholder='Название' name='name' onChange={onChange} value={bank.name} />
                            </Form.Field>
                            <div>
                                {
                                    bank.picture && <img src={bank.picture} width="75px" />
                                }
                            </div>
                            <Form.Field>
                                <label>Фотография</label>
                                <input required placeholder='Фото' name='picture' onChange={onChange} value={bank.picture} />
                            </Form.Field>

                            <Modal.Actions>
                                <Button color='black' onClick={() => setOpen(false)}>
                                    Закрыть
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

export default BankAdd;