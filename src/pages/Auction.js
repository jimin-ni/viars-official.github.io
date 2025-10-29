// src/pages/Auction.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auction.css";
import ArtworkCard from "../components/ArtworkCard";

import searchIcon from "../assets/icons/search.png";
import cartIcon from "../assets/icons/cart.png";
import heartIcon from "../assets/icons/heart.png";
import eventWide from "../assets/images/event-wide.png";
import NavbarBottom from "../components/NavbarBottom";
import { artworks } from "../data/artWorkData"; 

export default function Auction() {
  const [activeTag, setActiveTag] = useState("원화");
  const [activeStatus, setActiveStatus] = useState("진행 중");
  const navigate = useNavigate();

  const tags = ["원화", "NFT", "비회화"];
  const statusTabs = ["진행 중", "오픈 예정", "판매 종료"];

  // ✅ 외부 데이터 사용
  const filteredArtworks = artworks.filter(
    (a) => a.tag === activeTag && a.status === activeStatus
  );

  return (
    <div className="Auction">
      {/* --- Navbar --- */}
      <div className="navbar">
        <img className="nav-icon" src={searchIcon} alt="search" />
        <img className="nav-icon" src={cartIcon} alt="cart" />
        <img className="nav-icon" src={heartIcon} alt="heart" />
      </div>

      {/* --- Auction NavBar --- */}
      <div className="auction-navbar">
        {statusTabs.map((s) => (
          <div
            key={s}
            className={`auction-tab ${activeStatus === s ? "active" : ""}`}
            onClick={() => setActiveStatus(s)}
          >
            {s}
          </div>
        ))}
      </div>

      {/* --- Tag List --- */}
      <div className="tag-list">
        {tags.map((t) => (
          <div
            key={t}
            className={`tag ${activeTag === t ? "active" : ""}`}
            onClick={() => setActiveTag(t)}
          >
            {t}
          </div>
        ))}
      </div>

      {/* --- Event Image --- */}
      <img className="event-img-wide" src={eventWide} alt="event" />

      {/* --- Artwork Grid --- */}
      <div className="artwork-grid">
        {filteredArtworks.length > 0 ? (
          filteredArtworks.map((art) => (
            <div
              key={art.id}
              onClick={() => navigate(`/auction/${art.id}`, { state: art })}
              style={{ cursor: "pointer" }}
            >
              <ArtworkCard {...art} />
            </div>
          ))
        ) : (
          <p className="no-artwork">해당 조건의 작품이 없습니다.</p>
        )}
      </div>

      <NavbarBottom />
    </div>
  );
}
