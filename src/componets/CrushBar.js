import React, { useState, useEffect } from "react";
import styles from "./CrushBar.module.css";
import Crush from "../assets/images/icon_crush.svg";

const CrushBar = () => {
  console.log("CrushBar 컴포넌트 호출");
  // 로컬 스토리지에서 호감도 가져오기, 기본 값은 50
  const crushPercent = parseInt(localStorage.getItem("crushPercent"));
  console.log("CrushBar crushPercent", crushPercent);

  useEffect(() => {
  }, []);

  console.log(crushPercent);
  return (
    <div className={styles.progress_container}>
      <div
        className={styles.progress_bar}
        style={{ width: `${crushPercent}%` }}
      >
        
        <img src={Crush} alt="호감도" />
        <div className={styles.top_txt}>{crushPercent}%</div>
      </div>
    </div>
  );
};

export default CrushBar;
