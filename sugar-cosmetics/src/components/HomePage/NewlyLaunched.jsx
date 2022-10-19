import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import TitleForall from "./TitleForall";

export default function NewlyLaunched() {
  return (
    <>
      <TitleForall titlename={"NEWLY LAUNCHED"} />
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        style={{ width: "95%", marginTop: "0px" }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "400px", borderRadius: "10px" }}
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/a1ea3283-9593-4f1c-8e6b-70c3a5062c37.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "400px", borderRadius: "10px" }}
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/37471559-27d1-4509-9e31-29d889be7036.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "400px", borderRadius: "10px" }}
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/f190c764-84cf-4eea-a381-8b701be65852.gif"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "400px", borderRadius: "10px" }}
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/89e51326-1363-44e1-94f1-d5bd00bd2ca9.gif"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "400px", borderRadius: "10px" }}
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/6985f902-c3fe-4a20-bc76-1658a9109fd1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "400px", borderRadius: "10px" }}
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/730cf92b-3d4a-4d08-bed8-db88e7911f32.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
