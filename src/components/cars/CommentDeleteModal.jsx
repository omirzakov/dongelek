import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { deleteComment } from '../../api/comment'

function CommentDeleteModal({ id, refetch }) {
  const [open, setOpen] = React.useState(false)

  const handleDeleteComment = async () => {
    const res = await deleteComment(id);
    refetch();
    setOpen(false);
  }

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='tiny'
      trigger={<Button>Удалить комментарий</Button>}
    >
      <Header icon>
        <Icon name='archive' />
        Вы действительно хотите удалить свой комментарий?
      </Header>
      <Modal.Actions>
        <Button basic color='red' inverted onClick={() => setOpen(false)}>
          <Icon name='remove' /> Нет
        </Button>
        <Button color='green' inverted onClick={handleDeleteComment}>
          <Icon name='checkmark' /> Да
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default CommentDeleteModal;