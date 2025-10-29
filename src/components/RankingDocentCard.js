// src\components\RankingDocentCard.js
import React from "react";
import "../styles/RankingDocentCard.css";
import { rankingData } from "../data/DocentRankData"; // ✅ 데이터시트 직접 가져오기
import lisen from "../assets/icons/listen.png";

export default function RankingDocentCard() {
  return (
    <div className="ranking-list">
      {rankingData.map((item) => (
        <div key={item.rank} className="ranking-card">
          {/* 이미지 + 순위번호 묶음 */}
          <div className="rank-image-wrap">
            <img src={item.image} alt={item.title} className="rank-poster" />
            <div className="rank-number">{item.rank}</div>
          </div>

          {/* 정보 영역 */}
          <div className="rank-info">
            {/* 태그 */}
            <div className="tag-wrap">
              {item.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            {/* 전시 제목 */}
            <div className="subtitle3">{item.title}</div>

            {/* 전시 위치 + 날짜 */}
            <div className="text2">
              {item.location} • {item.date}
            </div>

            {/* 조회수 */}
            <div className="view-count">
              <img className="lisen" src={lisen} alt="listen icon" />
              {item.views}회
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

