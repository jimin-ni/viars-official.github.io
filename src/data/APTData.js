// src/data/APTData.js
import img01_0 from "../assets/images/APTTest/01_0.png";
import img01_1 from "../assets/images/APTTest/01_1.png";
import img02_0 from "../assets/images/APTTest/02_0.png";
import img02_1 from "../assets/images/APTTest/02_1.png";
import img03_0 from "../assets/images/APTTest/03_0.png";
import img03_1 from "../assets/images/APTTest/03_1.png";
import img04_0 from "../assets/images/APTTest/04_0.png";
import img04_1 from "../assets/images/APTTest/04_1.png";
import img05_0 from "../assets/images/APTTest/05_0.png";
import img05_1 from "../assets/images/APTTest/05_1.png";
import img06_0 from "../assets/images/APTTest/06_0.png";
import img06_1 from "../assets/images/APTTest/06_1.png";
import img07_0 from "../assets/images/APTTest/07_0.png";
import img07_1 from "../assets/images/APTTest/07_1.png";
import img08_0 from "../assets/images/APTTest/08_0.png";
import img08_1 from "../assets/images/APTTest/08_1.png";
import img09_0 from "../assets/images/APTTest/09_0.png";
import img09_1 from "../assets/images/APTTest/09_1.png";
import img10_0 from "../assets/images/APTTest/10_0.png";
import img10_1 from "../assets/images/APTTest/10_1.png";

const APTData = [
  {
    questionNumber: 1,
    questionText: "미술 작품을 감상할 때, 더 흥미로운 것은 무엇인가요?", 
    images: [
      { src: img01_0, description: "작품이 사회 문제나 시대적 상황에 대해 이야기하는 방식" },
      { src: img01_1, description: "작가가 느낀 감정이나 내면의 세계를 상징적으로 표현한 방식" }
    ],
    linePercent: 10,
  },
  {
    questionNumber: 2,
    questionText: "좋아하는 그림은 어떤 느낌인가요?",
    images: [
      { src: img02_0, description: "실제 존재하는 사물을 사실적으로 묘사한 그림" },
      { src: img02_1, description: "형태를 단순화하거나 왜곡해서 감정을 표현한 그림" }
    ],
    linePercent: 20,
  },
  {
    questionNumber: 3,
    questionText: "다음 중 어떤 작품이 더 마음에 드나요?",
    images: [
      { src: img03_0, description: "자연의 모습이나 생김새를 사실적으로 표현한 그림" },
      { src: img03_1, description: "화면 구성과 패턴이 조화롭게 꾸며진 장식적인 그림" }
    ],
    linePercent: 30,
  },
  {
    questionNumber: 4,
    questionText: "전시를 관람하며 어떤 작품이 더 오래 기억에 남나요?", 
    images: [
      { src: img04_0, description: "사회나 역사에 대해 비판하거나 문제를 제기하는 작품" },
      { src: img04_1, description: "상징, 꿈, 또는 사적인 감정을 암시하는 작품" }
    ],
    linePercent: 40,
  },
  {
    questionNumber: 5,
    questionText: "작품을 볼 때 어떤 느낌이 더 좋은가요?",
    images: [
      { src: img05_0, description: "생각할 거리를 던져주는 작품" },
      { src: img05_1, description: "직관적으로 감동을 주거나 울림이 있는 작품" }
    ],
    linePercent: 50,
  },
  {
    questionNumber: 6,
    questionText: "어떤 방식의 표현을 더 좋아하나요?",
    images: [
      { src: img06_0, description: "관찰에 근거해 대상을 가능한 정확히 표현하는 방식" },
      { src: img06_1, description: "패턴, 기하학, 반복 등을 활용한 시각적으로 즐거운 구성" }
    ],
    linePercent: 60,
  },
  {
    questionNumber: 7,
    questionText: "당신이 작품을 제작한다면 어떤 쪽을 택할 것 같나요?",
    images: [
      { src: img07_0, description: "생각이나 철학적 주제를 깊이 있게 다루고 싶다" },
      { src: img07_1, description: "감정이 흐르듯 자연스럽고 즉흥적인 표현을 하고 싶다" }
    ],
    linePercent: 70,
  },
  {
    questionNumber: 8,
    questionText: "다음 중 어떤 작품이 더 마음에 드나요?", 
    images: [
      { src: img08_0, description: "전통적인 기법으로 사실적인 묘사를 한 그림" },
      { src: img08_1, description: "관람자가 해석할 수 있도록 상징이나 형태를 변형한 그림" }
    ],
    linePercent: 80,
  },
  {
    questionNumber: 9,
    questionText: "어떤 예술가에게 더 끌리나요?",
    images: [
      { src: img09_0, description: "현실의 문제를 예술을 통해 말하는 사람" },
      { src: img09_1, description: "자신만의 감정과 상상을 표현하는 사람" }
    ],
    linePercent: 90,
  },
  {
    questionNumber: 10,
    questionText: "전시장에서 어떤 작품에 더 머무르나요?",
    images: [
      { src: img10_0, description: "감정선이 강하고 직관적으로 느껴지는 작품" },
      { src: img10_1, description: "작품 속 의미를 생각하고 분석할 수 있는 작품" }
    ],
    linePercent: 100,
  },

];

export default APTData;
