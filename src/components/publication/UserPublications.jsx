import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Container, Grid, Image, List } from "semantic-ui-react";
import { deletePublication, userPublication } from "../../api/publications";
import { AuthContext } from "../../App";
import DeleteItem from "../general/DeleteItem";
import ScreenLoader from "../general/ScreenLoader";



const UserPublications = () => {
    const { cookie } = useContext(AuthContext);
    const [publications, setPublications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        const token = localStorage.getItem("jwt");
        if (token) {
            const res = await userPublication(token);
            setPublications(res.data);
            setLoading(false);

        }
    }, []);

    return (
        <Container>
            {
                publications.length > 0 && <h1>Ваши активные объявления</h1>
            }
            {
                loading ? <ScreenLoader /> :
                    publications.length > 0 ? publications.map((publication) => (
                        <div key={publication.id} style={{ marginBottom: 20 }}>
                            <Grid>
                                <Grid.Column width="2">
                                    <Link to={`/publication/${publication.id}/`}>
                                        <Image src={publication.picture} size="tiny" />
                                    </Link>
                                </Grid.Column>
                                <Grid.Column width="11">
                                    <h3>{publication.name}</h3>
                                </Grid.Column>
                                <Grid.Column width="3">
                                    <DeleteItem fetch={deletePublication} refetch={userPublication} id={publication.id} />
                                </Grid.Column>
                            </Grid>
                        </div>
                    )) : <h2>У вас нет активных объявлении</h2>
            }
        </Container>
    );
}
export default UserPublications;