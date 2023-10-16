import React, { useState, useEffect } from "react";
import styles from "./CrushBar.module.css";
import Crush from "../assets/images/icon_crush.svg";

const CrushBar = () => {
  // 로컬 스토리지에서 호감도 가져오기, 기본 값은 50
  const initialCrushPercent =
    parseInt(localStorage.getItem("crushPercent")) || 50;
  const [crushPercent, setCrushPercent] = useState(initialCrushPercent);

  // crushPercent가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    // crushPercent 값을 0과 100 사이로 제한
    const updatedCrushPercent = Math.min(100, Math.max(0, crushPercent));
    localStorage.setItem("crushPercent", updatedCrushPercent.toString());
  }, [crushPercent]);

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
