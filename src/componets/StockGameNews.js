import React from "react";
import styles from "./StockGameNews.module.css"

const StockGameNews = ({}) => {
    
    return (
        <div>
            <svg 
                width="863" height="624" viewBox="0 0 863 624" fill="none" xmlns="http://www.w3.org/2000/svg"
                className={styles.news_wrap}
            >
                <g filter="url(#filter0_d_353_7464)">
                <rect width="855" height="624" transform="translate(4)" fill="white"/>
                </g>
                <defs>
                <filter id="filter0_d_353_7464" x="0" y="0" width="863" height="632" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_353_7464"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_353_7464" result="shape"/>
                </filter>
                </defs>
            </svg>


        </div>
    )
}

export default StockGameNews;