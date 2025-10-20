// src/pages/Docent.js

import React, { useState } from "react";
import "../styles/Docent.css";
import ArtworkCard from "../components/ArtworkCard";

import searchIcon from "../assets/icons/search.png";
import cartIcon from "../assets/icons/cart.png";
import heartIcon from "../assets/icons/heart.png";
import eventWide from "../assets/images/event-wide.png";


export default function Docent() {
  const [activeTag, setActiveTag] = useState("원화");

  const tags = ["원화", "NFT", "비회화"];

  const artworks = [
    {
      mainImage: "/img/art1.png",
      artistImage: "/img/artist1.png",
      tag: "원화",
      title: "봄의 정원",
      price: "1,000,000원",
      count: "3회",
    },
    {
      mainImage: "/img/art2.png",
      artistImage: "/img/artist2.png",
      tag: "NFT",
      title: "디지털 나비",
      price: "2,500,000원",
      count: "5회",
    },
    {
      mainImage: "/img/art3.png",
      artistImage: "/img/artist3.png",
      tag: "비회화",
      title: "도자기 항아리",
      price: "800,000원",
      count: "2회",
    },
    {
      mainImage: "/img/art4.png",
      artistImage: "/img/artist4.png",
      tag: "원화",
      title: "푸른 산맥",
      price: "1,200,000원",
      count: "4회",
    },
    {
      mainImage: "/img/art5.png",
      artistImage: "/img/artist5.png",
      tag: "NFT",
      title: "AI Dreamscape",
      price: "3,000,000원",
      count: "1회",
    },
    {
      mainImage: "/img/art6.png",
      artistImage: "/img/artist6.png",
      tag: "비회화",
      title: "청동 조각",
      price: "900,000원",
      count: "6회",
    },
  ];

  const filteredArtworks = artworks.filter((a) => a.tag === activeTag);

  return (
    <div className="Docent">
      {/* --- Navbar --- */}
      <div className="navbar">
        <img className="nav-icon"
          src={searchIcon}>
        </img>
        <img className="nav-icon"
          src={cartIcon}>
        </img>
        <img className="nav-icon"
          src={heartIcon}>
        </img>      
      </div>

      {/* --- Auction NavBar --- */}
      <div className="auction-navbar">
        <div className="auction-tab active">진행 중</div>
        <div className="auction-tab">오픈 예정</div>
        <div className="auction-tab">판매 종료</div>
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
        {filteredArtworks.map((art, i) => (
          <ArtworkCard key={i} {...art} />
        ))}
      </div>
    </div>
  );
}
