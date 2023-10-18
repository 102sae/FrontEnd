import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./StockGameNews.module.css";
import StockGameNews from "../assets/images/StockGameNews.png";

const StockGameNewsPaper = ({
  newsData,
  showStockGameNews,
  toggleStockGameNews,}) => {
  const handleImageClick = () => {
    toggleStockGameNews(!showStockGameNews);
  };

  const NewsScenario = [
    {
      year: newsData.year,
      news: [
        {
          newsHead: newsData.news[0].newsHead,
          newsUrl: newsData.news[0].newsUrl,
        },
        {
          newsHead: newsData.news[1].newsHead,
          newsUrl: newsData.news[1].newsUrl,
        },
        {
          newsHead: newsData.news[2].newsHead,
          newsUrl: newsData.news[2].newsUrl,
        },
        {
          newsHead: newsData.news[3].newsHead,
          newsUrl: newsData.news[3].newsUrl,
        },
        {
          newsHead: newsData.news[4].newsHead,
          newsUrl: newsData.news[4].newsUrl,
        },
      ],
    },

  ];


  return showStockGameNews ? (
    <div className={styles.newsWrap} onClick={handleImageClick}>
      <img
        src={StockGameNews}
        alt="StockGameNews"
        className={styles.StockGameNews}
      />
      <div className={styles.newsTitleWrap}>
        <p className={styles.newsYear}>{newsData.year}년 주요 뉴스</p>
        {NewsScenario.map((newsList) => {
          if (newsList.year === newsData.year) {
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
