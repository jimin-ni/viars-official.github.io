// src/pages/APTResult.js
import React from "react";
import { useParams } from "react-router-dom";
import APTResultData from "../data/APTResultData";
import { useNavigate } from "react-router-dom";
import { APTTestNavbar } from "../components/APTTEstNavbar";
import "../styles/APTResult.css";
import PrimaryButton from "../components/PrimaryButton";


function APTResult() {
  const navigate = useNavigate();
  const { type } = useParams();
  const result = APTResultData[type];

  if (!result) return <div>결과 데이터를 불러올 수 없습니다.</div>;

  const handleClick = () => {
    // PrimaryButton 시간을 고려해 액션 끝난 뒤 이동
    setTimeout(() => {
      navigate("/Home");
    }, 900); //  0.9초
  };

  return (
    <div className="apt-result">
      {/* 상단 Navbar 고정 */}
      <div className="art-navbar-wrapper">
        <APTTestNavbar currentStep={10} totalSteps={10} />
      </div>

      {/* ✅ 설명 텍스트 */}
      <div className="apt-result__intro">
        <p className="subtitle1">테스트 결과</p>
        <div className="textDescription">
          <p className="text1" >
            Art Personality Test는 사람들이 예술을 향유할 때 
            중요하게 여기는 4가지 핵심 요소를 바탕으로 설계했으며,
            총 16가지 Art Personality 유형이 존재합니다.
          </p>
        </div>
      </div>

      {/* ✅ 대표 이미지 */}
      <div className="apt-result__image">
        <img src={result.mainImage} alt={result.type} />
      </div>

      {/* ✅ 텍스트 박스 + 아이콘 + 성격 특성 */}
      <section className="apt-result__section">
        <div className="apt-result__type">
          <p className="subtitle1">{result.title}</p>
          <p className="text1">{result.description}</p>
        </div>

        <div className="apt-result__icons">
          {result.icons.map((icon, i) => (
            <img key={i} src={icon} alt="특성 아이콘" />
          ))}
        </div>

        <div className="apt-result__traits">
          {result.traits.map((trait, i) => (
            <img key={i} src={trait} alt="특성" />
          ))}
        </div>
      </section>

      {/* ✅ 추천 전시 */}
      <section className="apt-result__exhibition">
        <p className="subtitle1">추천 전시</p>
        <div className="exhibition-card">
          <img className="exhitibionImg" src={result.exhibition.image} alt={result.exhibition.title} />
          <div className="exhibition-info">
            <div className="tags">
              {result.exhibition.tags.map((tag, i) => (
                <span key={i} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <h4>{result.exhibition.title}</h4>
            <p>{result.exhibition.location}</p>
            <p>{result.exhibition.date}</p>

          </div>
        </div>
        <PrimaryButton
          text="추천 전시 더 보러가기" 
          onClick={handleClick} 
        />        
      </section>

      {/* ✅ 추천 작가 */}
      <section className="apt-result__artists">
        <p className="subtitle1">추천 작가</p>

        {result.artists.map((artist, i) => (
          <div key={i} className="artist-card">
            <img src={artist.image} alt={artist.name} />
            <div>
              <h4>{artist.name}</h4>
              <p>{artist.info}</p>
              <p>{artist.intro}</p>
            </div>
          </div>
        ))}
        <PrimaryButton
          text="추천 작가 작품 보러가기" 
          onClick={handleClick} 
        /> 
      </section>

      {/* ✅ 공유 버튼 */}
      <button className="btn-outlined share-btn">검사 결과 공유하기</button>
    </div>
  );
}

export default APTResult;
