import React from "react";
import styles from "./MenuBox.module.css";

const MenuBox = ({ select1, select2 }) => {
  const handleSelect1Click = () => {
    console.log("첫 번째 선택지를 클릭했습니다.");
  };
  // 두 번째 선택지를 클릭할 때 호출되는 함수
  const handleSelect2Click = () => {
    console.log("두 번째 선택지를 클릭했습니다.");
  };

  return (
    <svg
      mlns="http://www.w3.org/2000/svg"
      width="303"
      height="168"
      viewBox="0 0 303 168"
      fill="none"
      style={{
        position: "absolute",
        bottom: 280,
        right: 30,
      }}
    >
      <path
        d="M83.0354 164.035C10.964 152.274 0.0533534 112.536 0.0533313 82.1399C-1.74472 35.0013 42.3706 13.454 64.6531 8.57273C109.257 -4.13508 201.551 -1.50466 239.32 8.57273C304.945 26.0821 304.872 74.7446 302.152 98.2198C300.116 115.784 284.34 155.059 219.71 164.035C168.005 171.216 107.05 167.027 83.0354 164.035Z"
        fill="#FFEEA0"
      />

      {/* 메뉴박스 안에 텍스트 */}
      <text
        className={styles.menuItem}
        x="50%"
        y="35%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="32"
        fill="#000000"
        fontFamily="Roboto"
        onClick={handleSelect1Click} // 이벤트 핸들러 연결
      >
        {select1}
      </text>
      <text
        className={styles.menuItem}
        x="50%"
        y="70%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="32"
        fill="#000000"
        fontFamily="Roboto"
        onClick={handleSelect2Click} // 이벤트 핸들러 연결
      >
        {select2}
      </text>
    </svg>
  );
};
export default MenuBox;
