import React, { useEffect, useState, useContext } from "react";

import { Box, Button, Grid, Paper } from "@material-ui/core";
import "./style.scss";
import { addComment, getAllCommentsByPublication } from "../../api/comment";
import { useParams } from "react-router";
import { AuthContext } from "../../App";
import { validateToken } from "../../api/login";
import { getProfile } from "../../api/user";
import CommentDeleteModal from "./CommentDeleteModal";
import { Input, List } from "semantic-ui-react";
import { getCarGalleryFetch, getPublication } from "../../api/publications";



const images = [
    "https://photos-kl.kcdn.kz/webp/6f/6f09d574-b741-4951-9891-0b3a35d9d7cc/55-750x470.webp",
    "https://photos-kl.kcdn.kz/webp/6f/6f09d574-b741-4951-9891-0b3a35d9d7cc/54-750x470.webp",
    "https://photos-kl.kcdn.kz/webp/6f/6f09d574-b741-4951-9891-0b3a35d9d7cc/55-750x470.webp",
    "https://photos-kl.kcdn.kz/webp/6f/6f09d574-b741-4951-9891-0b3a35d9d7cc/57-750x470.webp",
    "https://photos-kl.kcdn.kz/webp/6f/6f09d574-b741-4951-9891-0b3a35d9d7cc/59-750x470.webp",
    "https://photos-kl.kcdn.kz/webp/6f/6f09d574-b741-4951-9891-0b3a35d9d7cc/60-750x470.webp",
]

const CarDetail = () => {
    const [selected, setSelected] = useState(0);
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState('');
    const [publication, setPublication] = useState(null);
    const [user, setUser] = useState({});
    const [gallery, setGallery] = useState();
    const { isAuth, cookie } = useContext(AuthContext);

    const { id } = useParams();

    const changeGallery = (id) => {
        setSelected(id);
    }

    useEffect(async () => {
        getCurrentUser();
        getPublicationInfo();
        getComments();
        getCarGallery();
    }, [])

    const getPublicationInfo = async () => {
        const res = await getPublication(id);
        setPublication(res.data);
    }

    const getComments = async () => {
        const { data } = await getAllCommentsByPublication(id);
        setComments(data);
    }

    const getCarGallery = async () => {
        const { data } = await getCarGalleryFetch(id);
        setGallery(data);
    }



    const getCurrentUser = async () => {
        const token = localStorage.getItem("jwt");
        if (token) {
            const res = await validateToken(token);

            if (res.data) {
                const data = await getProfile(token);
                console.log(data)
                setUser(data);
            }
        }
    }

    const handleAddComment = async () => {
        const data = {
            comment: commentText,
            publication: publication,
            isEdited: false,
            user: user
        }

        const res = await addComment(data);
        if (200 <= res.status && res.status <= 300) {
            getComments();
            setCommentText('')
        }
    }

    console.log(gallery)

    return (
        <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
                <Grid container>
                    <Grid item xs={5}>
                        <div>
                            <img src={gallery ? gallery[selected].picUrl : 'nopicture'} style={{ maxWidth: "100%" }} alt="" />
                        </div>
                        <Grid container>
                            {
                                gallery && gallery.map((image, i) => (
                                    <Grid item xs={3} key={i} style={{ cursor: "pointer" }} onClick={() => changeGallery(i)}>
                                        <img src={image.picUrl} className={i === selected && "active-gallery"} style={{ maxWidth: "100%" }} />
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                    {
                        publication &&
                        (
                        <Grid item xs={7} style={{ paddingLeft: 20 }}>
                            <h2>{publication.name}</h2>
                            <h3>Цена: {publication.price} тг</h3>
                            <h3>Год: {publication.year}</h3>
                            <p className="car-detail-info"><b>Марка</b>: {publication.car.name} </p>
                            <p className="car-detail-info"><b>Кол-во колес</b>: {publication.car.wheels} штук </p>
                            <p className="car-detail-info"><b>Кол-во двери</b>: {publication.car.doors} штук</p>
                            <h3>Дополнительные опции</h3>
                            <div className="car-mod-list">
                                {
                                    publication.carModifications.map((mod, i) => (
                                        <div className="car-mod-item">
                                            {mod.modification}
                                        </div>
                                    ))
                                }
                            </div>
                            <h3>Контакты:</h3>
                            <p className="car-detail-info"><b>Мобильный телефон</b>: {publication.contact} </p>
                            <p className="car-detail-info"><b>Почта</b>: {publication.email} </p>
                        </Grid>
                        )
                    }
                </Grid>
                <Grid container style={{ marginTop: 10 }}>
                    <Paper>
                        <Button color="primary"> Позвонить </Button>
                        <Button color="primary"> Написать сообщение </Button>
                        <Button color="inherit"> Пожаловаться </Button>
                    </Paper>
                </Grid>
                <br />
                {
                    isAuth ? <div>
                        <Input name='commentText' style={{width:"90%"}} value={commentText} onChange={(e) => setCommentText(e.target.value)} placeholder='Комментарий' />
                        <Button onClick={handleAddComment} color="primary"> Добавить комментарий</Button>
                    </div> :
                        <div>Чтобы добавить комментарий, войдите в профиль</div>
                }
                <Grid container style={{ marginTop: 30 }}>
                    {
                        comments && comments.map((comment) => (
                            <Grid key={comment.id} item xs={12} style={{ marginBottom: 10, padding: 10 }}>
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <Box>
                                        <span style={{ fontWeight: "bold" }}><b>{comment.user.email} </b></span>
                                        <span> {comment.comment} </span>
                                    </Box>
                                    <Box>
                                        {
                                            comment.user.id === user.id && <CommentDeleteModal refetch={getComments} id={comment.id} />
                                        }
                                    </Box>
                                </Box>
                            </Grid>
                        ))
                    }

                </Grid>
            </Grid>
            <Grid item xs={3}></Grid>
        </Grid>
    );
}
export default CarDetail;