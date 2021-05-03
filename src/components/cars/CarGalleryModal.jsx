import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import ImageGallery  from 'react-image-gallery';
import 'react-image-gallery/styles/scss/image-gallery.scss';
import './style.scss';

function CarGalleryModal({gallery, selected}) {
    const [open, setOpen] = React.useState(false)
    let images = gallery ? gallery.map((img) => ({original: img.picUrl, thumbnail: img.picUrl})) : [];

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<img src={gallery ? gallery[selected].picUrl : 'nopicture'} style={{ maxWidth: "100%", cursor:"pointer" }} alt="" />}
        >
            <Modal.Header>Галерея</Modal.Header>
            <Modal.Content image className="car-gallery">
                {
                    images && 
                    <ImageGallery items={images} startIndex={selected} />
                }
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={() => setOpen(false)}>
                    Закрыть
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default CarGalleryModal;