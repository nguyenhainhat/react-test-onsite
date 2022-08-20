import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import slide1 from "../../assets/images/slide-1.jpg";
import slide2 from "../../assets/images/slide-2.jpg";
import slide3 from "../../assets/images/slide-3.jpg";
import "./slider.scss";

const slideItem = [
  {
    text: "RELAXATION TIME",
    img: slide1,
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    text: "CREATING VALUES",
    img: slide2,
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    text: "HOUSE OF THE SEA",
    img: slide3,
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
];

const Slider = () => {
  return (
    <Swiper
      slidesPerView={1}
      navigation={true}
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {slideItem.map((item) => {
        const bgSlide = {
          backgroundImage: `url("${item.img}")`,
        };

        return (
          <SwiperSlide>
            <div className="slider_item" style={bgSlide}>
              <div className="slider_item_container">
                <h5>Welcome to The Costa Nha Trang</h5>
                <h2>{item.text}</h2>
                <span></span>
                <p>{item.title}</p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
