import React from "react";
import styles from "./TradingButton.module.css";

const TradingButton = ({ onBuyClick, onSellClick, year }) => {
  return (
    <div>
      {/* 년도 */}

      <text
        className={styles.year_txt}
        x="150"
        y="80"
        width="850"
        height="300"
        style={{
          position: "absolute",
          top: 40,
          left: 480,
          letterSpacing: "1px",
        }}
      >
        {year}년
      </text>

      {/* 매수 & 매도 버튼 */}
      <div className={styles.button_wrap}>
        {/* 매수 */}
        <button
          className={styles.button_buy}
          style={{
            position: "absolute",
            top: 480,
            left: 230,
          }}
          onClick={onBuyClick}
        >
          매수
        </button>

        {/* 매도 */}
        <button
          className={styles.button_sell}
          style={{
            position: "absolute",
            top: 480,
            left: 620,
          }}
          onClick={onSellClick}
        >
          매도
        </button>
      </div>
    </div>
  );
};

export default TradingButton;
