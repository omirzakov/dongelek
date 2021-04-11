import React from "react";

import { Grid } from "@material-ui/core";
import Navbar from "../navbar/Navbar";
import CarList from "../cars/CarList";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


const Home = () => {

    return (
        <>  

            <Grid item xs={3} spacing={5}>
                <Navbar />
            </Grid>
            <Grid item xs={9} spacing={5} className="main-content">
                <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <img src="https://frankfurt.apollo.olxcdn.com/v1/files/ma22v3k2w5513-KZ/image;s=1000x700" style={{maxWidth:"100%", height:"150px"}} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://m.pln24.ru/pictures/190520093526.jpg" style={{maxWidth:"100%", height:"150px"}}  alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://frankfurt.apollo.olxcdn.com/v1/files/m11q19ailpse1-KZ/image;s=644x461" style={{maxWidth:"100%", height:"150px"}} alt=""/>
                    </SwiperSlide>
                </Swiper>
                <CarList />
            </Grid>
        </>
    );
}
export default Home;