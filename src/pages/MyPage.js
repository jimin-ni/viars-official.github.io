// src\pages\MyPage.js

import React from "react";
// import { useNavigate } from "react-router-dom";

import "../styles/MyPage.css";

import NavbarBottom from "../components/NavbarBottom";


export default function MyPage() {

  return (
    <div className="MyPage">
     <p>MyPage</p>
     <NavbarBottom />
    </div>
  );
}
