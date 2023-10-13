import React from "react";
import palette from "../styles/color";
import styles from "./DialogBox.module.css";
import PropTypes from "prop-types";

const DialogBox = ({ dialog, name, backgroundColor, arrowColor }) => {
  return (
    <svg
      width="783"
      height="245"
      viewBox="0 0 783 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        bottom: 30,
        left: 130,
      }}
    >
      <path
        d="M698.184 12.3192C556.62 -4.63184 226.95 -3.57245 79.5675 12.3192C-34.8475 41.9839 -0.910794 117.205 29.1474 152.167C29.1474 172.296 16.5423 214.674 56.2967 223.15C79.5675 239.041 488.1 241.867 698.184 228.447C765.669 225.904 757.331 181.831 751.513 152.167C826.174 69.5296 751.513 18.7049 698.184 12.3192Z"
        fill={backgroundColor}
      />
      {/* 이름표 */}
      <svg
        width="107"
        height="57"
        viewBox="0 0 107 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="105"
          height="45"
          rx="20"
          transform="matrix(0.984829 -0.173527 0.150503 0.98861 0 17.6904)"
          fill={arrowColor}
        />
        {/* 이름표 안에 텍스트 */}
        <text
          x="50%"
          y="40%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="26px"
          fill="white"
          fontWeight="bold"
          fontFamily="Poppins"
          transform="matrix(0.984829 -0.173527 0.150503 0.98861 0 17.6904)"
        >
          {name}
        </text>
      </svg>

      {/* 대화 내용 */}
      <foreignObject x="150" y="80" width="850" height="300">
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          className={styles.dialogText}
          style={{
            whiteSpace: "pre-wrap",
            fontSize: "32px",
            color: palette.black,
            textAlign: "center",
            letterSpacing: "2px",
            lineHeight: "1.5",
          }}
        >
          {dialog}
        </div>
      </foreignObject>

      {/* 화살표 */}
      <svg
        x="380"
        y="225"
        width="25"
        height="16"
        viewBox="0 0 25 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.62314 0C-1.12459 0.277959 -0.207036 4.05339 0.845208 5.90636C2.90761 7.99097 7.61325 12.6003 9.9366 14.3606C12.26 16.121 14.6086 15.0941 15.4925 14.3606C17.4286 12.3918 21.8059 7.94465 23.8262 5.90636C26.4526 1.27389 23.237 0.0385893 21.3008 0C14.9874 1.27391 8.67391 1.27391 3.62314 0Z"
          fill={arrowColor}
        />
      </svg>
    </svg>
  );
};

export default DialogBox;
DialogBox.prototype = {
  dialog: PropTypes.string,
  name: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  arrowColor: PropTypes.string.isRequired,
};
