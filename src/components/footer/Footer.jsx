import React from "react";
import Button from "../button/Button";
import "./footer.scss";
import offer1 from "../../assets/images/offer-1.jpg";
import offer2 from "../../assets/images/offer-2.jpg";
import offer3 from "../../assets/images/offer-3.jpg";
import logoFooter from "../../assets/images/logo-footer.jpg";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const bannerItem = [
  {
    img: offer1,
    title: "Stay BEACH ESCAPE PACKAGE",
    desc: "Free upgrade to room depending on check-in status",
  },
  {
    img: offer2,
    title: "Stay BEACH ESCAPE PACKAGE",
    desc: "Free upgrade to room depending on check-in status",
  },
  {
    img: offer3,
    title: "Stay BEACH ESCAPE PACKAGE",
    desc: "Free upgrade to room depending on check-in status",
  },
];

const Footer = (props) => {
  return (
    <div className="footer">
      {!props.bottom && (
        <>
          <div className="footer_top">
            <div className="container">
              <div className="footer_top_container">
                <div className="footer_top_title">
                  <p>
                    Enjoy a vacation in luxury apartments with family at The
                    Costa Nha Trang Residences
                  </p>
                  <h2>SPECIAL HOLIDAY OFFER</h2>
                </div>
                <Button
                  className="btn_main btn_book"
                  arrow
                  children="BOOK NOW"
                />
              </div>
            </div>
          </div>
          <div className="footer_banner">
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
              {bannerItem.map((item) => {
                return (
                  <SwiperSlide>
                    <div
                      className="footer_banner_item"
                      style={{ backgroundImage: `url("${item.img}")` }}
                    >
                      <h5 style={{ color: "#9A8757" }}>Stay</h5>
                      <h5>{item.title}</h5>
                      <p>{item.desc}</p>
                      <Button arrow children="VIEW OFFER" />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </>
      )}
      <div className="footer_bottom">
        <div className="container">
          <div className="footer_bottom_container">
            <div className="footer_bottom_info">
              <h3>CONTACT</h3>
              <p>32-34 Tran Phu, Nha Trang, Vietnam</p>
              <p>reservation@thecostanhatrang.com</p>
              <p>+84 258 3737 222</p>
            </div>
            <div className="footer_bottom_banner">
              <img src={logoFooter} alt="logo costa dark" />
              <p>Located in the heart of the beautiful city of Nha Trang</p>
            </div>
            <div className="footer_bottom_link">
              <h3>NEWSLETTER</h3>
              <form action="#!">
                <input type="text" placeholder="E-Mail" />
                <button type="submit">
                  <RiSendPlaneFill />
                </button>
              </form>
              <div className="footer_bottom_social">
                <FaFacebookF />
                <FaInstagram />
                <FaYoutube />
              </div>
            </div>
          </div>
          <p className="link">
            © 2021 The Costa Nha Trang | Designed and developed by Sweetsoft JSC
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
