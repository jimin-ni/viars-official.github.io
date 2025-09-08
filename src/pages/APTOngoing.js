// src\pages\APTOngoing.js

import { useState } from "react";
import APTData from "../data/APTData";
import { ArtPersonalityTest } from "../components/ArtPersonalityTest";
import { useNavigate } from "react-router-dom";
import resultMap from "../data/resultMap";

export default function APTOngoing() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(10).fill(null));
  const navigate = useNavigate();

  const handleSelect = (idx) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = idx; // 0 또는 1
    setAnswers(newAnswers);
  };

  // 16가지 성격 유형 중 가장 가까운 타입 찾기
  const handleNext = () => {
    if (currentIndex < APTData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // ✅ Hamming Distance 최소값으로 매칭
      const findClosestType = (answers) => {
        let minDist = Infinity;
        let closestType = "Unknown";

        resultMap.forEach(({ type, pattern }) => {
          const dist = pattern.reduce((acc, val, i) => acc + (val !== answers[i] ? 1 : 0), 0);
          if (dist < minDist) {
            minDist = dist;
            closestType = type;
          }
        });

        return closestType;
      };

      const matchedType = findClosestType(answers);
      navigate(`/result/${matchedType}`);
    }
  };


  return (
    <ArtPersonalityTest
      question={APTData[currentIndex]}
      selectedAnswer={answers[currentIndex]}
      onSelect={handleSelect}
      onNext={handleNext}
      currentStep={currentIndex + 1}   // ✅ 현재 문제 번호 전달
      totalSteps={APTData.length}      // ✅ 전체 문제 수 전달
    />
  );
}