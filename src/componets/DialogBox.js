import React from "react";
import palette from "../styles/color";

const DialogBox = ({ dialog, name, backgroundColor, arrowColor }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1105"
      height="400"
      viewBox="0 -20 1105 400"
      fill="none"
      style={{
        position: "absolute",
        bottom: 0,
        left: 155,
      }}
    >
      <path
        d="M985.305 17.7771C785.524 -6.68392 320.28 -5.15518 112.289 17.7771C-49.1781 60.5844 -1.28535 169.131 41.1339 219.582C41.1339 248.63 23.3451 309.783 79.4481 322.013C112.289 344.946 688.826 349.023 985.305 329.658C1080.54 325.988 1068.77 262.389 1060.56 219.582C1165.93 100.334 1060.56 26.9919 985.305 17.7771Z"
        fill={backgroundColor}
      />

      {/* 이름표 */}
      <svg
        width="196"
        height="99"
        x="50"
        y="-20"
        viewBox="0 0 196 99"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="191.87"
          height="76.8771"
          rx="38.4386"
          transform="matrix(0.993558 -0.113322 0.0669585 0.997756 0.143066 21.7441)"
          fill={arrowColor}
        />
        {/* 이름표 안에 텍스트 */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="32"
          fill="white"
          fontWeight="bold"
          fontFamily="Dm Sans"
          transform="rotate(-6 50 50)"
        >
          {name}
        </text>
      </svg>

      {/* 대화 내용 */}
      <foreignObject x="150" y="80" width="850" height="300">
        <div
          xmlns="http://www.w3.org/1999/xhtml"
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
        xmlns="http://www.w3.org/2000/svg"
        x="525"
        y="320"
        width="35"
        height="27"
        viewBox="0 0 35 27"
        fill="none"
      >
        <path
          d="M5.10997 0C-1.58609 0.489473 -0.291997 7.13784 1.19206 10.4008C4.10081 14.0717 10.7375 22.1885 14.0143 25.2884C17.2911 28.3883 20.6035 26.58 21.8501 25.2884C24.5808 21.8214 30.7545 13.9902 33.6038 10.4008C37.3081 2.24326 32.7728 0.067954 30.0421 0C21.1378 2.2433 12.2334 2.2433 5.10997 0Z"
          fill={arrowColor}
        />
      </svg>
    </svg>
  );
};

export default DialogBox;
