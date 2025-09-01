// src\components\ArtPersonalityTest.js

import React from "react";
import SecondaryButton from "./SecondaryButton";
import "../styles/ArtPersonalityTest.css";
import { APTTestNavbar } from "./APTTEstNavbar";


export const ArtPersonalityTest = ({ question, onNext, onSelect, selectedAnswer }) => {
  return (
    <div className="art-test-container">
      {/* 상단 Navbar 고정 */}
      <div className="art-navbar-wrapper">
        <APTTestNavbar />
      </div>

      {/* 상단 진행도 */}
      <div className="art-progress">
        <div className="art-progress-number">{question.questionNumber}</div>
        <p className="art-progress-text">
          / 10 문항 (<span className="art-progress-percent">{question.linePercent}</span>%)
        </p>
      </div>

      {/* 질문 텍스트 */}
      <p className="art-question">{question.questionText}</p>

      {/* 이미지와 설명 */}
      {question.images.map((img, idx) => (
        <div
          key={idx}
          className={`art-image-box ${idx === 0 ? "art-image-box-top" : "art-image-box-bottom"}`}
        >
          <p className="art-image-description">{img.description}</p>
          <img
            className="art-image"
            src={img.src}
            alt={`Option ${idx + 1}`}
          />
          <input
            type="radio"
            checked={selectedAnswer === idx}
            onChange={() => onSelect(idx)}
            className="art-radio"
          />
        </div>
      ))}

      {/* 다음 버튼 */}
      <SecondaryButton className="art-next-button" text="다음" onClick={onNext} />
    </div>
  );
};
