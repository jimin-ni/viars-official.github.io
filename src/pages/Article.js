// src/pages/Article.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Article.css";
import { articles } from "../data/ArticleData";

import searchIcon from "../assets/icons/search.png";
import NavbarBottom from "../components/NavbarBottom";


export default function Article() {
  const [activeTab, setActiveTab] = useState("큐레이션");
  const navigate = useNavigate();

  const tabs = ["큐레이션", "작가 인터뷰", "서비스"];

  return (
    <div className="Article">
      {/* --- 상단 네비게이션 --- */}
      <div className="navbar">
        <img className="nav-icon" src={searchIcon} alt="search" />
      </div>

      {/* --- 탭 네비게이션 --- */}
      <div className="article-navbar">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`article-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* --- 탭별 콘텐츠 --- */}
      <div className="article-grid">
        {articles[activeTab].map((item) => (
          <div
            key={item.id}
            className="article-card"
            onClick={() => navigate(`/article/${item.id}`, { state: item })}
          >
            <img className="article-img" src={item.image} alt={item.title} />
            <div className="article-tag">{item.tag}</div>
            <div className="article-title">{item.title}</div>
            <div className="article-subtitle">{item.subtitle}</div>
          </div>
        ))}
      </div>
      <NavbarBottom />
    </div>
  );
}
