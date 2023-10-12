import React from "react";
import palette from "../styles/color";
import styles from "./Quiz.module.css"
import PropTypes from "prop-types";
import LayThinking from "../assets/images/Lay/lay_thinking.svg"

const QuizTitle = ({term}) => {
    return (
        <div className={styles.wrap}>

        {/* 용어 게임 헤더 */}
            <img className={styles.character_wrap} src={LayThinking} alt="레이 고민" />,
                <svg xmlns="http://www.w3.org/2000/svg" 
                width="588" 
                height="71" 
                viewBox="0 0 588 71" 
                fill="none"
                style={{
                    position: "absolute",
                    bottom: 892,
                    left: 125,
                    top: 62,
                }}
                >
                <path d="M524.307 3.69057C417.998 -1.3876 170.43 -1.07023 59.7519 3.69057C-26.169 12.5775 -0.683967 35.112 21.8884 45.5858C21.8884 51.6161 12.4226 64.3116 42.2764 66.8507C59.7519 71.6115 366.543 72.4579 524.307 68.4377C574.986 67.6759 568.724 54.4726 564.355 45.5858C620.422 20.8295 564.355 5.60358 524.307 3.69057Z" fill="#EBF3FC"/>
            </svg>
            {/* 헤더 안에 텍스트 */}
            <foreignObject x="150" y="80" width="850" height="300">
                <div
                xmlns="http://www.w3.org/1999/xhtml"
                className={styles.dialogText}
                style={{
                    position: "absolute",
                    left: 170,
                    top: 80,
                    letterSpacing: "1px",
                }}
                >
                {term}이 뭘까?
                </div>
            </foreignObject>

        {/* 용어 게임 바디 */}
        <div >
            {/* 리스트1 */}
            <div className={styles.quiz_list}>
            <svg xmlns="http://www.w3.org/2000/svg" 
                width="1178" 
                height="144" 
                viewBox="0 0 1178 144" 
                fill="none"
                className={styles.quiz_list}
                style={{
                    position: "absolute",
                    top: 300,
                    left: 131.5,
                }}
            >
            <g filter="url(#filter0_d_74_9293)">
                <path d="M0 68C0 30.4446 30.4446 0 68 0H1101C1138.56 0 1169 30.4446 1169 68C1169 105.555 1138.56 136 1101 136H68C30.4446 136 0 105.555 0 68Z" fill="white" fill-opacity="0.8" shape-rendering="crispEdges"/>
                <path d="M0.5 68C0.5 30.7208 30.7208 0.5 68 0.5H1101C1138.28 0.5 1168.5 30.7208 1168.5 68C1168.5 105.279 1138.28 135.5 1101 135.5H68C30.7208 135.5 0.5 105.279 0.5 68Z" stroke="#FFE8D4" shape-rendering="crispEdges"/>
            </g>
            <defs>
                <filter id="filter0_d_74_9293" x="0" y="0" width="1178" height="144" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="5" dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.558333 0 0 0 0 0.558333 0 0 0 0 0.558333 0 0 0 0.55 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_74_9293"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_74_9293" result="shape"/>
                </filter>
            </defs>
            </svg>
                {/* 바디 안에 텍스트 */}

            </div>

            <div>
                {/* 리스트2 */}
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="1177" 
                height="144" 
                viewBox="0 0 1177 144" 
                fill="none"
                style={{
                    position: "absolute",
                    top: 500,
                    left: 131.5,
                }}
                >
                <g filter="url(#filter0_d_74_9293)">
                    <path d="M4 68C4 30.4446 34.4446 0 72 0H1105C1142.56 0 1173 30.4446 1173 68C1173 105.555 1142.56 136 1105 136H72C34.4446 136 4 105.555 4 68Z" fill="white" fill-opacity="0.8" shape-rendering="crispEdges"/>
                    <path d="M4.5 68C4.5 30.7208 34.7208 0.5 72 0.5H1105C1142.28 0.5 1172.5 30.7208 1172.5 68C1172.5 105.279 1142.28 135.5 1105 135.5H72C34.7208 135.5 4.5 105.279 4.5 68Z" stroke="#FFE8D4" shape-rendering="crispEdges"/>
                </g>
                <defs>
                    <filter id="filter0_d_74_9293" x="0" y="0" width="1177" height="144" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.558333 0 0 0 0 0.558333 0 0 0 0 0.558333 0 0 0 0.55 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_74_9293"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_74_9293" result="shape"/>
                    </filter>
                </defs>
                </svg>
            </div>

            <div>
                {/* 리스트3 */}
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="1177" 
                height="144" 
                viewBox="0 0 1177 144" 
                fill="none"
                style={{
                    position: "absolute",
                    top: 700,
                    left: 131.5,
                }}
                >
                <g filter="url(#filter0_d_74_9293)">
                    <path d="M4 68C4 30.4446 34.4446 0 72 0H1105C1142.56 0 1173 30.4446 1173 68C1173 105.555 1142.56 136 1105 136H72C34.4446 136 4 105.555 4 68Z" fill="white" fill-opacity="0.8" shape-rendering="crispEdges"/>
                    <path d="M4.5 68C4.5 30.7208 34.7208 0.5 72 0.5H1105C1142.28 0.5 1172.5 30.7208 1172.5 68C1172.5 105.279 1142.28 135.5 1105 135.5H72C34.7208 135.5 4.5 105.279 4.5 68Z" stroke="#FFE8D4" shape-rendering="crispEdges"/>
                </g>
                <defs>
                    <filter id="filter0_d_74_9293" x="0" y="0" width="1177" height="144" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.558333 0 0 0 0 0.558333 0 0 0 0 0.558333 0 0 0 0.55 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_74_9293"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_74_9293" result="shape"/>
                    </filter>
                </defs>
                </svg>
            </div>

        </div>
    </div>
    );
};

export default QuizTitle;
QuizTitle.prototype = {
    term: PropTypes.string.isRequired,
  };