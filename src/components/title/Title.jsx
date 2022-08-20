import React from "react";
import "./title.scss"
import hotelIcon from "../../assets/images/hotel-icon.png";

const Title = (props) => {
  const { title, normal } = props;
  return (
    <div className={`${normal ? "title normal" : "title"}`}>
      <img src={hotelIcon} alt={title} />
      <h2>{title}</h2>
    </div>
  );
};

export default Title;
