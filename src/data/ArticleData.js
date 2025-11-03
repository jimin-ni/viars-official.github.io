// src/data/articleData.js
import asyaaf from "../assets/images/article/asyaaf.png";
import asyaafPoster from "../assets/images/exhibition/2025아시아프.png";
import asyaafDetail1 from "../assets/images/article/Detail_asyaaf.png";
import asyaafDetail2 from "../assets/images/article/Detail2_asyaaf.png";

import pixa from "../assets/images/article/pixa.png";
import pixaPoster from "../assets/images/exhibition/MagicForLove.jpg";
import pixaDetail1 from "../assets/images/article/Detail_pixa.png";
import pixaDetail2 from "../assets/images/article/Detail2_pixa.png";

import leebul from "../assets/images/article/leebul.png";
import leebulPoster from "../assets/images/article/leebu_main.png";
import leebulDetail1 from "../assets/images/article/Detail1_leebul.png";
import leebulDetail2 from "../assets/images/article/Detail2_leebul.png";
import leebulDetail3 from "../assets/images/article/Detail3_leebul.png";
import leebulDetail4 from "../assets/images/article/Detail4_leebul.png";

import meena from "../assets/images/article/parkmeena.png";
import meenaPoster from "../assets/images/article/Detail_parkmeena.png";
import meenaDetail1 from "../assets/images/article/Detail2_parkmeena.png";
import meenaDetail2 from "../assets/images/article/Detail3_parkmeena.png";

import service1 from "../assets/images/article/service1.png";
import service1Poster from "../assets/images/article/Detail_service1.png";
import service1Detail1 from "../assets/images/article/Detail2_service1.png";
import service1Detail2 from "../assets/images/article/Detail3_service1.png";
import service1Detail3 from "../assets/images/article/Detail4_service1.png";

import service2 from "../assets/images/article/service2.png";
import service2Poster from "../assets/images/article/Detail_service2.png";
import service2Detail1 from "../assets/images/article/Detail2_service2.png";

