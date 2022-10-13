import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function SwiperVideos() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        style={{width:"80%",height:"450px",marginTop:"20px"}}
        grabCursor={true}
        centeredSlides={true}
        autoplay={true}
        slidesPerView={"4"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 10,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        initialSlide="2"
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide >
          <img style={{width:"100%",height:"450px",borderRadius:"15px"}} src="https://i.postimg.cc/Nj5hxkvL/sc1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width:"100%",height:"450px",borderRadius:"15px"}} src="https://i.postimg.cc/1t0bzWw7/sc2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width:"100%",height:"450px",borderRadius:"15px"}} src="https://i.postimg.cc/xTphqNNQ/sc3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width:"100%",height:"450px",borderRadius:"15px"}} src="https://i.postimg.cc/26YXg4MQ/sc4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width:"100%",height:"450px",borderRadius:"15px"}} src="https://i.postimg.cc/jSJg5gr6/sc5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width:"100%",height:"450px",borderRadius:"15px"}} src="https://i.postimg.cc/wjJ2H1h0/sc6.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
