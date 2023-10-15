import React from "react";
import styles from "./TradingButton.module.css"

const TradingButton = ({ onBuyClick, onSellClick, year }) => {
    return (
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" 
        width="118" height="50" viewBox="0 0 118 50" fill="none"
        className={styles.year}
        style={{
            position: "absolute",
            top:154,
            left:753,
        }}>
            <path d="M0 20C0 8.9543 8.95431 0 20 0H98C109.046 0 118 8.95431 118 20V30C118 41.0457 109.046 50 98 50H20C8.95431 50 0 41.0457 0 30V20Z" fill="#4A3A55" fill-opacity="0.8"/>
        </svg>
        <text
            className={styles.year_txt}
            x="150" y="80" width="850" height="300"
            style={{
                position: "absolute",
                left: 790,
                top: 170,
                letterSpacing: "1px",
            }}
            >
            2020{year}
        </text>

        <div className={styles.button_wrap}>
            <button className={styles.button_buy} 
            style={{
                position: "absolute",
                left: 270,
                top: 480,
            }}
            onClick={onBuyClick}>매수</button>

            <button className={styles.button_sell} 
            style={{
                position: "absolute",
                left: 540,
                top: 480,
            }}
            onClick={onSellClick}>매도</button>
        </div>
    </div>

        
        
    );
};

export default TradingButton;
