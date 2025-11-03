// src/pages/ExhibitionDetail.js
import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import "../styles/ExhibitionDetail.css";
import { getExhibitionById } from "../data/ExhibitionData";
import backIcon from "../assets/icons/back.png";
import searchIcon from "../assets/icons/search.png";
import ticketIcon from "../assets/icons/ticket.png";
import audioIcon from "../assets/icons/sound.png";
import leafletIcon from "../assets/icons/leaflet.png";

import NavbarBottom from "../components/NavbarBottom"; 


export default function ExhibitionDetail() {  
  const { id } = useParams();
  const nav = useNavigate();
  // state로 들어온 경우(홈/도슨트에서) 우선 사용
  const { state } = useLocation();
  const ex = state?.exhibition || getExhibitionById(id);

  if (!ex) return <div className="error">전시를 찾을 수 없어요.</div>;

  const mapSrc =
    ex.map?.lat && ex.map?.lng
      ? `https://www.google.com/maps?q=${ex.map.lat},${ex.map.lng}&z=16&output=embed`
      : `https://www.google.com/maps?q=${encodeURIComponent(ex.map?.place || ex.location)}&z=16&output=embed`;

  return (
    <div className="exh-detail">
      <div className="poster-wrap">
        <img src={ex.poster} alt={ex.title} className="poster-img" />

        <div className="body">
          <div className="body-inner">
            <div className="subtitle1">{ex.title}</div>
            <div className="text1">
              {ex.location} • {ex.date}
            </div>

            <div className="content-section">
              {ex.contents?.map((c, i) => (
                <div className="section" key={i}>
                  {c.text && <div className="text3">{c.text}</div>}
                </div>
              ))}
            </div>

            <div className="map-wrap">
              <iframe
                title="map"
                src={mapSrc}
                width="100%"
                height="130"
                style={{ border: 0, borderRadius: "0px" }}
                loading="lazy"
              />
            </div>

            <div className="quick-actions">
              <button className="action" onClick={() => alert("종료한 전시입니다")}>
                <img src={ticketIcon} alt="" />
              </button>
              <button
                className="action"
                onClick={() => nav(`/docent/${ex.id}`, { state: { ex } })}
              >
                <img src={audioIcon} alt="" />
              </button>
              <button className="action" onClick={() => alert("리플렛 보기 예정")}>
                <img src={leafletIcon} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <NavbarBottom />
    </div>
  );
}
