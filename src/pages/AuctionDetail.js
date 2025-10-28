// src/pages/AuctionDetail.js
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "../styles/AuctionDetail.css";

// 데이터 불러오기
import { artworks } from "../data/artWorkData";

// 아이콘
import backIcon from "../assets/icons/back.png";
import searchIcon from "../assets/icons/search.png";
import cartIcon from "../assets/icons/cart.png";
import heartIcon from "../assets/icons/heart.png";

export default function AuctionDetail() {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  // ✅ state가 있으면 그걸 쓰고, 없으면 artWorkData.js에서 id로 찾기
  const art = state || artworks.find((item) => item.id === Number(id));

  const [timeLeft, setTimeLeft] = useState("");

  // ✅ 카운트다운
useEffect(() => {
  if (!art?.deadline) return;

  // ✅ deadline이 문자열이면 변환, Date면 그대로 사용
  let targetTime;
  if (typeof art.deadline === "string") {
    // 문자열 → Date 변환 (기존 parse 함수 재사용)
    function parseDeadline(deadlineStr) {
      const parts = deadlineStr.match(/\d+/g);
      if (!parts || parts.length < 6) return null;
      const [year, month, day, hour, minute, second] = parts.map(Number);
      return new Date(year, month - 1, day, hour, minute, second);
    }
    targetTime = parseDeadline(art.deadline);
  } else if (art.deadline instanceof Date) {
    // ✅ 이미 Date 객체라면 그대로 사용
    targetTime = art.deadline;
  }

  if (!targetTime || isNaN(targetTime)) {
    console.error("Invalid deadline:", art.deadline);
    return;
  }

  const interval = setInterval(() => {
    const now = new Date();
    const diff = targetTime - now;

    if (diff <= 0) {
      setTimeLeft("종료됨");
      clearInterval(interval);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    setTimeLeft(
      `${days} DAYS ${hours.toString().padStart(2, "0")} : ${minutes
        .toString()
        .padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`
    );
  }, 1000);

  return () => clearInterval(interval);
}, [art]);


  // ✅ 데이터 없을 경우
  if (!art) return <div className="error">잘못된 접근입니다.</div>;

  return (
    <div className="auction-detail">
      {/* --- 상단 네비게이션 --- */}
      <div className="detail-navbar">
        <img
          src={backIcon}
          alt="back"
          className="nav-back"
          onClick={() => navigate(-1)}
        />
        <div className="nav-right">
          <img src={searchIcon} alt="search" />
          <img src={cartIcon} alt="cart" />
          <img src={heartIcon} alt="heart" />
        </div>
      </div>

      {/* --- 메인 이미지 --- */}
      <div className="main-img-background">
       <img className="main-img" src={art.mainImage} alt={art.title} />
      </div>

      {/* --- 카운트다운 (진행 중일 때만 표시) --- */}
      {art.status === "진행 중" && (
        <div className="timer">
          <span className="text2">옥션 마감까지</span>
          <span className="subtitle1">{timeLeft}</span>
        </div>
      )}
      <div className="border1"></div>

      {/* --- 작품 정보 --- */}
      <div className="art-info">
        <div className="subtitle2">{art.artistName}</div>
        <div className="subtitle1">{art.title}</div>
        <div className="info-row">
          <div className="text4">제작년도</div>
          <div className="text4">
            <div className="year">{art.year}</div>
          </div>
          <div className="tag">{art.tag}</div>
        </div>
        <div className="info-row">
          <div className="text4">작품 크기</div>
          <div className="text4">
            <div className="size">{art.size}</div>
          </div>
        </div>
        <div className="info-row">
          <div className="text4">재료</div>
          <div className="text4">
            <div className="material">{art.material}</div>
          </div>
        </div>
        <div className="info-row">
          <div className="text4">예상 발송일</div>
          <div className="text4">
            <div className="shipping">{art.shipping}</div>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      {/* --- 옥션 정보 --- */}
      <div className="section-title">
        <div className="text1">옥션 정보</div>
      </div>
      <div className="auction-info-row">
        <div className="text3">추정 구매가</div>
        <div className="text3">호가 단위</div>
      </div>
      <div className="info-row-value">
        <div className="subtitle2">{art.auctionInfo.estimate}</div>
        <div className="subtitle2">{art.auctionInfo.step}</div>
      </div>

      <div className="auction-info-row">
        <div className="text3">작품 배송비</div>
        <div className="text3">포장 및 액자</div>
      </div>
      <div className="info-row-value">
        <div className="subtitle2">{art.auctionInfo.delivery}</div>
        <div className="subtitle2">{art.auctionInfo.frame}</div>
      </div>

      <div className="auction-text-info-row">
        <ul className="text3">
          <li>도서, 산간, 해외 배송은 추가 배송비가 발생할 수 있습니다.</li>
          <li>
            실제 작품의 색상이 이미지 색상과 다를 수 있으며 이로 인한 환불은
            불가합니다.
          </li>
          <li>
            옥션은 10일 뒤인 25년 6월 29일 오후 11시 59분에 종료합니다.
          </li>
        </ul>
      </div>


      <div className="divider"></div>

      {/* --- 작품 소개 --- */}
      <div className="section-title">
        <div className="text1">작품소개</div>
      </div>
      <div className="art-text-info-row">
        <div className="text3">{art.introText1}</div>
      </div>
      <img className="sub-img" src={art.introImage} alt="sub" />
      <div className="art-text-info-row">
        <div className="text3">{art.introText2}</div>
      </div>
      <div className="divider"></div>

      {/* --- 작가 소개 --- */}
      <div className="section-title">
        <div className="text1">작가 소개</div>
      </div>

      <div className="artist-intro">
        <img
          className="artist-photo"
          src={art.artistImage}
          alt={art.artistName}
        />
        <div className="artist-bio">
          <div className="subtitle1">{art.artistName}</div>
          <div className="text1">{art.artistBio}</div>
        </div>
      </div>

      <div className="divider"></div>

      {/* --- 구매 버튼 --- */}
      <button className="buy-btn">
        <div className="buy-left">구매하기</div>
        <div className="buy-right">
          <div className="label">즉시 구매가</div>
          <div className="price">{art.auctionInfo.estimate}</div>
        </div>
      </button>

    </div>
  );
}
