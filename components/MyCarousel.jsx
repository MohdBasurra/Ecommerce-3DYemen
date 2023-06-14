import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper/core";
import Image from "next/image";
import Image1 from "../images/Image1.jpg";
import Image2 from "../images/Image2.jpg";
import Image3 from "../images/Image3.jpg";
import Image4 from "../images/Image4.jpg";

import "swiper/swiper.min.css";

SwiperCore.use([Autoplay]);

const Carousel = () => {
  const images = [Image1, Image2, Image3, Image4];

  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (swiper) {
      swiper.autoplay.start();
    }
  }, [swiper]);

  return (
    <div className="w-full h-full">
      {" "}
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
            <div className="  h-1/2     ">
              <div className="  flex flex-col justify-center   items-center w-full h-1/4 ">
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  height={400}
                  width={10000}
                  objectFit="cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
