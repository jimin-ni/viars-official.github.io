// src\pages\SignUp.js

import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Global.css'; 
import '../styles/Landing.css'; 
import '../styles/SignUp.css'; 
import SecondaryButtonOuntlined from "../components/SecondaryButtonOuntlined";

import logo from "../assets/images/logo.png";   // 로고 이미지
import googleIcon from "../assets/icons/google.png";
import kakaoIcon from "../assets/icons/kakaotalk.png";
import appleIcon from "../assets/icons/apple.png";
import naverIcon from "../assets/icons/naver.png";
import emailIcon from "../assets/icons/email.png";





function SignUp() {
  const navigate = useNavigate();

  const handleClick = () => {
    // SecondaryButtonOuntlined 시간을 고려해 액션 끝난 뒤 이동
    setTimeout(() => {
      navigate("/home");
    }, 300); //  0.3초
  };



  return (
    <div className="signUpPage">   

   {/* 로고 */}
        <div className="logoBox">
            <img src={logo} alt="Logo" className="logoImg" />
        </div>

        <div className="buttonBox">
            <div className="button1">
                <SecondaryButtonOuntlined
                    icon={googleIcon}
                    text="Google로 회원가입"
                    onClick={handleClick}
                />
            </div>
            <div className="button2">
                <SecondaryButtonOuntlined
                    icon={kakaoIcon}
                    text="KaKao로 회원가입"
                    onClick={handleClick}
                />
            </div>
            <div className="button3">
                <SecondaryButtonOuntlined
                    icon={appleIcon}
                    text="Apple로 회원가입"
                    onClick={handleClick}
                />
            </div>
            <div className="button4">
                <SecondaryButtonOuntlined
                    icon={naverIcon}
                    text="Naver로 회원가입"
                    onClick={handleClick}
                />
            </div>
            <div className="button5">
                <SecondaryButtonOuntlined
                    icon={emailIcon}
                    text="Email로 회원가입"
                    onClick={handleClick}
                />
            </div>
        </div>

        <div className="signUpMore">
            <p className=" text1">계정이 있어요  |  계정 없이 둘러볼래요</p>
        </div>


    </div>

  );
}

export default SignUp;
