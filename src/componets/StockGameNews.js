import React from "react";
import styles from "./StockGameNews.module.css";
import StockGameNews from "../assets/images/StockGameNews.png";
import NewsScenarioData from "../pages/Molly/NewsScenario";

const StockGameNewsPaper = ({
  year,
  showStockGameNews,
  toggleStockGameNews,
}) => {
  const handleImageClick = () => {
    toggleStockGameNews(!showStockGameNews);
  };

  const NewsScenario = NewsScenarioData();

  return showStockGameNews ? (
    <div className={styles.newsWrap} onClick={handleImageClick}>
      <img
        src={StockGameNews}
        alt="StockGameNews"
        className={styles.StockGameNews}
      />
      <div className={styles.newsTitleWrap}>
        <p className={styles.newsYear}>{year}년 주요 뉴스</p>
        {NewsScenario.map((newsList) => {
          if (newsList.year === year) {
            return newsList.news.map((news, index) => {
              return (
                <li className={styles.newsTitle} key={index}>
                  <a href={news.newsUrl} target="_blank">
                    {news.newsHead}
                  </a>
                </li>
              );
            });
          }
          return null;
        })}
      </div>
    </div>
  ) : null;
};

export default StockGameNewsPaper;