export const articles = {
  큐레이션: [
    {
      id: 1,
      title: "아시아프 2025",
      tag: "전시회 큐레이션",
    //   subtitle: "동시대 아시아 청년 작가를 한 자리에서",
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
    //   subtitle: "마법같은 순간 속으로!",
      image: pixa,
      detail: {
        poster: pixaPoster,
        date: "2025.2.27 ~ 5.18  | MPX갤러리",
        content: [
          {
            heading: "전시회 소개",
            text: "마법과도 같은 스토리로 수많은 사람들의 삶에 아름다운 영감과 즐거움을 준 픽사의 작품들을 통해, 삶의 보편적  주제이자 인류의 근원적 에너지인 ‘사랑’이라는 관념을 깊이 있게 바라봅니다.",
          },
          {
            subImage: pixaDetail1
          },
          {
            text: "사랑은 보편적인 감정이지만 사랑하는 방식은 매우 다양하며 역사를 통해 계속해서 변화해 왔습니다. 시대 마다 사랑이라는 주제는 예술가들에게 무한한 영감을 제공해왔습니다. 단순한 감상의 자리를 넘어 각자의 삶 속에서 마주하는 사랑의 순간들 다시금 소중히 바라볼 수 있기를 바라는 마음으로 기획되었습니다.",
          },
          {
            subImage: pixaDetail2
          },
          {
            text: "이 전시는 11:00–20:00 (입장 마감 19:00)진행되며, 휴일이 없지만 회차별로 예약해야 합니다. 입장 시 배부한 포토카드 편지를 작성해 우체통에 넣으면 우편 발송 서비스를 제공하고 있으니, 끝까지 관람하고 소중한 추억을 쌓아보세요!",
          },
        ],
      },
    },
  ],
  "작가 인터뷰": [
    {
      id: 3,
      title: "이불 Lee Bul",
      tag: "작가 인터뷰",
    //   subtitle: "섬세한 조형미로 여성의 서사를 시각화하다",
      image: leebul,
      detail: {
        poster: leebulPoster,
        date: "대한민국, 1964~",
        content: [
          {
            heading: "작가 소개",
            text: "이불은 대한민국을 대표하는 설치 미술가이자 퍼포먼스 아티스트로, 설치, 퍼포먼스, 회화, 드로잉, 영상 등 다양한 매체를 아우르는 실험적이고 장르를 넘나드는 작품 세계를 구축해 왔습니다.",
          },
          {
            subImage: leebulDetail1
          },
          {
            subText: "이불, <장엄한 광채>, 1991, 아트선재",
          },
          {
            text: "1964년 경북 영주에서 태어난 그녀는 홍익대학교에서 조각을 전공했어요. 1980년대 후반부터는 단순히 예쁜 작품을 만드는 게 아니라, 사회와 역사에 대한 비판적인 시선, 더 나은 세상(유토피아)에 대한 고민 같은 진지한 주제를 작품에 담기 시작했어요. 그래서 그녀의 작품은 개인적인 이야기를 넘어서, 많은 사람에게 공감을 주며 국내외 미술계에서 크게 주목받게 되었답니다.",
          },
          {
            subImage: leebulDetail2
          },
          {
            subText: "이불,《이불_1998년 이후》전시 전경, 2025, 리움미술관",
          },
          {
            text: "이불의 작품은 세계 유수의 미술 기관인 뉴욕 현대미술관(MoMA), 구겐하임 미술관, 뉴뮤지엄, 루이셈부르크 무담, 헤이워드 갤러리 등에서 개인전으로 소개되었으며, 아시아 여성 작가로서는 최초로 2012년 도쿄 모리미술관에서 대규모 회고전을 개최했습니다.",
          },
          {
            subImage: leebulDetail3
          },
          {
            subText: "이불 , <롱 테일 헤일로 : CTCS #1>, 2024, 메트로폴리탄",
          },
          {
            text: "이불작가는 오는 9월 4일부터 리움 미술관을 시작으로 대규모 서베이 순환 전시를 시작할 예정입니다. 《이불: 1998년 이후》는 1990년대 후반부터 현재까지 이어지는 이불 작업의 큰 흐름을 조망하는 전시로, 총 150여 점의 작품을 선보입니다.",
          },
          {
            subImage: leebulDetail4
          },
        ],
      },
    },
    {
      id: 4,
      title: "박미나 MeeNa Park",
      tag: "작가 인터뷰",
    //   subtitle: "사회와 감정, 언어 사이의 간극을 탐구하다",
      image: meena,
      detail: {
        poster: meenaPoster,
        date: "대한민국, 1973~",
        content: [
          {
            heading: "작가 소개",
            text: "박미나작가는 미국 로드아일랜드 미술대학 회화과 학사, 헌터칼리지 뉴욕 시립대학원 회화과 석사를 졸업한 작가로, 1996년 첫 개인전 이후 활발한 작품 활동을 이어왔습니다. 2002년에는 쌈지스페이스 작가 거주 프로그램에 참여하며 국내에서 이름을 알리기 시작했고, 2010년 제1회 두산연강예술상을 수상했습니다.",
          },
          {
            subImage: meenaDetail1
          },
          {
            subText: "박미나, <1  to 10>, 1998, 두산아트센터",
          },
          {
            text: "그녀는 색채와 형상을 수집하고 분석하는 탐구적 회화 작업을 전개합니다. ‘집’, ‘스크림’, ‘색채 수집’, ‘딩벳’ 등 연작을 통해, 기존 도상을 새롭게 조합하고 자신만의 색상 팔레트를 적용하는 방식으로, 시각 언어를 통한 데이터적 사유를 시도해 왔습니다",
          },
          {
            subImage: meenaDetail2
          },
          {
            subText: "박미나,《녹색 소파》, 2023, 에르메스 재단",
          },
        ],
      },
    },
  ],
  서비스: [
    {
      id: 5,
      title: "도슨트 업데이트",
      tag: "서비스",
    //   subtitle: "도슨트 메뉴에서 시작하는 나만의 전시 경험",
      image: service1,
      detail: {
        poster: service1Poster,
        date: "2025.9",
        content: [
          {
            heading: "기능 소개",
            text: "현장에서 만나는 도슨트는 정해진 시간에만 들을 수 있지만, viars에서는 다릅니다. 내가 원하는 전시, 원하는 그림 앞에서, 필요한 순간에 해설을 재생할 수 있죠. 시간과 장소의 제약 없이, 나만의 리듬으로 전시를 감상해보세요.",
          },
          {
            subImage: service1Detail1
          },
          {
            text: "내 위치를 기반으로 가장 가까운 전시 도슨트를 추천받고, 새로 오픈한 해설도 바로 확인할 수 있습니다.",
          },
          {
            subImage: service1Detail2
          },
          {
            text: "지금 가장 핫한 도슨트를 랭킹 부분에서 만나볼 수 있습니다. 오디오 도슨트 지원 여부와 전시회의 타입을 오프라인과 온라인 중 어느 것에 해당하는지 태그를 통해서 확인해보세요.",
          },
          {
            subImage: service1Detail3
          },
          {
            text: "재생화면에서 ‘나의 속도’에 맞춘 경험을 가져보세요!도슨트 상세 화면에서 전시회에 대한 상세 정보를 확인해볼 수 있고, AI 도슨트를 통해서 내가 원하는 목소리로 감상할 수 있습니다. 목차 버튼을 통해 원하는 순서대로 작품을 감상할 수도 있습니다.",
          },
        ],
      },
    },
    {
      id: 6,
      title: "월간 구독권",
      tag: "서비스",
    //   subtitle: "무제한 온라인 전시회와 구독자 우선 옥션을 함께",
      image: service2,
      detail: {
        poster: service2Poster,
        date: "2025.11",
        content: [
          {
            heading: "서비스 공지사항",
            text: "Viars 구독권은 단순한 멤버십이 아닙니다. 매월 결제를 통해 누구보다 빠르게 옥션 매물 정보를 받아보고, 상대적으로 경쟁이 적은 낙찰 기회를 선점할 수 있습니다. 신진 작가의 새로운 작품이 올라올 때마다, 당신은 누구보다 먼저 그 소식을 알고 선택할 수 있습니다. 투명한 예술 거래의 시작, Viars 구독으로 예술의 우선권을 경험하세요.",
          },
          {
            subImage: service2Detail1
          },
          {
            text: "Viars 월간 구독자는 온라인 전시회에 무제한으로 접근할 수 있으며, 매달 구독자 전용 아트 콘텐츠와 함께 작은 선물이 제공됩니다. 단순히 작품을 감상하는 것을 넘어, 작가의 세계에 깊이 스며드는 경험을 선사합니다. Viars 구독으로 당신의 예술적 일상에 새로운 영감을 더해보세요.",
          },
        ],
      },
    },
  ],
};
