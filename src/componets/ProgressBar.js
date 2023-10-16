import React, { useState, useEffect } from "react";
import styles from "./ProgressBar.module.css";
import LayPB1 from "../assets/images/Lay/lay_pb1.svg";
import MollyPB1 from "../assets/images/Molly/molly_pb1.png";

const ProgressBar = ({ character, progressCount }) => {
  const [count, setCount] = useState(0);

  let imageLeft = `${(count / 10) * 100}%`;
  if (count <= 4) {
    imageLeft = `${(count / 10) * 100 + 25}%`;
  } else if (count <= 6) {
    imageLeft = `${(count / 10) * 100 + 22}%`;
  } else if (count === 7) {
    imageLeft = `${(count / 10) * 100 + 10}%`;
  } else if (count === 8) {
    imageLeft = `${(count / 10) * 100 + 5}%`;
  } else if (count === 9) {
    imageLeft = `${(count / 10) * 100}%`;
  } else {
    imageLeft = `${(count / 10) * 100 - 10}%`;
  }

  useEffect(() => {
    setCount(progressCount);
  }, [progressCount]);

  const progressBarImage = character === "레이" ? LayPB1 : MollyPB1;
  const progressBarStyle =
    character === "레이" ? styles.progress_bar_lay : styles.progress_bar_molly;

  return (
    <div className={styles.progress_container}>
      <div
        className={progressBarStyle}
        style={{ width: `${(count / 10) * 100}%` }}
      >
        <img
          src={progressBarImage}
          alt={`${character} 프로그레스 기본`}
          style={{ left: `${imageLeft}` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
