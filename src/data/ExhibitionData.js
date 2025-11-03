// src/data/ExhibitionData.js

export const exhibitions = [
  {
    id: "asyaaf-2025",
    types: ["IRNS"],               // APTResult의 추천 유형들(복수 가능)
    title: "2025 아시아프",
    poster: require("../assets/images/exhibition/2025아시아프.png"),
    location: "문화역서울284",
    date: "2025.08.12 - 2025.09.07",
    tags: ["오디오 도슨트", "오프라인"],
    // 상세 소개 섹션들
    contents: [
      { heading: "전시 소개", text: "청년부터 중견까지, 사실적·감성적·자연적 작품이 공존하는 아트페어입니다. 인물·풍경 회화, 감성적 설치물 등 IRNS 성향을 만족시킬 수 있는 작품들을 다채롭게 만날 수 있습니다." },
    ],
    // 구글 지도(좌표 or place 쿼리 중 택1)
    map: { place: "문화역서울284" },
    // 오디오 도슨트 섹션 (재생 페이지 연결용)
    audio: {
      cover: require("../assets/images/exhibition/2025아시아프.png"),
      total: 10 * 60 + 3, // 총 길이(초)
      tracks: [
        { id: "part-01", title: "1부 성인", start: 0, captions: [
          { t: 3, text: "어서오세요. 아시아프 2025 전시장입니다." },
          { t: 24, text: "이번 전시는 청년작가와 히든아티스트로 구성됩니다." },
        ]},
      ],
      // 목소리/언어 프리셋
      voices: {
        tones: ["voice1", "voice2", "voice3"],
        langs: ["eng", "日本語", "中國人", "español"]
      }
    },
  },

  {
    id: "magic-for-love",
    types: ["EANS"],
    title: "PIXAR ART COLLECTION: Magic for Love",
    poster: require("../assets/images/exhibition/MagicForLove.jpg"),
    location: "MPX갤러리",
    date: "2025.02.27 - 2025.05.18",
    tags: ["오디오 도슨트", "오프라인"],
    contents: [
      { heading: "전시 소개", text: "픽사가 던지는 보편적 감정 ‘사랑’의 레이어를 작품으로 재해석합니다." },
    ],
    map: { place: "MPX Gallery Seoul" },
    audio: {
      cover: require("../assets/images/exhibition/MagicForLove.jpg"),
      total: 8 * 60 + 42,
      tracks: [{ id: "part-01", title: "1부 성인", start: 0, captions: [] }],
      voices: { tones: ["voice1","voice2","voice3"], langs: ["eng","日本語","中國人","español"] }
    },
  },

  // …필요 전시 계속 추가(최소 16개). 아래는 예시로 APTResultData의 항목들을 맞춰 둡니다.
  { id: "the-return", types: ["IADC"], title: "The Return",
    poster: require("../assets/images/exhibition/TheReturn.png"),
    location: "페이스 갤러리", date: "2025.06.14 - 2025.09.27",
    tags: ["오디오 도슨트", "오프라인"],
    contents: [{ text: "상징을 조형성과 패턴으로 풀어내는 관람자를 위한 전시." }],
    map: { lat: 37.523, lng: 127.036, place: "페이스 서울" },
    audio: { cover: require("../assets/images/exhibition/TheReturn.png"),
      total: 603, tracks: [{ id:"part-01", title:"1부 성인", start:0, captions:[] }],
      voices:{ tones:["voice1","voice2","voice3"], langs:["eng","日本語","中國人","español"] } }
  },

  { id: "the-mutable-line", types: ["IANS"], title: "The Mutable Line",
    poster: require("../assets/images/exhibition/TheMutableLine.jpg"),
    location: "G Gallery 서울", date: "2025.06.25 - 2025.07.26",
    tags: ["오디오 도슨트", "오프라인"],
    contents: [{ text: "직관과 상징의 흐름을 선과 면으로 탐색하는 전시." }],
    map: { place: "G Gallery Seoul" },
    audio: { cover: require("../assets/images/exhibition/TheMutableLine.jpg"),
      total: 580, tracks:[{ id:"part-01", title:"1부 성인", start:0, captions:[] }],
      voices:{ tones:["voice1","voice2","voice3"], langs:["eng","日本語","中國人","español"] } }
  },

  { id: "radiance", types: ["IRNC"], title: "광채 光彩: 시작의 순간들",
    poster: require("../assets/images/exhibition/TheRadiance.jpg"),
    location: "서울시립 사진미술관", date: "2025.05.29 - 2025.10.12",
    tags: ["오디오 도슨트", "오프라인"],
    contents: [{ text: "현실적 묘사 속 내면의 감정을 기록한 사진들을 조명합니다." }],
    map: { place: "Seoul Museum of Photography" },
    audio: { cover: require("../assets/images/exhibition/TheRadiance.jpg"),
      total: 612, tracks:[{ id:"part-01", title:"1부 성인", start:0, captions:[] }],
      voices:{ tones:["voice1","voice2","voice3"], langs:["eng","日本語","中國人","español"] } }
  },

  // … ERNS, ERDC, ERDS, EADC, EANC, EADS, IRDC, IRDS 등도 같은 방식으로 추가
];

export const getExhibitionById = (id) => exhibitions.find(e => e.id === id);
export const findByType = (type) =>
  exhibitions.find(e => (e.types || []).includes(type));
