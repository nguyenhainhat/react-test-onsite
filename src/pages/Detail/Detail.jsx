import React from "react";
import bannerTop from "../../assets/images/banner-breadcrumb.jpg";
import Title from "../../components/title/Title";
import banner2 from "../../assets/images/banner-detail.jpg";
import banner3 from "../../assets/images/destination-2.jpg";
import banner4 from "../../assets/images/destination-3.jpg";
import offer1 from "../../assets/images/offer-1.jpg";
import offer2 from "../../assets/images/offer-2.jpg";
import offer3 from "../../assets/images/offer-3.jpg";
import { MdOutlineDoubleArrow } from "react-icons/md";
import "./detail.scss";
import SlideDetail from "../../components/slideDetail/SlideDetail";

const detailFour = [
  {
    index: 1,
    title: "Stone Church",
    desc: "Stone Church, also known as Mountain Church (official name: The Cathedral of Christ King) is a Catholic church in Nha Trang city, Khanh Hoa province..",
  },
  {
    index: 2,
    title: "Ponagar Tower",
    desc: "In the process of existence and development, the ancient Champa residents left a huge amount of cultural heritages, both in terms...",
  },
  {
    index: 3,
    title: "Long Son Pagoda",
    desc: "Located on Trai Thuy hill, Long Son pagoda is also known as White Buddha Pagoda and formerly known as Dang Long Tu. Built in the 19th century, with many renovations and rebuilt in 1940...",
  },
  {
    index: 4,
    title: "Vinpearl Land",
    desc: "Vinpearl Land Nha Trang (also known as Hon Ngoc Viet) is a 5-star international class tourist area, located on Hon Tre Island of Nha Trang Bay. This is a tourist destination complex...",
  },
];

const cateItem = [
  {
    index: 1,
    title: "CLIMATE, DEMOGRAPHIC",
    desc: "Experience an exquisite stay in Nha Trang City with breakfast for up to 02 people and a free late...",
    img: banner2,
  },
  {
    index: 2,
    title: "TRANSPORTATION",
    desc: "Experience an exquisite stay in Nha Trang City with breakfast for up to 02 people and a free late...",
    img: banner3,
  },
  {
    index: 3,
    title: "TOP FOOD CHOICES",
    desc: "Experience an exquisite stay in Nha Trang City with breakfast for up to 02 people and a free late...",
    img: banner4,
  },
];

const roomItem = [
  {
    index: 1,
    title: "BEACH ESCAPE PACKAGE",
    desc: "Experience an exquisite stay in Nha Trang City with breakfast for up to 02 people and a free late.",
    img: offer1,
  },
  {
    index: 2,
    title: "BEACH ESCAPE PACKAGE",
    desc: "Experience an exquisite stay in Nha Trang City with breakfast for up to 02 people and a free late.",
    img: offer2,
  },
  {
    index: 3,
    title: "BEACH ESCAPE PACKAGE",
    desc: "Experience an exquisite stay in Nha Trang City with breakfast for up to 02 people and a free late.",
    img: offer3,
  },
];

const Detail = () => {
  return (
    <div className="detail">
      <img src={bannerTop} alt="banner breadcrumb" />
      <div className="container">
        <div className="detail_reason">
          <div className="detail_reason_container">
            <Title title="TOP 5 REASONS TO VISIT" />
            <div className="detail_reason_page">
              <p>Home</p>
              <MdOutlineDoubleArrow />
              <p>Destination </p>
              <MdOutlineDoubleArrow />
              <p>Top 5 Reasons To Visit</p>
            </div>
            <p className="detail_reason_desc">
              Enjoy a vacation in luxury apartment with family at The Costa Nha
              Trang Residences - One of the most luxurious hotel apartments in
              Nha Trang city, with most rooms facing the sea, with full living
              room fully furnished and private balcony.
            </p>
          </div>
        </div>
        <div className="detail_four">
          <img src={banner2} alt="banner detail" />
          <div className="detail_four_content">
            <p>
              Nha Trang is a coastal city and the center of politics, economy,
              culture, science, technology and tourism of Khanh Hoa province,
              Vietnam. Previously, the land of Nha Trang belonged to Chiem
              Thanh, so the Cham monuments still exist in many places in Nha
              Trang. Nha Trang was recognized by the Prime Minister of Vietnam
              as a class I city on April 22, 2009. Nha Trang is known as the
              pearl of the East Sea, Green Gem for its natural value, beauty and
              gas. its posterity. This is the place known as Miami 2
            </p>
            {detailFour.map((item) => (
              <div className="detail_four_desc" key={item.index}>
                <p>
                  <b>
                    <u>
                      {item.index}. {item.title}:
                    </u>
                  </b>{" "}
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <SlideDetail
          type="cate"
          item={cateItem}
          title="OTHER DESTINATION CATEGORIES"
          normal
        />
      </div>
      <div className="detail_room">
        <div className="container">
          <SlideDetail type="room" item={roomItem} title="OTHER ROOMS OFFER" />
        </div>
      </div>
    </div>
  );
};

export default Detail;
