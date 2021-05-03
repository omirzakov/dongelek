import React, { useState } from 'react'
import { Button, Form, Modal, TextArea } from 'semantic-ui-react'
import { addReport } from '../../api/publications';
import { ToastContainer, toast } from 'react-toastify';

function PublicationReport({publication, user}) {
    const [open, setOpen] = useState(false)
    const [info, setInfo] = useState('');

    const handleSubmit = async () => {
        const data = {
            info,
            user,
            publication
        }

        const res = await addReport(data);

        if(res.status === 200) {
            toast.success("Жалоба успешно отправлена");

            setTimeout(() => {
                setOpen(false);
            }, 2000);
        }

    }


    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button size="tiny" color="red">Пожаловаться</Button>}
        >
            <Modal.Header>Пожаловаться</Modal.Header>
            <Modal.Content image>
                <Form style={{width:"100%"}}>
                    <TextArea placeholder='Опишите жалобу' name="info" onChange={(e) => setInfo(e.target.value)} style={{ minHeight: 100, width:"100%" }} />
                </Form>
            </Modal.Content>
            <Modal.Actions>
                    <Button color='black' onClick={() => setOpen(false)}>
                        Закрыть
                    </Button>
                    <Button
                        content="Отправить жалобу"
                        labelPosition='right'
                        icon='checkmark'
                        onClick={handleSubmit}
                        positive
                    />
            </Modal.Actions>
            <ToastContainer />
        </Modal>
    )
}

export default PublicationReport;