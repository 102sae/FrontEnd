import React from "react";

const LayCrush = ({ correct, point }) => {
  const message = correct
    ? `호감도가 ${point} 상승하였습니다.`
    : `호감도가 ${point} 하락하였습니다.`;

  return (
    <div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="420"
            height="80"
            viewBox="0 0 420 80"
            fill="none"
            style={{
            position: "absolute",
            left: 312,
            top: 147,
            }}
        >
        <g filter="url(#filter0_d_74_9425)">
          <path
            d="M10 38C10 21.4315 23.4315 8 40 8H380C396.569 8 410 21.4315 410 38V38C410 54.5685 396.569 68 380 68H40C23.4315 68 10 54.5685 10 38V38Z"
            fill="#ECECEC"
            fillOpacity="0.6"
            shapeRendering="crispEdges"
          />
        </g>
        <defs>
        <filter id="filter0_d_74_9425" x="0" y="0" width="420" height="80" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="2"/>
        <feGaussianBlur stdDeviation="5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_74_9425"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_74_9425" result="shape"/>
        </filter>
        </defs>
      </svg>

      {/* 호감도 안에 텍스트 */}
      <text x="150" y="80" width="850" height="300"
        style={{
            position: "absolute",
            left: 380,
            top: 175,
            letterSpacing: "1px",
        }}>
        {message}
      </text>
    </div>
  );
};

export default LayCrush;
