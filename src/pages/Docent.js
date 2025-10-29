// src/pages/Docent.js

import React from "react";
import "../styles/Docent.css";
import DocentCard from "../components/DocentCard";
import OpenedDocentCard from "../components/OpenedDocentCard";
import RankingDocentCard from "../components/RankingDocentCard";

import searchIcon from "../assets/icons/search.png";
import scanIcon from "../assets/icons/scan.png";

import NavbarBottom from "../components/NavbarBottom"; 


export default function Docent() {
  return (
    <div className="docent">
      {/* 검색창 */}
      <div className="search-bar">
        <img src={searchIcon} alt="search" className="search-icon" />
        <input type="text" placeholder="도슨트 검색" />
        <img src={scanIcon} alt="scan" className="scan-icon" />
      </div>

      {/* 가까운 전시 도슨트 */}
      <section className="section">
        <div className="subtitle1">가장 가까운 전시 도슨트</div>
        <DocentCard /> {/* ✅ 데이터 기반 자동 렌더링 */}
      </section>

      {/* 새로 오픈한 도슨트 */}
      <section className="section">
        <div className="subtitle1">새로 오픈한 도슨트</div>
        <OpenedDocentCard />
      </section>

      {/* 도슨트 랭킹 */}
      <section className="section">
        <div className="subtitle1">도슨트 랭킹</div>
        <RankingDocentCard />
      </section>
      <NavbarBottom />
    </div>
  );
}
