
import React, { useState, useEffect } from 'react';
import styles from './ProgressBar.module.css';
import LayPB1 from "../assets/images/Lay/lay_pb1.svg"

const ProgressBar = () => {
    const [crushPercent, setCrushPercent] = useState(parseInt(localStorage.getItem('crushPercent')) || 50);

    useEffect(() => {
        localStorage.setItem('crushPercent', crushPercent.toString());
    }, [crushPercent]);
    

  return (
    
    <div className={styles.progress_container}>
      <div className={styles.progress_bar} style={{ width: `${crushPercent}%` }}>
        <img src={LayPB1} alt="레이 프로그레스 기본" />
      </div>
    </div>
  );
};

export default ProgressBar;
