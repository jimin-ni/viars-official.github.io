// src\components\ArtPersonalityTest.js

import React, { useEffect, useState } from "react";
import SecondaryButton from "./SecondaryButton";
import "../styles/ArtPersonalityTest.css";
import { APTTestNavbar } from "./APTTEstNavbar";

export const ArtPersonalityTest = ({  
  question, 
  onNext, 
  onSelect, 
  selectedAnswer, 
  currentStep, 
  totalSteps  
}) => {
  const [elapsed, setElapsed] = useState(0); // 초 단위 저장
  const [showPopup, setShowPopup] = useState(false); // 팝업 상태

  useEffect(() => {
    const timer = setInterval(() => setElapsed(prev => prev + 1), 1000);
    return () => clearInterval(timer); 
  }, []);

  // HH:MM:SS 포맷팅
  const formatTime = (s) => {
    const h = String(Math.floor(s / 3600)).padStart(2, "0");
    const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
    const sec = String(s % 60).padStart(2, "0");
    return `${h}:${m}:${sec}`;
  };

  // 다음 버튼 핸들러
  const handleNextClick = () => {
    if (selectedAnswer === null || selectedAnswer === undefined) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000); // 2초 후 사라짐
      return;
    }
    onNext(); // 정상적으로 다음으로 이동
  };

  return (
    <div className="art-test-container">
      {/* 상단 Navbar 고정 */}
      <div className="art-navbar-wrapper">
        <APTTestNavbar currentStep={currentStep} totalSteps={totalSteps} />
      </div>

      {/* 진행도 + 타이머 */}
      <div className="art-progress-row">
        <div className="art-progress">
          <div className="art-progress-number">{question.questionNumber}</div>
          <p className="art-progress-text">
            / 10 문항 (<span className="art-progress-percent">{question.linePercent}</span>%)
          </p>
        </div>
        <div className="art-timer">{formatTime(elapsed)}</div>
      </div>

      {/* 질문 텍스트 */}
      <p className="art-question">{question.questionText}</p>

      {/* 이미지와 설명 */}
      {question.images.map((img, idx) => (
        <div  
          key={idx}
          className={`art-image-box ${idx === 0 ? "art-image-box-top" : "art-image-box-bottom"}`}>
          <input
            type="radio"
            checked={selectedAnswer === idx}
            onChange={() => onSelect(idx)}
            className="art-radio"
          />
          <p className="art-image-description">{img.description}</p>
          <img
            className="art-image"
            src={img.src}
            alt={`Option ${idx + 1}`}
          />
        </div>
      ))}

      {/* 다음 버튼 */}
      <SecondaryButton 
        className="art-next-button" 
        text="다음" 
        onClick={handleNextClick} 
      />

      {/* 선택 안 했을 때 팝업 */}
      {showPopup && (
        <div className="popup-message">선택지를 골라주세요.</div>
      )}
    </div>
  );
};
