// src/components/NavbarBottom.js
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavbarBottom.css";

const navItems = [
  { id: "home", label: "Home", icon: "../icons/home.png", iconActive: "../icons/homeHover.png", path: "/home" },
  { id: "docent", label: "Docent", icon: "../icons/docent.png", iconActive: "../icons/docentHover.png", path: "/docent" },
  { id: "market", label: "Market", icon: "../icons/market.png", iconActive: "../icons/marketHover.png", path: "/market" },
  { id: "article", label: "Article", icon: "../icons/article.png", iconActive: "../icons/articleHover.png", path: "/article" },
  { id: "myPage", label: "MyPage", icon: "../icons/mypage.png", iconActive: "../icons/mypageHover.png", path: "/myPage" },
];

export default function NavbarBottom() {
  return (
    <nav className="navbar-bottom">
      <div className="navbar-content">
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              `nav-item ${isActive ? "active" : ""}`
            }
          >
            {({ isActive }) => (
              <>
                <img
                  src={isActive ? item.iconActive : item.icon}
                  alt={item.label}
                  className="nav-icon"
                />
                <span className="nav-label">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
