import React from "react";
import palette from "../styles/color";
import styles from "./Quiz.module.css"
import PropTypes from "prop-types";
import LayThinking from "../assets/images/Lay/lay_thinking.svg"

const QuizTitle = ({term}) => {
    return (
        <div className={styles.wrap}>

        {/* 용어 게임 헤더 */}
            <img className={styles.character_wrap} src={LayThinking} alt="레이 고민" />
            <svg xmlns="http://www.w3.org/2000/svg" 
            width="419" 
            height="54" 
            viewBox="0 0 419 54" 
            fill="none"
            style={{
                position: "absolute",
                bottom: 892,
                left: 125,
                top: 65,
            }}
            >
            <path d="M372.84 2.76432C297.243 -1.03934 121.194 -0.801625 42.4902 2.76432C-18.609 9.42081 -0.486377 26.2997 15.5651 34.1448C15.5651 38.6617 8.83383 48.1709 30.0632 50.0728C42.4902 53.6387 260.653 54.2727 372.84 51.2614C408.879 50.6909 404.426 40.8013 401.319 34.1448C441.189 15.6018 401.319 4.19722 372.84 2.76432Z" fill="#EBF3FC"/>
            </svg>
            {/* 헤더 안에 텍스트 */}
            <foreignObject x="150" y="80" width="850" height="300">
                <div
                xmlns="http://www.w3.org/1999/xhtml"
                className={styles.quiz_title}
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
            <div >
            <svg xmlns="http://www.w3.org/2000/svg" 
                    width="809" height="133" viewBox="0 0 809 133" fill="none"
                    className={styles.quiz_list}
                    style={{
                        position: "absolute",
                        top: 192,
                        left: 107.5,
                    }}
                >
                <g filter="url(#filter0_d_74_9294)">
                    <path d="M0 62.5C0 27.9822 27.9822 0 62.5 0H737.5C772.018 0 800 27.9822 800 62.5V62.5C800 97.0178 772.018 125 737.5 125H62.5C27.9822 125 0 97.0178 0 62.5V62.5Z" fill="white"/>
                    <path d="M62.5 0.5H737.5C771.742 0.5 799.5 28.2583 799.5 62.5C799.5 96.7417 771.742 124.5 737.5 124.5H62.5C28.2583 124.5 0.5 96.7417 0.5 62.5C0.5 28.2583 28.2583 0.5 62.5 0.5Z" stroke="#FFE8D4"/>
                </g>
                <defs>
                    <filter id="filter0_d_74_9294" x="0" y="0" width="809" height="133" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="5" dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.558333 0 0 0 0 0.558333 0 0 0 0 0.558333 0 0 0 0.55 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_74_9294"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_74_9294" result="shape"/>
                    </filter>
                </defs>
            </svg>
                {/* 리스트1 안에 텍스트 */}
                <foreignObject x="150" y="80" width="850" height="300">
                    <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    className={styles.quiz_list_txt}
                    style={{
                        position: "absolute",
                        top: 240,
                    }}
                    >
                    {term}이 뭘까?
                    </div>
                </foreignObject>
            </div>

            <div>
                {/* 리스트2 */}
                <svg xmlns="http://www.w3.org/2000/svg" 
                    width="809" height="133" viewBox="0 0 809 133" fill="none"
                    className={styles.quiz_list}
                    style={{
                        position: "absolute",
                        top: 382,
                        left: 107.5,
                    }}
                >
                <g filter="url(#filter0_d_74_9294)">
                    <path d="M0 62.5C0 27.9822 27.9822 0 62.5 0H737.5C772.018 0 800 27.9822 800 62.5V62.5C800 97.0178 772.018 125 737.5 125H62.5C27.9822 125 0 97.0178 0 62.5V62.5Z" fill="white"/>
                    <path d="M62.5 0.5H737.5C771.742 0.5 799.5 28.2583 799.5 62.5C799.5 96.7417 771.742 124.5 737.5 124.5H62.5C28.2583 124.5 0.5 96.7417 0.5 62.5C0.5 28.2583 28.2583 0.5 62.5 0.5Z" stroke="#FFE8D4"/>
                </g>
                <defs>
                    <filter id="filter0_d_74_9294" x="0" y="0" width="809" height="133" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="5" dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.558333 0 0 0 0 0.558333 0 0 0 0 0.558333 0 0 0 0.55 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_74_9294"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_74_9294" result="shape"/>
                    </filter>
                </defs>
                </svg>
                {/* 리스트2 안에 텍스트 */}
                <foreignObject x="150" y="80" width="850" height="300">
                    <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    className={styles.quiz_list_txt}
                    style={{
                        position: "absolute",
                        top: 430,
                    }}
                    >
                    {term}이 뭘까?
                    </div>
                </foreignObject>
            </div>

            <div>
                {/* 리스트3 */}
                <svg xmlns="http://www.w3.org/2000/svg" 
                    width="809" height="133" viewBox="0 0 809 133" fill="none"
                    className={styles.quiz_list}
                    style={{
                        position: "absolute",
                        top: 572,
                        left: 107.5,
                    }}
                >
                <g filter="url(#filter0_d_74_9294)">
                    <path d="M0 62.5C0 27.9822 27.9822 0 62.5 0H737.5C772.018 0 800 27.9822 800 62.5V62.5C800 97.0178 772.018 125 737.5 125H62.5C27.9822 125 0 97.0178 0 62.5V62.5Z" fill="white"/>
                    <path d="M62.5 0.5H737.5C771.742 0.5 799.5 28.2583 799.5 62.5C799.5 96.7417 771.742 124.5 737.5 124.5H62.5C28.2583 124.5 0.5 96.7417 0.5 62.5C0.5 28.2583 28.2583 0.5 62.5 0.5Z" stroke="#FFE8D4"/>
                </g>
                <defs>
                    <filter id="filter0_d_74_9294" x="0" y="0" width="809" height="133" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="5" dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.558333 0 0 0 0 0.558333 0 0 0 0 0.558333 0 0 0 0.55 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_74_9294"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_74_9294" result="shape"/>
                    </filter>
                </defs>
                </svg>
                {/* 리스트3 안에 텍스트 */}
                <foreignObject x="150" y="80" width="850" height="300">
                    <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    className={styles.quiz_list_txt}
                    style={{
                        position: "absolute",
                        top: 620,
                    }}
                    >
                    {term}이 뭘까?
                    </div>
                </foreignObject>
            </div>

        </div>
    </div>
    );
};

export default QuizTitle;
QuizTitle.prototype = {
    term: PropTypes.string.isRequired,
  };