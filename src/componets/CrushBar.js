
import React, { useState, useEffect } from 'react';
import styles from './CrushBar.module.css';
import Crush from "../assets/images/Icon_Crush.svg"

const CrushBar = () => {
    const [crushPercent, setCrushPercent] = useState(parseInt(localStorage.getItem('crushPercent')) || 50);

  useEffect(() => {
    localStorage.setItem('crushPercent', crushPercent.toString());
  }, [crushPercent]);

  return (
    
    <div className={styles.progress_container}>
      <div className={styles.progress_bar} style={{ width: `${crushPercent}%` }}>
        <div>
            <img src={Crush} alt="호감도" />
        </div>
      {crushPercent}%
      </div>
    </div>
  );
};

export default CrushBar;
