import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper/core";
import "swiper/swiper.min.css";

SwiperCore.use([Autoplay]);

const Carousel = () => {
  const images = [
    "https://via.placeholder.com/1540x400/ff0000/ffffff",
    "https://via.placeholder.com/1540x400/00ff00/ffffff",
    "https://via.placeholder.com/1540x400/00fff0/ffffff",
    "https://via.placeholder.com/1540x400/0000ff/ffffff"
  ];

  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (swiper) {
      swiper.autoplay.start();
    }
  }, [swiper]);

  return (
    <div className="w-full">
      <Swiper
        onSwiper={setSwiper}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        loop={true}
        navigation={true}
        pagination={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;