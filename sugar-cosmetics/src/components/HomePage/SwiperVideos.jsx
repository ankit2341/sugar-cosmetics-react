import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { Modal } from "react-bootstrap";
import { EffectCards } from "swiper";

export default function SwiperVideos() {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(true);
  }
  return (
    <>
      <Swiper
        effect={"coverflow"}
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
        <SwiperSlide>
          <img
            onClick={() => handleShow()}
            style={{ width: "100%", height: "450px", borderRadius: "15px" }}
            src="https://i.postimg.cc/Nj5hxkvL/sc1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            onClick={() => handleShow()}
            style={{ width: "100%", height: "450px", borderRadius: "15px" }}
            src="https://i.postimg.cc/1t0bzWw7/sc2.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            onClick={() => handleShow()}
            style={{ width: "100%", height: "450px", borderRadius: "15px" }}
            src="https://i.postimg.cc/xTphqNNQ/sc3.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            onClick={() => handleShow()}
            style={{ width: "100%", height: "450px", borderRadius: "15px" }}
            src="https://i.postimg.cc/26YXg4MQ/sc4.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            onClick={() => handleShow()}
            style={{ width: "100%", height: "450px", borderRadius: "15px" }}
            src="https://i.postimg.cc/jSJg5gr6/sc5.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            onClick={() => handleShow()}
            style={{ width: "100%", height: "450px", borderRadius: "15px" }}
            src="https://i.postimg.cc/wjJ2H1h0/sc6.jpg"
          />
        </SwiperSlide>
      </Swiper>
      <Modal
        style={{ backgroundColor: "black" }}
        show={show}
        fullscreen={fullscreen}
        onHide={() => setShow(false)}
      >
        <Modal.Header
          style={{ backgroundColor: "black", color: "#fff", border: "none" }}
          closeButton
          closeVariant="white"
        >
          {/* <Modal.Title>SUGAR STREAMING</Modal.Title> */}
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "black", paddingTop: "60px" }}>
          <Swiper
            effect={"cards"}
            initialSlide="2"
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper_1"
          >
            <SwiperSlide>
              <video width="750" height="500" controls>
                <source
                  src="https://cdn4.fireworktv.com/medias/2022/10/11/1665491445-phqugwak/watermarked/540/WhatsAppVideo2022-10-11at5.29.57PM1.mp4"
                  type="video/mp4"
                />
              </video>
            </SwiperSlide>

            <SwiperSlide>
              <video width="750" height="500" controls>
                <source
                  src="https://cdn4.fireworktv.com/medias/2022/10/11/1665493086-gcxeskvq/watermarked/540/WhatsAppVideo2022-10-11at6.15.56PM.mp4"
                  type="video/mp4"
                />
              </video>
            </SwiperSlide>

            <SwiperSlide>
              <video width="750" height="500" controls>
                <source
                  src="https://cdn4.fireworktv.com/medias/2022/10/11/1665492500-vohfmcja/watermarked/540/WhatsAppVideo2022-10-11at6.16.01PM.mp4"
                  type="video/mp4"
                />
              </video>
            </SwiperSlide>

            <SwiperSlide>
              <video width="750" height="500" controls>
                <source
                  src="https://cdn4.fireworktv.com/medias/2022/10/3/1664796426-engtdrkq/watermarked/540/WhatsAppVideo2022-10-03at4.52.52PM.mp4"
                  type="video/mp4"
                />
              </video>
            </SwiperSlide>

            <SwiperSlide>
              <video width="750" height="500" controls>
                <source
                  src="https://cdn4.fireworktv.com/medias/2022/10/3/1664797725-ipvozena/watermarked/540/WhatsAppVideo2022-10-03at4.52.57PM.mp4"
                  type="video/mp4"
                />
              </video>
            </SwiperSlide>

            <SwiperSlide>
              <video width="750" height="500" controls>
                <source
                  src="https://cdn4.fireworktv.com/medias/2022/10/3/1664797925-hokacjms/watermarked/540/WhatsAppVideo2022-10-03at4.52.59PM.mp4"
                  type="video/mp4"
                />
              </video>
            </SwiperSlide>
          </Swiper>
        </Modal.Body>
      </Modal>
    </>
  );
}
