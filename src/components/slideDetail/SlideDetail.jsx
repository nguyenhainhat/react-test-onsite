import React from "react";
import Title from "../title/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
const SlideDetail = (props) => {
  const { type, item, title, normal } = props;
  return (
    <div
      className={`${type === "cate" ? "detail_cate" : "detail_room_container"}`}
    >
      <Title title={title} normal={normal} />
      <Swiper
        slidesPerView={1}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // when window width is >= 640px
          992: {
            slidesPerView: 3,
          },
        }}
      >
        <div className="detail_cate_block">
          {item.map((item) => (
            <SwiperSlide>
              <div key={item.index} className="detail_cate_item">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <img src={item.img} alt={item.title} />
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default SlideDetail;
