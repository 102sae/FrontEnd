import React from "react";
import PropTypes from "prop-types";

const NoticeBox = ({ notice }) => {
  return (
    <svg
      width="906"
      height="124"
      viewBox="0 0 906 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        bottom: 20,
        left: 60,
      }}
    >
      <path
        d="M807.861 6.44551C644.058 -2.42341 262.601 -1.86913 92.0666 6.44551C-40.3216 21.9663 -1.05387 61.3223 33.7261 79.6146C33.7261 90.1465 19.1409 112.319 65.1402 116.753C92.0666 125.068 564.775 126.546 807.861 119.525C885.947 118.195 876.299 95.1353 869.567 79.6146C955.956 36.3783 869.567 9.78654 807.861 6.44551Z"
        fill="#EBF3FC"
      />

      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="30px"
        fill="#000000"
        fontFamily="Poppins"
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
