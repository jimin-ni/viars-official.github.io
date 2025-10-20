// \src\components\ScrollToTop.js

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // 페이지 경로(pathname)가 바뀔 때마다 실행

  return null; // 아무것도 렌더링하지 않음
}

export default ScrollToTop;
