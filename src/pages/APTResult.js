// src/pages/APTResult.jsimport React, { useState } from "react";

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import APTResultData from "../data/APTResultData";
import { useNavigate } from "react-router-dom";
import { APTTestNavbar } from "../components/APTTEstNavbar";
import "../styles/APTResult.css";
import PrimaryButton from "../components/PrimaryButton";
import PrimaryButtonOuntlined from "../components/PrimaryButtonOuntlined";

function APTResult() {
  const navigate = useNavigate();
  const { type } = useParams();
  const result = APTResultData[type];
  const [showPopup, setShowPopup] = useState(false);

  if (!result) return <div>결과 데이터를 불러올 수 없습니다.</div>;

  const handleClick = () => {
    setTimeout(() => {
      navigate("/Home");
    }, 900);
  };

  // ✅ 공유 버튼 클릭 시 실행
  const handleShare = async () => {
    try {
      const url = window.location.href; // 현재 페이지 URL
      await navigator.clipboard.writeText(url); // 클립보드 복사
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000); // 2초 후 사라짐
    } catch (err) {
      console.error("URL 복사 실패:", err);
    }
  };

  return (
    <div className="apt-result">
      {/* 상단 Navbar 고정 */}
      <div className="art-navbar-wrapper">
        <APTTestNavbar currentStep={10} totalSteps={10} />
      </div>

      {/* ✅ 설명 텍스트 */}
      <div className="apt-result__intro">
        <p className="subtitle1">테스트 결과</p>
        <div className="textDescription">
          <p className="text1" >
            Art Personality Test는 사람들이 예술을 향유할 때      
            중요하게 여기는 4가지 핵심 요소를 바탕으로 설계했으며,
            총 16가지 Art Personality 유형이 존재합니다.
          </p>
        </div>
      </div>

      {/* ✅ 대표 이미지 */}
      <div className="apt-result__image">
        <img src={result.mainImage} alt={result.type} />
      </div>

      {/* ✅ 텍스트 박스 + 아이콘 + 성격 특성 */}
      <section className="apt-result__section">
        <div className="apt-result__type">
          <p className="subtitle1">{result.title}</p>
          <p className="text1">{result.description}</p>
        </div>

        <div className="apt-result__icons">
          {result.icons.map((icon, i) => (
            <img key={i} src={icon} alt="특성 아이콘" />
          ))}
        </div>

        <div className="apt-result__traits">
          {result.traits.map((trait, i) => (
            <img key={i} src={trait} alt="특성" />
          ))}
        </div>
      </section>

      {/* ✅ 추천 전시 */}
      <section className="apt-result__exhibition">
        <p className="subtitle1">추천 전시</p>
        <div className="exhibition-card">
          <img className="exhitibionImg" src={result.exhibition.image} alt={result.exhibition.title} />
          <div className="exhibition-info">
            <div className="tags">
              {result.exhibition.tags.map((tag, i) => (
                <span key={i} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="exhibition_textbox">
              <p className="subtitle4">{result.exhibition.title}</p>
              <p className="text4">{result.exhibition.location}</p>
              <p className="text1">{result.exhibition.date}</p>
            </div>
          </div>
        </div>
        <PrimaryButton
          text="추천 전시 더 보러가기" 
          onClick={handleClick} 
        />        
      </section>

      {/* ✅ 추천 작가 */}
      <section className="apt-result__artists">
        <p className="subtitle1">추천 작가</p>

        {result.artists.map((artist, i) => (
          <div key={i} className="artist-card">
            <img src={artist.image} alt={artist.name} />
            <div className="artist_textbox">
              <p className="subtitle4">{artist.name}</p>
              <p className="text4">{artist.info}</p>
              <p className="text1">{artist.intro}</p>
            </div>
          </div>
        ))}
        <PrimaryButton
          text="추천 작가 작품 보러가기" 
          onClick={handleClick} 
        /> 
      </section>

      {/* ✅ 공유 버튼 */}
      <PrimaryButtonOuntlined
        className="ButtonOuntlined"
        text="검사 결과 공유하기" 
        onClick={handleShare} 
      /> 

      {/* ✅ 주소 복사 팝업 */}
      {showPopup && (
        <div className="popup-message">주소가 복사되었습니다</div>
      )}
    </div>
  );
}

export default APTResult;
