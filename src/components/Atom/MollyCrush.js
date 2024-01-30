import React from "react";

const MollyCrush = ({ correct, point, stockRate }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="625"
        height="127"
        viewBox="0 0 625 127"
        fill="none"
        style={{
          position: "absolute",
          left: 180,
          top: 150,
        }}
      >
        <g filter="url(#filter0_d_455_1532)">
          <path
            d="M10 48C10 25.9086 27.9086 8 50 8H575C597.091 8 615 25.9086 615 48V75C615 97.0914 597.091 115 575 115H50C27.9086 115 10 97.0914 10 75V48Z"
            fill="#FFE8D4"
            fill-opacity="0.7"
            shape-rendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_455_1532"
            x="0"
            y="0"
            width="625"
            height="127"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_455_1532"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_455_1532"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      {/* 호감도 안에 텍스트 */}
      <text
        x="150"
        y="80"
        width="850"
        height="300"
        style={{
          position: "absolute",
          left: 300,
          top: 200,
          letterSpacing: "1px",
        }}
      >
        <div>
          {correct ? (
            <p>
              주가 증감율 : <span style={{ color: "red" }}>{stockRate}% </span>{" "}
              👉 호감도가 <span style={{ color: "red" }}>{point}</span>{" "}
              상승하였습니다.
            </p>
          ) : (
            <p>
              주가 증감율 : <span style={{ color: "blue" }}>{stockRate}% </span>{" "}
              👉 호감도가 <span style={{ color: "blue" }}>{point}</span>{" "}
              하락하였습니다.
            </p>
          )}
        </div>
      </text>
    </div>
  );
};

export default MollyCrush;
