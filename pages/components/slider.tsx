import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { Media } from '../../types/product'
import Image from 'next/image'

import styles from '../../styles/Home.module.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { FunctionComponent } from 'react';


const Slider: FunctionComponent<{ mediaImages: Media[] }> = ({ mediaImages }) => {
        return (
                <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation
                        loop={true}
                        pagination={{ clickable: true }}>
                        {mediaImages.map((image, index) => {
                                return <SwiperSlide key={index} ><img alt='img' src={mediaImages[index].image_sizes.original} className={styles.SlideImage} /></SwiperSlide>
                        })}
                </Swiper>
        )
}

export default Slider;