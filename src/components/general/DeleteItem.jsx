import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

function DeleteItem({ fetch, refetch, id }) {
    const [open, setOpen] = React.useState(false)
    console.log(fetch)
    console.log(refetch)
    console.log(id)

    const handleDelete = async () => {
        const res = await fetch(id);
        window.location.reload();
        setOpen(false);
    }

    return (
        <Modal
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='tiny'
            trigger={<span style={{paddingLeft: 20, cursor: "pointer"}}>Удалить</span>}
        >
            <Header icon>
                <Icon name='archive' />
                Вы действительно хотите удалить?
            </Header>
            <Modal.Actions>
                <Button basic color='red' inverted onClick={() => setOpen(false)}>
                    <Icon name='remove' /> Нет
                </Button>
                <Button color='green' inverted onClick={handleDelete}>
                    <Icon name='checkmark' /> Да
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default DeleteItem