// src/pages/DocentPlayer.js
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import "../styles/DocentPlayer.css";
import { getExhibitionById } from "../data/ExhibitionData";
import backIcon from "../assets/icons/back.png";
import moreIcon from "../assets/icons/more.png";   // 우측 상단 '목차' 아이콘
import globeIcon from "../assets/icons/globe.png"; // 우측 하단 언어/목소리 버튼
import forwardIcon from "../assets/icons/forward.png";
import rewindIcon from "../assets/icons/rewind.png";
import playIcon from "../assets/icons/play_blue.png";
import pauseIcon from "../assets/icons/pause.png";
import { DocentVoiceSheet } from "../components/DocentVoiceSheet";

export default function DocentPlayer() {
  const { id } = useParams();
  const nav = useNavigate();
  const { state } = useLocation();
  const ex = state?.ex || getExhibitionById(id);

  const audioRef = useRef(null);
  const [isPlaying, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(ex?.audio?.total || 0);
  const [showCaption, setShowCaption] = useState(false);
  const [showSheet, setShowSheet] = useState(false);
  const [voiceTone, setVoiceTone] = useState("voice1");
  const [voiceLang, setVoiceLang] = useState("ko");

  // 실제 음원은 준비되면 교체(토큰/스트리밍 등). 지금은 가짜 플레이어로 UI 동작 확인.
  useEffect(() => {
    let raf;
    if (isPlaying) {
      const tick = () => {
        setTime((t) => {
          const next = t + 0.016 * 48; // ~0.77초 가량 가짜 진행
          return next > duration ? duration : next;
        });
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }
    return () => cancelAnimationFrame(raf);
  }, [isPlaying, duration]);

  useEffect(() => {
    if (time >= duration) setPlaying(false);
  }, [time, duration]);

  const currentCaption = useMemo(() => {
    const caps = ex?.audio?.tracks?.[0]?.captions || [];
    let text = "";
    for (let i = 0; i < caps.length; i++) {
      if (time >= caps[i].t) text = caps[i].text;
      else break;
    }
    return text;
  }, [time, ex]);

  const fmt = (s) => {
    s = Math.max(0, Math.floor(s));
    const m = String(Math.floor(s / 60)).padStart(2, "0");
    const sec = String(s % 60).padStart(2, "0");
    return `${m}:${sec}`;
  };

  if (!ex) return <div className="error">전시를 찾을 수 없어요.</div>;

  return (
    <div className="docent-player" onClick={() => setShowCaption((v) => !v)}>
      {/* 상단바 */}
      <div className="dp-navbar">
        <img src={backIcon} alt="back" onClick={() => nav(-1)} />
        <div className="dp-title">
          <div className="text4">{ex.title}</div>
          <div className="subtitle3">1부 성인</div>
        </div>
        <img src={moreIcon} alt="toc" onClick={(e) => { e.stopPropagation(); alert("목차(트랙 리스트) 준비 중"); }} />
      </div>

      {/* 포스터 */}
      <div className="dp-cover">
        <img src={ex.audio?.cover || ex.poster} alt={ex.title} />
      </div>

      {/* 시킹 바 */}
      <div className="dp-seek">
        <input
          type="range" min={0} max={duration} value={time}
          onChange={(e) => setTime(Number(e.target.value))}
        />
        <div className="dp-time">
          <span>{fmt(time)}</span>
          <span>/{fmt(duration)}</span>
        </div>
      </div>

      {/* 컨트롤 */}
      <div className="dp-controls" onClick={(e) => e.stopPropagation()}>
        <button onClick={() => setTime((t) => Math.max(0, t - 10))}>
          <img src={rewindIcon} alt="rewind" />
        </button>
        <button className="play" onClick={() => setPlaying((p) => !p)}>
          <img src={isPlaying ? pauseIcon : playIcon} alt="play" />
        </button>
        <button onClick={() => setTime((t) => Math.min(duration, t + 10))}>
          <img src={forwardIcon} alt="forward" />
        </button>
      </div>

      {/* 우하단 언어/목소리 */}
      <button
        className="dp-lang"
        onClick={(e) => { e.stopPropagation(); setShowSheet(true); }}
      >
        <img src={globeIcon} alt="langs" />
      </button>

      {/* 탭(블러 + 자막) */}
      {showCaption && (
        <div className="dp-caption">
          <div className="dp-caption-inner">
            {currentCaption || "재생 중인 자막이 여기에 표시됩니다."}
          </div>
        </div>
      )}

      {/* 바텀 시트: 목소리/언어 */}
      <DocentVoiceSheet
        open={showSheet}
        onClose={() => setShowSheet(false)}
        tones={ex.audio?.voices?.tones || ["voice1","voice2","voice3"]}
        langs={ex.audio?.voices?.langs || ["eng","日本語","中國人","español"]}
        value={{ tone: voiceTone, lang: voiceLang }}
        onChange={(v) => { setVoiceTone(v.tone); setVoiceLang(v.lang); }}
      />

      <audio ref={audioRef} hidden />
    </div>
  );
}
