// src/data/APTData.js
import img01_0 from "../assets/images/APTTest/01_0.png";
import img01_1 from "../assets/images/APTTest/01_1.png";
import img02_0 from "../assets/images/APTTest/02_0.png";
import img02_1 from "../assets/images/APTTest/02_1.png";

const APTData = [
  {
    questionNumber: 1,
    questionText: "미술 작품을 감상할 때, 더 흥미로운 것은 무엇인가요?", // \n만 넣기
    images: [
      { src: img01_0, description: "작품이 사회 문제나 시대적 상황에 대해 이야기하는 방식" },
      { src: img01_1, description: "작가가 느낀 감정이나 내면의 세계를 상징적으로 표현한 방식" }
    ],
    linePercent: 10,
  },
  {
    questionNumber: 2,
    questionText: "좋아하는 그림은 어떤 느낌인가요?", // \n만 넣기
    images: [
      { src: img02_0, description: "실제 존재하는 사물을 사실적으로 묘사한 그림" },
      { src: img02_1, description: "형태를 단순화하거나 왜곡해서 감정을 표현한 그림" }
    ],
    linePercent: 20,
  },
  // ...총 10문항
];

export default APTData;
