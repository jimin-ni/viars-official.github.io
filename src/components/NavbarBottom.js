// src/components/NavbarBottom.js
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavbarBottom.css";

// ✅ 아이콘 import
import homeIcon from "../assets/icons/home.png";
import homeHoverIcon from "../assets/icons/homeHover.png";
import docentIcon from "../assets/icons/docent.png";
import docentHoverIcon from "../assets/icons/docentHover.png";
import marketIcon from "../assets/icons/market.png";
import marketHoverIcon from "../assets/icons/marketHover.png";
import articleIcon from "../assets/icons/article.png";
import articleHoverIcon from "../assets/icons/articleHover.png";
import mypageIcon from "../assets/icons/mypage.png";
import mypageHoverIcon from "../assets/icons/mypageHover.png";

const navItems = [
  { id: "home", label: "HOME", icon: homeIcon, iconActive: homeHoverIcon, path: "/home" },
  { id: "docent", label: "DOCENT", icon: docentIcon, iconActive: docentHoverIcon, path: "/docent" },
  { id: "auction", label: "AUCTION", icon: marketIcon, iconActive: marketHoverIcon, path: "/auction" },
  { id: "article", label: "ARTICLE", icon: articleIcon, iconActive: articleHoverIcon, path: "/article" },
  { id: "myPage", label: "MY PAGE", icon: mypageIcon, iconActive: mypageHoverIcon, path: "/myPage" },
];

export default function NavbarBottom() {
  return (
    <nav className="navbar-bottom">
      <div className="navbar-content">
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
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
