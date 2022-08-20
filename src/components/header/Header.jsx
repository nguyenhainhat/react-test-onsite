import React, { useState } from "react";
import logoHeader from "../../assets/images/logo-header.jpg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import "./header.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { menuItemDrop } from "../menu/Menu";
const menuItem = [
  { index: 0, text: "DESTINATION", path: "/detail" },
  { index: 1, text: "ACCOMMODATION", path: "/a" },
  { index: 2, text: "SPECIAL", path: "/a" },
  { index: 3, text: "OFFER", path: "/b" },
  { index: 4, text: "FACILITIES", path: "/c" },
  { index: 5, text: "GALLERY", path: "/d" },
];

const Header = () => {
  const { height, width } = useWindowDimensions();
  const [menu, setMenu] = useState(false);
  const headerRef = useRef(null);
  const headerMbRef = useRef(null);
  const headerMenuMb = useRef(null);
  const [menuDrop, setMenuDrop] = useState(false);

  const activeLink = ({ isActive }) => {
    return isActive ? "active" : "";
  };

  const isSticky = () => {
    if (window.scrollY > 50) {
      headerRef.current.classList.add("fixed");
    } else {
      headerRef.current.classList.remove("fixed");
    }
  };

  const handleMenuDrop = () => {
    setMenuDrop(!menuDrop);
  };

  const handleMouseLeave = () => {
    headerMbRef.current.classList.remove("header_mb_open")
    headerMenuMb.current.classList.remove("active-menu")
  }

  useEffect(() => {
    if (width <= 991) {
      setMenu(true);
    }
  }, [width <= 991]);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  return (
    <div ref={headerRef} className="header">
      <div className="container">
        <div className="header_container">
          <Link to="/">
            <img src={logoHeader} alt="logo header" />
          </Link>
          <div className="header_right">
            {width > 991 && (
              <>
                <div className="header_right_phone">
                  <BsFillTelephoneFill />
                  <p>+84 258 3737 222</p>
                </div>
                <div className="header_right_location">
                  <GrLocation />
                  <p>LOCATION</p>
                </div>
              </>
            )}

            <div className="header_right_select">
              <select name="lang" id="lang">
                <option value="english">English</option>
                <option value="janpan">Janpan</option>
              </select>
            </div>
            {width <= 991 && (
              <div
              ref={headerMenuMb}
                onClick={() => setMenu(!menu)}
                className={`${
                  menu ? "header_icon" : "header_icon active-menu"
                }`}
              ></div>
            )}
            <div
              className={`${
                width <= 991 ? "header_right_btn d-none" : "header_right_btn"
              }`}
            >
              <button className="btn btn_book">BOOK ONLINE</button>
              <button className="btn btn_room">ROOM PACKAGES</button>
            </div>
          </div>
        </div>
        {width <= 991 && (
          <div ref={headerMbRef} onMouseLeave={handleMouseLeave} className={`${menu ? "header_mb" : "header_mb header_mb_open"}`}>
            <ul>
              {menuItem.map((eml, i) => {
                return (
                  <li
                    key={i}
                    className={`${eml.index === 1 ? "header_mb_drop" : ""}`}
                  >
                    {eml.index !== 1 && (
                      <NavLink className={activeLink} to={eml.path}>
                        {eml.text}
                      </NavLink>
                    )}
                    {eml.index === 1 && (
                      <>
                        <span onClick={handleMenuDrop}>
                          {eml.text}
                          <AiOutlineArrowDown className={`${menuDrop && "rotate-180"}`} />
                        </span>
                        <ul
                          className={`${
                            menuDrop ? "mb_drop mb_drop_open" : "mb_drop"
                          }`}
                        >
                          {menuItemDrop.map((eml) => (
                            <li>
                              <NavLink className={activeLink} to={eml.path}>
                                {eml.text}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </li>
                );
              })}
              <li className="header_mb_last">
                <span>THE COSTA NHA TRANG RESIDENCES</span>
              </li>
              <li className="header_right_phone phone">
                <BsFillTelephoneFill />
                <p>+84 258 3737 222</p>
              </li>
              <li className="header_right_location location">
                <GrLocation />
                <p>LOCATION</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
