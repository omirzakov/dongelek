import React, { useEffect, useState } from "react";

import Navbar from "../navbar/Navbar";
import CarList from "../cars/CarList";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { getPublications } from "../../api/publications";
import { getCategories } from "../../api/categories";
import { Link, Route, Switch } from "react-router-dom";
import './style.scss';
import { Container, Grid } from "semantic-ui-react";
import PublicationsByCategory from "../publication/PublicationsByCategory";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);



const Home = () => {
    const [publications, setPublications] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(async () => {
        const resPublications = await getPublications();
        const resCategories = await getCategories();
        console.log(resPublications)
        console.log(resCategories)
        setPublications(resPublications.data);
        setCategories(resCategories);
    }, [])


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
                            categories && categories.map((category, i) => (
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
export default Home;