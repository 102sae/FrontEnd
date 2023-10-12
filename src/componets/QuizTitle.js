import React from "react";
import palette from "../styles/color";
import styles from "./QuizTitle.module.css"
import PropTypes from "prop-types";
import LayThinking from "../assets/images/Lay/lay_thinking.svg"

const QuizTitle = ({term}) => {
    return (
        <div className={styles.wrap}>
        <img className={styles.character_wrap} src={LayThinking} alt="레이 고민" />,
        
        <svg xmlns="http://www.w3.org/2000/svg" 
        width="588" 
        height="71" 
        viewBox="0 0 588 71" 
        fill="none"
        style={{
            position: "absolute",
            bottom: 892,
            left: 125,
            top: 62,
          }}
        >
        <path d="M524.307 3.69057C417.998 -1.3876 170.43 -1.07023 59.7519 3.69057C-26.169 12.5775 -0.683967 35.112 21.8884 45.5858C21.8884 51.6161 12.4226 64.3116 42.2764 66.8507C59.7519 71.6115 366.543 72.4579 524.307 68.4377C574.986 67.6759 568.724 54.4726 564.355 45.5858C620.422 20.8295 564.355 5.60358 524.307 3.69057Z" fill="#EBF3FC"/>
        </svg>

        <foreignObject x="150" y="80" width="850" height="300">
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          className={styles.dialogText}
          style={{
            position: "absolute",
            left: 155,
            top: 80,
            letterSpacing: "1px",
          }}
        >
          {term}이 뭘까?
        </div>
      </foreignObject>
    </div>
        
    );
};

export default QuizTitle;
QuizTitle.prototype = {
    term: PropTypes.string.isRequired,
  };