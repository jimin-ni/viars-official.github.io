// src/pages/Landing.js

import React, { useState } from "react";
import '../styles/Global.css'; 
import '../styles/Landing.css'; 
import "../styles/home.css";

// 이미지 import
import settingIcon from "../assets/icons/setting.png";
import alarmIcon from "../assets/icons/alarm.png";

import post1 from "../assets/images/post1.png";
import post2 from "../assets/images/post2.png";
import post3 from "../assets/images/post3.png";
import post4 from "../assets/images/post4.png";
import post5 from "../assets/images/post5.png";

import poster1 from "../assets/images/poster1.png";
import poster2 from "../assets/images/poster2.png";
import poster3 from "../assets/images/poster3.png";
import poster4 from "../assets/images/poster4.png";

import recommend1 from "../assets/images/recommend1.png";
import recommend2 from "../assets/images/recommend2.png";
import recommend3 from "../assets/images/recommend3.png";

import listen1 from "../assets/images/listen1.png";
import listen2 from "../assets/images/listen2.png";
import listen3 from "../assets/images/listen3.png";

import playBtn from "../assets/images/play.png";
import eventImg from "../assets/images/event.png";

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [post1, post2, post3, post4, post5];

  const handleSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="home">

      {/* 상단 고정 네비게이션 */}
      <div className="top-navbar">
        <img src={settingIcon} alt="setting" />
        <img src={alarmIcon} alt="alarm" />
      </div>

      {/* 상단 배너 */}
      <div className="banner">
        <img src={slides[activeSlide]} alt="main banner" className="banner-main" />
        <img src={post1} alt="background overlay" className="banner-bg" />

        <div className="banner-texts">
          <div className="text-box">첫 번째 텍스트</div>
          <div className="text-box">두 번째 텍스트</div>

          <div className="banner-indicators">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`indicator ${activeSlide === i ? "active" : ""}`}
                onClick={() => handleSlide(i)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 2번째 섹션: 월별 온라인 전시회 */}
      <section className="section">
        <h2>5월 온라인 전시회</h2>
        <div className="scroll-row">
          {[poster1, poster2, poster3, poster4].map((poster, i) => (
            <div className="monthly-card" key={i}>
              <img src={poster} alt={`poster ${i+1}`} />
              <div className="card-info">
                <p className="title">전시회 {i + 1}</p>
                <p className="date">2025.05.{i + 1} ~ 2025.06.{i + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3번째 섹션: 전시회 추천 */}
      <section className="section">
        <h2>춤추는 라마님을 위한 전시회</h2>
        <div className="scroll-row">
          {[recommend1, recommend2, recommend3].map((rec, i) => (
            <div className="recommend-card" key={i}>
              <img src={rec} alt={`recommend ${i+1}`} className="poster" />
              <div className="recommend-info">
                <p>추천 전시회 {i + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4번째 섹션: 이어듣기 */}
      <section className="section">
        <h2>이어듣기</h2>
        <div className="scroll-row">
          {[listen1, listen2, listen3].map((listen, i) => (
            <div className="listen-card" key={i}>
              <img src={listen} alt={`listen ${i+1}`} className="listen-img" />
              <div className="overlay" />
              <img src={playBtn} alt="play" className="play-btn" />
              <div className="listen-info">
                <p className="small-text">작품 {i + 1}</p>
                <p className="big-text">제목 {i + 1}</p>
              </div>
              <div className="progress-bar">
                <div className="progress" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5번째 섹션: 진행 중인 이벤트 */}
      <section className="section">
        <h2>진행 중인 이벤트</h2>
        <img src={eventImg} alt="event" className="event-img" />
      </section>

      {/* 하단 네비게이션 */}
      <nav className="bottom-navbar">
        <div className="nav-item">Home</div>
        <div className="nav-item">Docent</div>
        <div className="nav-item">Market</div>
        <div className="nav-item">Article</div>
        <div className="nav-item">Mypage</div>
      </nav>
    </div>
  );
}

export default Home;
