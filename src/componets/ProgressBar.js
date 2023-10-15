import React, { useState, useEffect } from 'react';
import styles from './ProgressBar.module.css';
import LayPB1 from "../assets/images/Lay/lay_pb1.svg";
import MollyPB1 from "../assets/images/Molly/molly_pb1.png";

const ProgressBar = ({ character }) => {
    const [crushPercent, setCrushPercent] = useState(parseInt(localStorage.getItem('crushPercent')) || 50);

    useEffect(() => {
        localStorage.setItem('crushPercent', crushPercent.toString());
    }, [crushPercent]);

    const progressBarImage = character === '레이' ? LayPB1 : MollyPB1;
    const progressBarStyle = character === '레이' ? styles.progress_bar_lay : styles.progress_bar_molly;

    return (
        <div className={styles.progress_container}>
            <div className={progressBarStyle} style={{ width: `${crushPercent}%` }}>
                <img src={progressBarImage} alt={`${character} 프로그레스 기본`} />
            </div>
        </div>
    );
};

export default ProgressBar;
