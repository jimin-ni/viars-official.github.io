// src\pages\MyPage.js

import React, { useState } from "react";
import { Link } from 'react-router-dom';

import "../styles/MyPage.css";
import editIcon from "../assets/icons/edit.png";
import toggleIcon from "../assets/icons/toggle.png"; // ✅ 토글 이미지 추가
import profileImg from "../assets/images/profile.png";

import NavbarBottom from "../components/NavbarBottom";


export default function MyPage() {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div className="mypage">
      {/* 상단 프로필 영역 */}
      <div className="profile-section">
        <img src={profileImg} alt="profile" className="profile-img" />
        <div className="subtitle1">춤추는 라마</div>
        <img src={editIcon} alt="edit" className="edit-icon" />
      </div>

      {/* 항목별 메뉴 */}
      <div className="menu-section">
        {/* ART PERSONALITY TEST */}
        <div className="menu-item">
          <div className="subtitle3" onClick={() => toggleMenu("apt")}>
            ART PERSONALITY TEST
            <img
              src={toggleIcon}
              alt="toggle"
              className={`arrow ${activeMenu === "apt" ? "open" : ""}`}
            />
          </div>
          {activeMenu === "apt" && (
            <div className="submenu">
              <div className="text1">
                <Link to="/APTStart">테스트 다시 하기</Link>
              </div>
            </div>
          )}

        </div>

        {/* WALLET */}
        <div className="menu-item">
          <div className="subtitle3" onClick={() => toggleMenu("wallet")}>
            WALLET
            <img
              src={toggleIcon}
              alt="toggle"
              className={`arrow ${activeMenu === "wallet" ? "open" : ""}`}
            />
          </div>
          {activeMenu === "wallet" && (
            <div className="submenu">
              <div className="text1">WALLET</div>
              <div className="text1">NFT WALLET</div>
            </div>
          )}
        </div>

        {/* 활동 내역 */}
        <div className="menu-item">
          <div className="subtitle3" onClick={() => toggleMenu("activity")}>
            활동 내역
            <img
              src={toggleIcon}
              alt="toggle"
              className={`arrow ${activeMenu === "activity" ? "open" : ""}`}
            />
          </div>
          {activeMenu === "activity" && (
            <div className="submenu">
              <div className="text1">좋아요</div>
              <div className="text1">장바구니</div>
              <div className="text1">저장</div>
            </div>
          )}
        </div>

        {/* 작품 판매 문의 */}
        <div className="menu-item">
          <div className="subtitle3">
            작품 판매 문의
          </div>

      </div>
      <NavbarBottom />
      
    </div>
  </div>
  );
}
