// src\components\DocentCard.js

import React from "react";
import "../styles/DocentCard.css";
import { docentCardData } from "../data/DocentCardData"; // ✅ 데이터 import

export default function DocentCard() {
  return (
    <div className="docent-slider">
      {docentCardData.map((item) => (
        <div key={item.id} className="docent-card">
          <img src={item.image} alt={item.title} className="poster" />
          <button className="docent-tag">{item.tag}</button>
          <div className="docent-info">
            <p className="subtitle3">{item.title}</p>
            <p className="text1">{item.location}</p>
            <p className="text1">{item.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
