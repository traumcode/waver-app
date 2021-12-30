import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import 'swiper/swiper.min.css';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';

import SwiperCore, { Navigation, Pagination } from 'swiper';

SwiperCore.use([ Pagination, Navigation ]);


export default function SwiperCarousel(props) {
	const [ swiperRef, setSwiperRef ] = useState(null);


	return (
		<>
			<Swiper onSwiper={setSwiperRef} slidesPerView={3}  loop={true} spaceBetween={30} pagination={{
				"type": "fraction"
			}} navigation={true} className="mySwiper">
				{props.relatedArtists?.artists?.map((artist, index) => {
					return (
						<SwiperSlide key={index}><img src={artist.images[0]?.url} alt=''/><h1 className='swiper-artist-name'>{artist.name}</h1></SwiperSlide>
					)
				},)}
			</Swiper>
		</>
	)
};