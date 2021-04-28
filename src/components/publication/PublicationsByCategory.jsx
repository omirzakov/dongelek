import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Container, Grid } from "semantic-ui-react";
import { getCategories } from "../../api/categories";
import Navbar from "../navbar/Navbar";
import { getAllPublicationByCategoryName } from "../../api/publications"
import CarList from "../cars/CarList";



const PublicationsByCategory = () => {
    const { name } = useParams();
    const [publications, setPublications] = useState([]);
    const [categories, setCategories] = useState([]);



    useEffect(async () => {
        loadData();
    }, [])

    useEffect(() => {
        loadData();
    }, [name]);

    const loadData = async () => {
        const resCategories = await getCategories();
        const resPublications = await getAllPublicationByCategoryName(name);
        setCategories(resCategories);
        setPublications(resPublications.data);
    }


    return (
        <Container>
            <Grid>
                <Grid.Column width="5">
                    <Navbar />
                </Grid.Column>
                <Grid.Column width="11" className="main-content">
                    <div className='category-list'>
                        <Link to='/'>Все</Link>
                        {
                            categories && categories.length > 0 && categories.map((category, i) => (
                                <Link key={i} to={`/publications/${category.slug}`}>{category.name}</Link>

                            ))
                        }
                    </div>
                    <CarList publications={publications} />
                </Grid.Column>
            </Grid>
        </Container>
    );
}
export default PublicationsByCategory;