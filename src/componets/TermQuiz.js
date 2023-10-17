import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import palette from "../styles/color";
import styles from "./TermQuiz.module.css";
import LayThinking from "../assets/images/Lay/lay_thinking.svg";

const TermQuiz = ({ id, term, items, onQuizFinish }) => {
  const [apiCorrectData, setApiCorrectData] = useState(null); //정답 확인 api
  // const [termId, setTermId] = useState(0);
  const [userAnswerId, setUserAnswerId] = useState(null);
  const [answerId, setAnswerId] = useState(null);
  // const [userCorrect, setUserCorrect] = useState(null);
  // const [userPoint, setUserPoint] = useState(null);
  // let isCorrectAnswer = false;

  const onClickAnswer = async (index) => {
    console.log("유저 선택 userAnswerId", index);
    console.log("정답 확인 POST API", id);
    await postData(id, index); // postData 함수가 완료될 때까지 기다립니다.
    // isCorrectAnswer = userAnswerId === answerId;
    setTimeout(() => {
      const quizResult = {
        userCorrect: apiCorrectData?.correct, // 선택적 체이닝을 사용하여 안전하게 접근합니다.
        userPoint: apiCorrectData?.point, // 선택적 체이닝을 사용하여 안전하게 접근합니다.
        userAnswerId: index,
        termId: id,
      };
      // 호감도 변화
      const storedCrushPercent = parseInt(localStorage.getItem("crushPercent"));
      localStorage.setItem("crushPercent", Math.min(100, Math.max(0, storedCrushPercent + quizResult?.userPoint))); // 선택적 체이닝을 사용하여 안전하게 접근합니다.
      console.log("quizResult", quizResult);
      onQuizFinish(quizResult);
    }, 1000);
};

  
  const quizItems = [
    {
      id:  items[0].id,
      text: items[0].content,
      position: { top: 192, left: 107.5 },
    },
    {
      id: items[1].id,
      text: items[1].content,
      position: { top: 382, left: 107.5 },
    },
    {
      id: items[2].id,
      text: items[2].content,
      position: { top: 572, left: 107.5 },
    },
  ];

  //정답 확인 POST API
  const postData = async (currentId, userSelectAnswer) => {
    console.log("정답 확인 POST API 인자(currentId)", currentId);
    console.log("유저가 선택한 답(userSelectAnswer)", userSelectAnswer);
    try {
        const token = localStorage.getItem("token");
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const response = await axios.post(
            `http://shinhan-stock-friends-lb-252672342.ap-northeast-2.elb.amazonaws.com/api/term-quiz/questions/${currentId}/answers/check`,
            {
                userAnswerId: userSelectAnswer,
            },
            {
                headers: headers,
            }
        );
        console.log("정답 확인 POST API 결과 데이터", response.data);
        setApiCorrectData(response.data.data);
        onQuizFinish();
    } catch (error) {
        console.error("Error submitting answer: ", error);
    }
};

  
  

  return (
    <div>
      {/* 용어 게임 헤더 */}
      <img
        className={styles.character_wrap}
        src={LayThinking}
        alt="레이 고민"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="419"
        height="54"
        viewBox="0 0 419 54"
        fill="none"
        style={{
          position: "absolute",
          bottom: 892,
          left: 125,
          top: 65,
        }}
      >
        <path
          d="M372.84 2.76432C297.243 -1.03934 121.194 -0.801625 42.4902 2.76432C-18.609 9.42081 -0.486377 26.2997 15.5651 34.1448C15.5651 38.6617 8.83383 48.1709 30.0632 50.0728C42.4902 53.6387 260.653 54.2727 372.84 51.2614C408.879 50.6909 404.426 40.8013 401.319 34.1448C441.189 15.6018 401.319 4.19722 372.84 2.76432Z"
          fill="#EBF3FC"
        />
      </svg>
      {/* 헤더 안에 텍스트 */}
      <text
        className={styles.quiz_title}
        x="150"
        y="80"
        width="850"
        height="300"
        style={{
          position: "absolute",
          left: 170,
          top: 80,
          letterSpacing: "1px",
        }}
      >
        {term}이 뭘까?
      </text>

      {/* 용어 게임 바디 */}
      {quizItems.map((index) => (
        <div className={styles.quiz_content} key={index.id}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="809"
            height="133"
            viewBox="0 0 809 133"
            fill="none"
            className={styles.quiz_list}
            style={{
              position: "absolute",
              top: index.position.top,
              left: index.position.left,
            }}
            onClick={() => onClickAnswer(index.id)}
          >
            <g filter="url(#filter0_d_74_9294)">
              <path
                d="M0 62.5C0 27.9822 27.9822 0 62.5 0H737.5C772.018 0 800 27.9822 800 62.5V62.5C800 97.0178 772.018 125 737.5 125H62.5C27.9822 125 0 97.0178 0 62.5V62.5Z"
                fill="white"
              />
              <path
                d="M62.5 0.5H737.5C771.742 0.5 799.5 28.2583 799.5 62.5C799.5 96.7417 771.742 124.5 737.5 124.5H62.5C28.2583 124.5 0.5 96.7417 0.5 62.5C0.5 28.2583 28.2583 0.5 62.5 0.5Z"
                stroke="#FFE8D4"
              />
            </g>
          </svg>

          <text
            className={styles.quiz_list_txt}
            x="150"
            y="80"
            width="850"
            height="300"
            style={{
              position: "absolute",
              top: index.position.top + 50,
            }}
          >
            {index.text}
          </text>
        </div>
      ))}
      {/* 정답 및 오답 이미지 */}
      {userAnswerId !== null && (
        <div className={styles.quiz_answer}>
            {quizItems.map((index) => (
            <svg
                key={index.id}
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                style={{
                position: "absolute",
                top: index.position.top,
                left: index.position.left,
                }}
            >
                <path
                d={
                    index.id === answerId
                    ? "M17.6866 30.5898L32.5253 15.7511C33.0292 15.2473 33.0292 14.4302 32.5253 13.9264L30.7006 12.1016C30.1967 11.5977 29.3797 11.5977 28.8757 12.1016L16.7742 24.2031L11.1243 18.5531C10.6204 18.0493 9.80339 18.0493 9.29944 18.5531L7.47468 20.3779C6.97081 20.8818 6.97081 21.6988 7.47468 22.2027L15.8618 30.5898C16.3657 31.0937 17.1827 31.0937 17.6866 30.5898Z"
                    : "M29.8065 25.25C30.1855 25.629 30.1855 26.2419 29.8065 26.621L26.6129 29.8065C26.2339 30.1855 25.621 30.1855 25.2419 29.8065L20 24.5161L14.75 29.8065C14.371 30.1855 13.7581 30.1855 13.379 29.8065L10.1935 26.6129C9.81452 26.2339 9.81452 25.621 10.1935 25.2419L15.4839 20L10.1935 14.75C9.81452 14.371 9.81452 13.7581 10.1935 13.379L13.3871 10.1855C13.7661 9.80645 14.379 9.80645 14.7581 10.1855L20 15.4839L25.25 10.1935C25.629 9.81452 26.2419 9.81452 26.621 10.1935L29.8145 13.3871C30.1935 13.7661 30.1935 14.379 29.8145 14.7581L24.5161 20L29.8065 25.25Z"
                }
                fill={index.id === answerId ? "#1D449B" : "#FA3939"}
                />
            </svg>
            ))}
        </div>
        )}
    </div>
  );
};

export default TermQuiz;

TermQuiz.propTypes = {
  term: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onQuizFinish: PropTypes.func.isRequired,
};