
import React, { useState, useEffect } from 'react';
import styles from './CrushBar.module.css';
import Crush from "../assets/images/icon_crush.svg"

const CrushBar = () => {
    //로컬 스토리지에서 호감도 가져오기
    //defalt: 50%
    const [crushPercent, setCrushPercent] = useState(parseInt(localStorage.getItem('crushPercent')) || 50);

    useEffect(() => {
        localStorage.setItem('crushPercent', crushPercent.toString());
    }, [crushPercent]);
    

  return (
    <div className={styles.progress_container}>
      <div className={styles.progress_bar} style={{ width: `${crushPercent}%` }}>
        <img src={Crush} alt="호감도" />
        <div className={styles.top_txt}>
            {crushPercent}%
        </div>
      </div>
    </div>
  );
};

export default CrushBar;
