// src/pages/Home.js
import React, { useState, useEffect, useRef } from "react";
import '../styles/Global.css'; 
import '../styles/Landing.css'; 
import "../styles/home.css";

import settingIcon from "../assets/icons/setting.png";
import alarmIcon from "../assets/icons/alarm.png";
import homeBannerVector from "../assets/images/homeBannerVector.png"; // 추가

import post1 from "../assets/images/exhibition/TheReturn.png";
import post2 from "../assets/images/exhibition/TheMutableLine.jpg";
import post3 from "../assets/images/exhibition/TheRadiance.jpg";
import post4 from "../assets/images/exhibition/TheWholeWorld’sACanvas.png";
import post5 from "../assets/images/exhibition/2025아시아프.png";

import poster1 from "../assets/images/exhibition/Mia's Zoo.jpg";
import poster2 from "../assets/images/exhibition/TreeInTree_square.jpg";

import recommend1 from "../assets/images/exhibition/2025아시아프.png"
import recommend2 from "../assets/images/exhibition/MagicForLove.jpg";
import recommend3 from "../assets/images/exhibition/TheRadiance.jpg";

import listen1 from "../assets/images/exhibition/listen_magic for love2.png";
import listen2 from "../assets/images/exhibition/listen_james turrell.png";
import listen3 from "../assets/images/exhibition/listen_magic for love.png";

import playBtn from "../assets/icons/play.png";
import eventImg from "../assets/images/event.png";

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [post1, post2, post3, post4, post5];
  const bannerRef = useRef(null);

  // 3.5초마다 자동 슬라이드
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // 스와이프 기능
  useEffect(() => {
    const banner = bannerRef.current;
    let startX = 0;
    let endX = 0;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
    };
    const handleTouchEnd = (e) => {
      endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) {
        setActiveSlide((prev) => (prev + 1) % slides.length); // 다음
      } else if (endX - startX > 50) {
        setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length); // 이전
      }
    };

    banner.addEventListener("touchstart", handleTouchStart);
    banner.addEventListener("touchend", handleTouchEnd);

    return () => {
      banner.removeEventListener("touchstart", handleTouchStart);
      banner.removeEventListener("touchend", handleTouchEnd);
    };
  }, [slides.length]);

  return (
    <div className="home">

      {/* 상단 고정 네비게이션 */}
      <div className="top-navbar">
        <img
          src={settingIcon}
          alt="setting"
          className="nav-icon"
          onClick={() => (window.location.href = "/mypage")}
        />
        <img src={alarmIcon} alt="alarm" className="nav-icon" />
      </div>

      {/* 상단 배너 */}
      <div className="banner" ref={bannerRef}>
        <img src={slides[activeSlide]} alt="main banner" className="banner-main" />

        {/* 반투명 오버레이 (가장 위에 위치) */}
        <div className="banner-overlay">
          <img src={homeBannerVector} alt="overlay" className="banner-overlay-img" />
        </div>

        <div className="banner-texts">
          <div className="subtitle1">첫 번째 텍스트</div>
          <div className="text1">두 번째 텍스트</div>

          <div className="banner-indicators">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`indicator ${activeSlide === i ? "active" : ""}`}
                onClick={() => setActiveSlide(i)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 이하 기존 섹션 동일 */}
      <section className="section">
        <h2>11월 온라인 전시회</h2>
        <div className="scroll-row">
          {[poster1, poster2].map((poster, i) => (
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

      <section className="section">
        <h2>진행 중인 이벤트</h2>
        <img src={eventImg} alt="event" className="event-img" />
      </section>

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
