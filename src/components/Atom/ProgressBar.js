import React, { useState, useEffect } from "react";
import styles from "./ProgressBar.module.css";
import LayPB1 from "../../assets/images/Lay/lay_pb1.png";
import MollyPB1 from "../../assets/images/Molly/molly_pb1.png";

const ProgressBar = ({ character, progressCount }) => {
  const [count, setCount] = useState(0);

  let imageLeft = 0;
  if (character === "레이") {
    if (count <= 4) {
      imageLeft = `${(count / 10) * 100 + 25}%`;
    } else if (count <= 6) {
      imageLeft = `${(count / 10) * 100 + 22}%`;
    } else if (count === 7) {
      imageLeft = `${(count / 10) * 100 + 10}%`;
    } else if (count === 8) {
      imageLeft = `${(count / 10) * 100 + 5}%`;
    } else if (count === 9) {
      imageLeft = `${(count / 10) * 100 - 8}%`;
    } else {
      imageLeft = `${(count / 10) * 100 - 10}%`;
    }
  } else {
    if (count < 1) {
      imageLeft = `${(count / 5) * 100 - 10}%`;
    } else if (count < 3) {
      imageLeft = `${(count / 5) * 100 - 15}%`;
    } else if (count < 5) {
      imageLeft = `${(count / 5) * 100 - 13}%`;
    } else if (count === 5) {
      imageLeft = `${(count / 5) * 100 - 19}%`;
    }
  }

  useEffect(() => {
    setCount(progressCount);
  }, [progressCount]);

  return (
    <div className={styles.progressContainer}>
      <div
        className={
          character === "레이"
            ? `${styles.progressbarLay}`
            : `${styles.progressbarMolly}`
        }
        style={
          character === "레이"
            ? { width: `${(count / 10) * 100}%` }
            : { width: `${(count / 5) * 100}%` }
        }
      >
        <img
          className={
            character === "레이"
              ? `${styles.progressbarLayImg}`
              : `${styles.progressbarMollyImg}`
          }
          src={character === "레이" ? LayPB1 : MollyPB1}
          alt={`${character} 프로그레스 기본`}
          style={{ left: `${imageLeft}` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
