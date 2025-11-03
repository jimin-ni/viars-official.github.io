// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

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
import Auction from "./pages/Auction";
import AuctionDetail from "./pages/AuctionDetail";
import Article from "./pages/Article";
import ArticleDetail from "./pages/ArticleDetail";
import MyPage from "./pages/MyPage";
import SignUp from "./pages/SignUp";

import ExhibitionDetail from "./pages/ExhibitionDetail";
import DocentPlayer from "./pages/DocentPlayer";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* ✅ 페이지 이동 시 스크롤을 맨 위로 */}
    <Routes>
      {/* 최초 접속 시 랜딩 페이지 */}
      <Route path="/" element={<Landing />} />

      <Route path="/usertype" element={<UserType />} />

      <Route path="/aptStart" element={<APTStart />} />
      <Route path="/aptOngoing" element={<APTOngoing />} />
      <Route path="/result/:type" element={<APTResult />} />

      <Route path="/signUp" element={<SignUp />} />

      <Route path="/home" element={<Home />} />

      <Route path="/docent" element={<Docent />} />

      <Route path="/auction" element={<Auction />} />
      <Route path="/auction/:id" element={<AuctionDetail />} /> 

      <Route path="/article" element={<Article />} />
      <Route path="/article/:id" element={<ArticleDetail />} />

      <Route path="/myPage" element={<MyPage />} />

      <Route path="/exhibition/:id" element={<ExhibitionDetail />} />
      <Route path="/docent/:id" element={<DocentPlayer />} />

    </Routes>
  </BrowserRouter>
  );
}

export default App;