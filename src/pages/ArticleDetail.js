// src/pages/ArticleDetail.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/ArticleDetail.css";
import backIcon from "../assets/icons/back.png";
import searchIcon from "../assets/icons/search.png";

export default function ArticleDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const art = state?.detail;

  if (!art) return <div className="error">잘못된 접근입니다.</div>;

  return (
    <div className="ArticleDetail">
      {/* --- Navbar --- */}
      <div className="detail-navbar">
        <img src={backIcon} alt="back" onClick={() => navigate(-1)} />
        <img src={searchIcon} alt="search" />
      </div>

      {/* --- 포스터 --- */}
      <img className="detail-main-img" src={art.poster} alt="poster" />

      {/* --- 텍스트 본문 --- */}
      <div className="detail-body">
        <div className="detail-title">{state.title}</div>
        <div className="detail-date">{art.date}</div>

{art.content.map((section, i) => (
  <div key={i} className="detail-section">
    {section.heading && <h4>{section.heading}</h4>}
    {section.text && <p>{section.text}</p>}
    {section.subImage && (
      <img
        className="detail-sub-img"
        src={
          typeof section.subImage === "string"
            ? section.subImage
            : section.subImage.default
        }
        alt={`detail-${i}`}
      />
    )}
  </div>
))}

      </div>
    </div>
  );
}
