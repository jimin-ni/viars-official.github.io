// // src/pages/Docent.js
// import React, { useState } from "react";
// import "../styles/Docent.css";
// import ArtworkCard from "../components/ArtworkCard";

// import searchIcon from "../assets/icons/search.png";
// import cartIcon from "../assets/icons/cart.png";
// import heartIcon from "../assets/icons/heart.png";
// import eventWide from "../assets/images/event-wide.png";

// import NavbarBottom from "../components/NavbarBottom"; 

// export default function Docent() {
//   const [activeTag, setActiveTag] = useState("원화");
//   const [activeStatus, setActiveStatus] = useState("진행 중");

//   const tags = ["원화", "NFT", "비회화"];
//   const statusTabs = ["진행 중", "오픈 예정", "판매 종료"];

//   const artworks = [
//     {
//       mainImage: require("../assets/images/artwork/orangeSofa.png"),
//       artistImage: require("../assets/images/artist/박미나.png"),
//       artistName: "박미나",
//       tag: "원화",
//       title: "오렌지색 소파",
//       price: "1,000,000원",
//       count: "8회",
//       status: "진행 중",
//     },
//     {
//       mainImage: require("../assets/images/artwork/1to10.png"),
//       artistImage: require("../assets/images/artist/박미나.png"),
//       artistName: "박미나",
//       tag: "원화",
//       title: "1 to 10",
//       price: "1,200,000원",
//       count: "5회",
//       status: "진행 중",
//     },
//     {
//       mainImage: require("../assets/images/artwork/curtainOfEmotion.png"),
//       artistImage: require("../assets/images/artist/정은영.png"),
//       artistName: "정은영",
//       tag: "NFT",
//       title: "정동의 막",
//       price: "800,000원",
//       count: "2회",
//       status: "진행 중",
//     },
//     {
//       mainImage: require("../assets/images/artwork/flashes.png"),
//       artistImage: require("../assets/images/artist/정은영.png"),
//       artistName: "정은영",
//       tag: "NFT",
//       title: "섬광, 잔상, 속도와 소음의 공연",
//       price: "740,000원",
//       count: "4회",
//       status: "진행 중",
//     },
//     {
//       mainImage: require("../assets/images/artwork/greenSofa.png"),
//       artistImage: require("../assets/images/artist/박미나.png"),
//       artistName: "박미나",
//       tag: "원화",
//       title: "녹색 소파",
//       price: "-원",
//       count: "-회",
//       status: "오픈 예정",
//     },
//     {
//       mainImage: require("../assets/images/artwork/houseOfHouse.png"),
//       artistImage: require("../assets/images/artist/서호도.png"),
//       artistName: "서호도",
//       tag: "비회화",
//       title: "집 속의 집 속의 집 속의 집",
//       price: "-원",
//       count: "-회",
//       status: "오픈 예정",
//     },
//     {
//       mainImage: require("../assets/images/artwork/outOfThing.png"),
//       artistImage: require("../assets/images/artist/이이남.png"),
//       artistName: "이이남",
//       tag: "NFT",
//       title: "형상 밖으로 벗어나 존재의 중심에 서다",
//       price: "-원",
//       count: "-회",
//       status: "오픈 예정",
//     },
//     {
//       mainImage: require("../assets/images/artwork/theWonders.png"),
//       artistImage: require("../assets/images/artist/AliceRohrwacher.png"),
//       artistName: "Alice Rohrwacher",
//       tag: "NFT",
//       title: "The Wonders",
//       price: "-원",
//       count: "-회",
//       status: "오픈 예정",
//     },
//     {
//       mainImage: require("../assets/images/artwork/aHeroForJessie.png"),
//       artistImage: require("../assets/images/artist/JamesRobertson.png"),
//       artistName: "James Robertson",
//       tag: "원화",
//       title: "A Hero for Jessie",
//       price: "750,000원",
//       count: "2회",
//       status: "판매 종료",
//     },
//     {
//       mainImage: require("../assets/images/artwork/sound.png"),
//       artistImage: require("../assets/images/artist/양혜규.png"),
//       artistName: "양혜규",
//       tag: "비회화",
//       title: "소리 나는 운동 지도",
//       price: "2,300,000원",
//       count: "7회",
//       status: "판매 종료",
//     },
//     {
//       mainImage: require("../assets/images/artwork/newMongyudowondo.png"),
//       artistImage: require("../assets/images/artist/이이남.png"),
//       artistName: "이이남",
//       tag: "NFT",
//       title: "신 몽유도원도",
//       price: "981,000원",
//       count: "3회",
//       status: "판매 종료",
//     },
//     {
//       mainImage: require("../assets/images/artwork/fourSeasons.png"),
//       artistImage: require("../assets/images/artist/이이남.png"),
//       artistName: "이이남",
//       tag: "NFT",
//       title: "인왕제색도 - 사계",
//       price: "973,000원",
//       count: "5회",
//       status: "판매 종료",
//     },
//   ];

//   const filteredArtworks = artworks.filter(
//     (a) => a.tag === activeTag && a.status === activeStatus
//   );

//   return (
//     <div className="Docent">
//       <div className="Subtitle1"> docent </div>

//       <NavbarBottom />
//     </div>
//   );
// }
