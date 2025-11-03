// src/components/DocentVoiceSheet.js
import React from "react";
import "../styles/DocentVoiceSheet.css";

export function DocentVoiceSheet({ open, onClose, tones = [], langs = [], value, onChange }) {
  if (!open) return null;
  const setTone = (t) => onChange?.({ tone: t, lang: value?.lang || "ko" });
  const setLang = (l) => onChange?.({ tone: value?.tone || tones[0], lang: l });

  return (
    <div className="dvs-backdrop" onClick={onClose}>
      <div className="dvs-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="dvs-grabber" />
        <div className="dvs-title">목소리/언어 설정</div>

        {/* 상단 3 톤 - 가로 스와이프 */}
        <div className="dvs-row scroll-x">
          {tones.map((t) => (
            <button
              key={t}
              className={`chip ${value?.tone === t ? "active" : ""}`}
              onClick={() => setTone(t)}
            >{t}</button>
          ))}
        </div>

        {/* 하단 4언어 - 가로 스와이프 */}
        <div className="dvs-row scroll-x mt12">
          {langs.map((l) => (
            <button
              key={l}
              className={`chip ${value?.lang === l ? "active" : ""}`}
              onClick={() => setLang(l)}
            >{l}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
