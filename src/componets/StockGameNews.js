import React, { useState } from "react";
import styles from "./StockGameNews.module.css";
import StockGameNews from "../assets/images/StockGameNews.png";
import NewsScenario from "../pages/Molly/NewsScenario";

const StockGameNewsPaper = ({ showStockGameNews, toggleStockGameNews }) => {
  const handleImageClick = () => {
    toggleStockGameNews(!showStockGameNews);
  };

  return showStockGameNews ? (
    <div className={styles.news_wrap} onClick={handleImageClick}>
      <img
        src={StockGameNews}
        alt="StockGameNews"
        className={styles.StockGameNews}
      />
    </div>
  ) : null;
};

export default StockGameNewsPaper;
