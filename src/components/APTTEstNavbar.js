// src\components\APTTEstNavbar.js

import React from "react";
import PropTypes from "prop-types";
import "../styles/APTTestNavbar.css"; // 스타일 분리

export const APTTestNavbar = ({ currentStep = 1, totalSteps = 10 }) => {
  // 최대 가로 412px 기준으로 진행도 계산
  const maxWidth = 412;
  const progressWidth = (currentStep / totalSteps) * maxWidth;

  return (
    <nav className="apt-test-navbar">
      <p className="apt-test-navbar__menu">ART PERSONALITY TEST</p>
      <div className="apt-test-navbar__progress-wrapper">
        <div
          className="apt-test-navbar__progress-line"
          style={{ width: `${progressWidth}px` }}
        />
      </div>
    </nav>
  );
};

APTTestNavbar.propTypes = {
  currentStep: PropTypes.number,
  totalSteps: PropTypes.number,
};