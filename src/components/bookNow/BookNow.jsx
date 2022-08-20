import React from "react";
import { useState } from "react";
import "./bookNow.scss";
import "../button/button.scss"
const BookNumItem = [
  { title: "ROOMS", value: 1, value2: 2 },
  { title: "ADULT", value: 1, value2: 2 },
  { title: "CHILDREN", value: 0, value2: 1 },
];

const BookNow = () => {

  const [formItem, setFormItem] = useState([]);
  const BookDateItem = [
    { title: "CHECK-IN", type: "date", value: "2017-06-01" },
    { title: "CHECK-OUT", type: "date", value: "2017-06-02" },
  ];

  const handleChange = (e) => {
    setFormItem([{ [e.target.name]: e.target.value }, ...formItem]);
  };

  const handleClick = (e) => {
    e.preventDefault();
    localStorage.setItem("booking",  JSON.stringify(formItem))
  };

  return (
    <div className="bookNow">
      <div className="container">
        <div className="bookNow_container">
          <form action="#!" className="form">
            <div className="form_container">
              {BookDateItem.map((item) => (
                <div className="form_item">
                  <label>{item.title}</label>
                  <input
                    type={item.type}
                    name={item.title}
                    value={item.value}
                    onChange={handleChange}
                  />
                </div>
              ))}
              {BookNumItem.map((item) => (
                <div className="form_item">
                  <label>{item.title}</label>
                  <select
                    name={item.title}
                    className="form_num"
                    id=""
                    onChange={handleChange}
                  >
                    <option value={item.value}>{item.value}</option>
                    <option value={item.value2}>{item.value2}</option>
                  </select>
                </div>
              ))}
              <button onClick={handleClick} className="btn btn_main btn_book">
                BOOK NOW
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
