// src/data/articleData.js
import asyaaf from "../assets/images/article/asyaaf.png";
import asyaafPoster from "../assets/images/exhibition/2025아시아프.png";
import asyaafDetail1 from "../assets/images/article/Detail_asyaaf.png";
import asyaafDetail2 from "../assets/images/article/Detail2_asyaaf.png";

import pixa from "../assets/images/article/pixa.png";

export const articles = {
  큐레이션: [
    {
      id: 1,
      title: "아시아프 2025",
      tag: "전시회 큐레이션",
      subtitle: "동시대 아시아 청년 작가를 한 자리에서",
      image: asyaaf,
      detail: {
        poster: asyaafPoster,
        date: "2025.8.12 ~ 9.7 | 문화역 서울 284",
        content: [
          {
            heading: "전시회 소개",
            text: `동시대 아시아 청년작가들을 한 자리에서 볼 수 있는 미술축제입니다. 아시아프에서는 아시아 각국의 대학(원)생 및 35세 이하 젊은 작가들을 대상으로 하는 ‘아시아프’와 36세 이상의 숨겨진 미술계 교수를 발굴하는 ‘히든 아티스트’ 부문으로 나뉘어 약 1천여 명의 작가가 선정되어 3천여 점의 작품을 전시합니다.`,
          },
          {
            subImage: asyaafDetail1
          },
          {
            text: `올해로 18회를 맞이한 아시아프는 43만 명의 관람객이 방문하며 9800여 점의 작품 판매 성과를 거두며 청년 작가를 위한 대표적 아트페어로 자리 잡았습니다.`,
          },
          {
            subImage: asyaafDetail2
          },
          {
            text: `아시아프는 화~일 11:00~19:00 (입장 마감 18:00) 운영하며, 매주 월요일은 휴관합니다. 아티스트 토크, 도슨트 투어, 워크숍 등의 연계 행사를 진행하며, 작품 온라인 판매 및 작가 수익 100% 귀속(영 아티스트) 등 다양한 참여 기회를 제공합니다.`,
          },
        ],
        
      },
    },
    {
      id: 2,
      title: "PIXA ART COLLECTION",
      tag: "전시회 큐레이션",
      subtitle: "마법같은 순간 속으로!",
      image: pixa,
      detail: {
        poster: pixa,
        date: "2025.5.01 ~ 8.20 | 픽사 갤러리",
        content: [
          {
            heading: "전시 소개",
            text: "픽사의 상상력과 기술력이 결합된 예술적 세계를 조명하는 전시입니다.",
          },
          {
            text: "애니메이션 제작의 과정을 예술적 시선으로 해석하며, 픽사의 창의적인 세계를 감상할 수 있습니다.",
          },
        ],
        subImage: pixa,
      },
    },
  ],
  "작가 인터뷰": [
    {
      id: 3,
      title: "박미나 작가 인터뷰",
      tag: "작가 인터뷰",
      subtitle: "색으로 감정을 그리는 사람",
      image: require("../assets/images/artist/박미나.png"),
    },
  ],
  서비스: [
    {
      id: 4,
      title: "Viars 서비스 소개",
      tag: "서비스",
      subtitle: "예술과 기술이 만나는 곳",
      image: require("../assets/images/artist/박미나.png"),
    },
  ],
};
