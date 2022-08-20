import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import "./menu.scss";

export const menuItem = [

  { index: 1, text: "SPECIAL", path: "/a" },
  { index: 2, text: "OFFER", path: "/b" },
  { index: 3, text: "FACILITIES", path: "/c" },
  { index: 4, text: "GALLERY", path: "/d" },
];

export const menuItemDrop = [
  { index: 0, text: "MULTI VIEW STUDIO", path: "/detail" },
  { index: 1, text: "OCEAN VIEW STUDIO", path: "/aa" },
  { index: 2, text: "ONE BEDROOM SUITE", path: "/a" },
  { index: 3, text: "ONE BEDROOM PREMIER SUITE", path: "/b" },
  { index: 4, text: "TWO BEDROOM SUITE", path: "/c" },
  { index: 5, text: "TWO BEDROOM PREMIER SUITE", path: "/d" },
  { index: 6, text: "THREE BEDROOM GRAND SUITE", path: "/d" },
  { index: 5, text: "FOUR BEDROOM GRAND SUITE", path: "/d" },
];

const Menu = () => {
  const [menu, setMenu] = useState(false);
  const [menuDrop, setMenuDrop] = useState(false);
  const [numHover, setNumHover] = useState(0);
  const listRef = useRef(null);
  const listDropRef = useRef(null);
  const menuRef = useRef(null);
  const { height, width } = useWindowDimensions();
  const activeLink = ({ isActive }) => {
    return isActive ? "active" : "";
  };
 

  useEffect(() => {
    if (width > 768) listRef.current.classList.remove("open");
  }, [width]);

  const mouse = useCallback(() => {
    setMenuDrop(true);
  }, [menuDrop === false]);
  const mouseLeave = useCallback(() => {
    setMenuDrop(false);
  }, [menuDrop === true]);

  return (
    <div className="menu">
      <ul className={`${menu ? "menu_view open" : "menu_view"}`}>
        <li>
          <NavLink className={activeLink} to="/">
            DESTINATION
          </NavLink>
        </li>
        <li
          ref={menuRef}
          className={`${menuDrop ? "menu_item_drop hover" : "menu_item_drop"}`}
          onMouseEnter={mouse}
          onMouseLeave={mouseLeave}
        >
          ACCOMMODATION
        </li>
        {menuItem.map((eml, i) => {
          return (
            <li ref={listRef} key={i}>
              <NavLink className={activeLink} to={eml.path}>
                {eml.text}
              </NavLink>
            </li>
          );
        })}
        <li className="menu_last">
          <span>THE COSTA NHA TRANG RESIDENCES</span>
        </li>
      </ul>
      <ul
        onMouseEnter={mouse}
        onMouseLeave={mouseLeave}
        className={`${menuDrop ? "menu_drop menu_drop_open" : "menu_drop"}`}
      >
        {menuItemDrop.map((eml) => (
          <li>
            <NavLink className={activeLink} to={eml.path}>
              {eml.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
