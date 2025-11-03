// src/pages/Home.js
import React, { useState, useEffect, useRef } from "react";
import "../styles/Global.css";
import "../styles/Home.css";

import settingIcon from "../assets/icons/setting.png";
import alarmIcon from "../assets/icons/alarm.png";
import homeBannerVector from "../assets/images/homeBannerVector.png";

import post1 from "../assets/images/exhibition/TheReturn.png";
import post2 from "../assets/images/exhibition/TheMutableLine.jpg";
import post3 from "../assets/images/exhibition/TheRadiance.jpg";
import post4 from "../assets/images/exhibition/TheWholeWorld’sACanvas.png";
import post5 from "../assets/images/exhibition/2025아시아프.png";

import poster1 from "../assets/images/exhibition/Mia's Zoo.jpg";
import poster2 from "../assets/images/exhibition/TreeInTree_square.jpg";

import recommend1 from "../assets/images/exhibition/2025아시아프.png";
import recommend2 from "../assets/images/exhibition/MagicForLove.jpg";
import recommend3 from "../assets/images/exhibition/TheRadiance.jpg";

import listen1 from "../assets/images/exhibition/listen_magic for love2.png";
import listen2 from "../assets/images/exhibition/listen_james turrell.png";
import listen3 from "../assets/images/exhibition/listen_magic for love.png";

import playBtn from "../assets/icons/play.png";
import eventImg from "../assets/images/event.png";

import NavbarBottom from "../components/NavbarBottom"; 

import { useNavigate } from "react-router-dom";
import { getExhibitionById } from "../data/ExhibitionData";

function Home() {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [post1, post2, post3, post4, post5];
  const bannerRef = useRef(null);

  const bannerTexts = [
    { subtitle1: "James Turrell: The Return", text1: "2025.06.14 - 09.27" },
    { subtitle1: "The Mutable Line", text1: "2025.06.25 - 07.26" },
    { subtitle1: "The Radiance", text1: "2025.05.29 - 10.12" },
    { subtitle1: "The Whole World’s A Canvas", text1: "2025.03.21 - 2026.2.28" },
    { subtitle1: "2025 ASYAAF", text1: "2025.08.12 - 09.07" },
  ];

  const monthlyCards = [
    { img: poster1, text1: "Mia's Zoo", text3: "2021.06.10 -" },
    { img: poster2, text1: "Tree In Tree", text3: "2022.09.05 -" },
  ];

  // ✅ 추천 전시 데이터
  const recommendCards = [
    {
      img: recommend1,
      tags: ["오디오 도슨트", "오프라인"],
      title: "2025 아시아프",
      place: "문화역서울284",
      date: "2025.08.12 - 09.07",
      exhibitionId: "asyaaf-2025",
    },
    {
      img: recommend2,
      tags: ["오디오 도슨트", "오프라인"],
      title: "Magic For Love",
      place: "서울시립미술관",
      date: "2025.09.10 - 11.20",
      exhibitionId: "magic-for-love",
    },
    {
      img: recommend3,
      tags: ["오디오 도슨트", "오프라인"],
      title: "The Radiance",
      place: "리움미술관",
      date: "2025.07.01 - 10.12",
      exhibitionId: "radiance"
    },
  ];

  // ✅ 이어듣기 데이터
  const listenCards = [
    {
      img: listen1,
      text2: "Magic for Love",
      subtitle3: "4. MONSTERS INC",
    },
    {
      img: listen2,
      text2: "James Turrell: The Return",
      subtitle3: "2. THE WEDGE",
    },
    {
      img: listen3,
      text2: "Magic for Love",
      subtitle3: "THE ELEMENT...",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

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
        setActiveSlide((prev) => (prev + 1) % slides.length);
      } else if (endX - startX > 50) {
        setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
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
      {/* 상단 네비게이션 */}
      <div className="top-navbar">
        <img
          src={settingIcon}
          className="nav-icon"
          onClick={() => (window.location.href = "/mypage")}
        />
        <img src={alarmIcon} alt="alarm" className="nav-icon" />
      </div>

      {/* 배너 */}
      <div className="banner" ref={bannerRef}>
        <img src={slides[activeSlide]} alt="main banner" className="banner-main" />
        <div className="banner-overlay">
          <img src={homeBannerVector} alt="overlay" className="banner-overlay-img" />
        </div>
        <div className="banner-texts">
          <div className="subtitle1">{bannerTexts[activeSlide].subtitle1}</div>
          <div className="text1">{bannerTexts[activeSlide].text1}</div>
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

      {/* 월간 카드 */}
      <section className="section">
        <div className="subtitle1">11월 온라인 전시회</div>
        <div className="scroll-row">
          {monthlyCards.map((card, i) => (
            <div className="monthly-card" key={i}>
              <img src={card.img} alt={`poster ${i + 1}`} />
              <div className="card-info">
                <p className="text1">{card.text1}</p>
                <p className="text3">{card.text3}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 추천 전시 */}
      <section className="section">
        <div className="subtitle1">춤추는 라마님을 위한 전시회</div>
        <div className="scroll-row">
          {recommendCards.map((rec, i) => (
            // <div className="recommend-card" key={i}>
            <div
              className="recommend-card"
              key={i}
              onClick={() => navigate(`/exhibition/${rec.exhibitionId}`, {
                state: { exhibition: getExhibitionById(rec.exhibitionId) }
              })}
              style={{ cursor: "pointer" }}
            >
              <img src={rec.img} alt={`recommend ${i + 1}`} className="poster" />
              <div className="recommend-info">
                <div className="tag-row">
                  {rec.tags.map((tag, idx) => (
                    <span className="tag" key={idx}>
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="subtitle4">{rec.title}</p>
                <p className="text4">{rec.place}</p>
                <p className="text1">{rec.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ 이어듣기 */}
      <section className="section">
        <div className="subtitle1">이어듣기</div>
        <div className="scroll-row">
          {listenCards.map((card, i) => (
            <div className="listen-card" key={i}>
              <img src={card.img} alt={`listen ${i + 1}`} className="listen-img" />
              <div className="overlay" />
              <img src={playBtn} alt="play" className="play-btn" />
              <div className="listen-info">
                <p className="text2">{card.text2}</p>
                <p className="subtitle3">{card.subtitle3}</p>
              </div>
              <div className="progress-bar">
                <div className="progress" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="subtitle1">진행 중인 이벤트</div>
        <img src={eventImg} alt="event" className="event-img" />
      </section>

      <NavbarBottom />
    </div>
  );
}

export default Home;
