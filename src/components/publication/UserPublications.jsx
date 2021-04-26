import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Container, Grid, Image, List } from "semantic-ui-react";
import { userPublication } from "../../api/publications";
import { AuthContext } from "../../App";
import ScreenLoader from "../general/ScreenLoader";



const UserPublications = () => {
    const { cookie } = useContext(AuthContext);
    const [publications, setPublications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        if (cookie.token) {
            const res = await userPublication(cookie.token);
            setPublications(res.data);
            setLoading(false);
        }
    }, []);

    return (
        <Container>
            <h1>Ваши активные объявления</h1>
            {
                loading ? <ScreenLoader /> :
                    publications.map((publication) => (
                        <div style={{ marginBottom: 20 }}>
                            <Link to={`/publication/${publication.id}/`}>
                                <Grid>
                                    <Grid.Column width="2">
                                        <Image src={publication.picture} size="tiny" />
                                    </Grid.Column>
                                    <Grid.Column width="11">
                                        <h3>{publication.name}</h3>
                                    </Grid.Column>
                                    <Grid.Column width="3">
                                        <Button secondary>Архивировать</Button>
                                    </Grid.Column>
                                </Grid>
                            </Link>
                        </div>
                    ))
            }
        </Container>
    );
}
export default UserPublications;