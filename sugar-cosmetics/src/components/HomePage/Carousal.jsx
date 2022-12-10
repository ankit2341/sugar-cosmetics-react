import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../styles/Carousal.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const images = 7;

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel
        style={{ marginTop: "00px", positon: "static" }}
        className="carousal"
        interval={2000}
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/75ec7af2-2b60-4c0a-9d56-c9e12d328420.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/1a5a5848-f287-4da7-b122-23ccb9324c83.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/2938eed1-8d16-4dec-bab2-f6e484adb659.gif"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/0a0d2b46-e424-4f4c-baf3-da2d2fc14f88.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/2d934fad-8c2a-4f7d-85fc-ea1ed8f23673.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/87591a7c-d8f8-499c-9562-c89000ef7e4a.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/1fa29c9d-b7b6-4aa9-ac54-a2195c10fc63.jpg"
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="hometopcarousel"></div>
    </>
  );
}
export default ControlledCarousel;
