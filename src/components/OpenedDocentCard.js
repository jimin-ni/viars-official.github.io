// src\components\OpenedDocentCard.js

import React from "react";
import "../styles/OpenedDocentCard.css";
import poster from "../assets/images/openedDocentCard.png";

export default function OpenedDocentCard() {
  return (
    <div className="opened-card">
      <img src={poster} alt="새로 오픈한 도슨트" className="opened-img" />
      <div className="opened-texts">
        <p className="subtitle3">젊은 모색 2025</p>
        <p className="text3">도슨트 미우</p>
        <p className="text3">국립현대미술관 과천 • 2025.04.24 - 10.12</p>
      </div>
    </div>
  );
}
