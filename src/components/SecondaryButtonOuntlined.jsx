// src\components\SecondaryButtonOuntlined.jsx

import React, { useState } from "react";
import '../styles/SecondaryButtonOuntlined.css';

function SecondaryButtonOuntlined({ icon, text, onClick, disabled = false }) {
  const [clicked, setClicked] = useState(false);
  const [activated, setActivated] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    if (disabled) return;

    setClicked(true);

    // 팝업 띄우기
    setShowPopup(true);

    // 2초 뒤에 팝업 닫고 onClick 실행
    setTimeout(() => {
      setShowPopup(false);
      setClicked(false);
      setActivated(true);

      if (onClick) onClick();
    }, 2000);
  };

  let className = "secondaryOuntlined";
  if (disabled) className += " disabled";
  else if (clicked) className += " clicked";
  else if (activated) className += " activated";

  return (
    <div className="mainButton">
      <button className={className} onClick={handleClick} disabled={disabled}>
        {icon && <img src={icon} alt={text} className="btn-icon" />}
        <span className="btn-text">{text}</span>
      </button>

      {showPopup && (
        <div className="popup">
          춤추는 라마로 로그인합니다
        </div>
      )}
    </div>
  );
}

export default SecondaryButtonOuntlined;
