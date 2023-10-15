import React from "react";
import styles from "./MenuBox.module.css";
import PropTypes from "prop-types";
const MenuBox = ({ select, onOptionClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="220"
      height="120"
      viewBox="0 0 220 120"
      fill="none"
      style={{
        position: "absolute",
        bottom: 220,
        right: 30,
      }}
    >
      <path
        d="M60.2897 117.168C7.96066 108.767 0.0387385 80.3829 0.0387224 58.6714C-1.2668 25.0009 30.7642 9.61002 46.9428 6.12338C79.3284 -2.95363 146.341 -1.07475 173.764 6.12338C221.412 18.6301 221.36 53.389 219.384 70.157C217.906 82.7027 206.452 110.756 159.525 117.168C121.984 122.297 77.7261 119.305 60.2897 117.168Z"
        fill="#FFEEA0"
      />

      {/* 메뉴박스 안에 텍스트 */}
      <text
        id="select1"
        tabIndex={0}
        className={styles.menuItem}
        x="50%"
        y="30%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="32"
        fill="#000000"
        fontFamily="Roboto"
        onClick={() => onOptionClick("select1", select.nextIndex[0])}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onOptionClick("select1", select.nextIndex[0]);
          } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            e.preventDefault();
            const nextOption = document.getElementById("select2");
            if (nextOption) {
              nextOption.focus();
            }
          }
        }}
      >
        {select.option[0]}
      </text>
      <text
        id="select2"
        tabIndex={1}
        className={styles.menuItem}
        x="50%"
        y="65%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="32"
        fill="#000000"
        fontFamily="Roboto"
        onClick={() => onOptionClick("select2", select.nextIndex[1])}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onOptionClick("select2", select.nextIndex[1]);
          } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            e.preventDefault();
            const nextOption = document.getElementById("select1");
            if (nextOption) {
              nextOption.focus();
            }
          }
        }}
      >
        {select.option[1]}
      </text>
    </svg>
  );
};
export default MenuBox;

MenuBox.prototype = {
  select: PropTypes.array.isRequired,
  onOptionClick: PropTypes.func.isRequired,
};
