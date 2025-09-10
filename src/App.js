// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// styles 폴더 안의 폰트, css 불러오기
import './styles/TextStyles.css'; //  폰트 상세 정보
import "./styles/Global.css"; // 공통 CSS


// pages 폴더 안의 페이지 불러오기
import Landing from "./pages/Landing";
import UserType from "./pages/UserType";
import APTStart from "./pages/APTStart";
import APTOngoing from "./pages/APTOngoing";
import APTResult from "./pages/APTResult";
import Home from "./pages/Home";
import Docent from "./pages/Docent";
import Market from "./pages/Market";
import Article from "./pages/Article";
import MyPage from "./pages/MyPage";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* 최초 접속 시 랜딩 페이지 */}
      <Route path="/" element={<Landing />} />
      {/* 랜딩 페이지 이후 User Type 페이지 */}
      <Route path="/usertype" element={<UserType />} />
      {/* Art Personality Test - Start 페이지 */}
      <Route path="/aptStart" element={<APTStart />} />
      {/* Art Personality Test - Ongoing 페이지 */}
      <Route path="/aptOngoing" element={<APTOngoing />} />
      {/* 홈 페이지 */}
      <Route path="/home" element={<Home />} />
      {/* Docent 도슨트 페이지 */}
      <Route path="/docent" element={<Docent />} />
      {/* Market 마켓 페이지 */}
      <Route path="/market" element={<Market />} />
      {/* Article 아티클 페이지 */}
      <Route path="/article" element={<Article />} />
      {/* MyPage 마이 페이지 */}
      <Route path="/myPage" element={<MyPage />} />
      {/* APTResult 테스트 결과 페이지 */}
      <Route path="/result/:type" element={<APTResult />} />
      {/* signUp 테스트 결과 페이지 */}
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;