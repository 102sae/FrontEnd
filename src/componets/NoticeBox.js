import React from "react";
import styles from "./NoticeBox.module.css";
import PropTypes from "prop-types";

const NoticeBox = ({ notice }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1153"
      height="149"
      viewBox="0 0 1153 149"
      fill="none"
      style={{
        position: "absolute",
        bottom: 20,
        left: 155,
      }}
    >
      <path
        d="M1028.11 7.745C819.646 -2.912 334.193 -2.24597 117.166 7.745C-51.3143 26.3949 -1.34118 73.6857 42.9207 95.6659C42.9207 108.321 24.3592 134.964 82.8992 140.292C117.166 150.283 718.748 152.06 1028.11 143.623C1127.48 142.024 1115.2 114.316 1106.63 95.6659C1216.58 43.7127 1106.63 11.7596 1028.11 7.745Z"
        fill="#EBF3FC"
      />
      <text
        className={styles.noticeItem}
        x="50%"
        y="35%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="32"
        fill="#000000"
        fontFamily="Roboto"
      >
        {notice} {/* Render the text directly */}
      </text>
    </svg>
  );
};
export default NoticeBox;
NoticeBox.propTypes = {
  notice: PropTypes.string.isRequired,
};
