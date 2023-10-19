import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/reset.css";
import "../../styles/global.css";
import styles from "./Lay.module.css";
import DialogBox from "../../componets/DialogBox";
import palette from "../../styles/color";
import MenuBox from "../../componets/MenuBox";
import CrushBar from "../../componets/CrushBar";
import LaySmile from "../../assets/images/Lay/lay_smile.png";
import LayShiny from "../../assets/images/Lay/lay_shiny.png";
import LayThinking from "../../assets/images/Lay/lay_thinking.png";
import SolSolution from "../../assets/images/sol_solution.png";
import SolKKK from "../../assets/images/sol_kkk.png";
import ProgressBar from "../../componets/ProgressBar";
import axios from "axios";
import TermQuiz from "../../componets/TermQuiz";
import LayCrush from "../../componets/LayCrush";
import ReactTyped from "react-typed";
import HomeIcon from "../../assets/images/home_icon.png";

const Lay = () => {
  const navigate = useNavigate();
  const nickName = localStorage.getItem("nickName");
  const [showMenuBox, setShowMenuBox] = useState(false);
  const [showDialogBox, setShowDialogBox] = useState(true);
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [showFullText, setShowFullText] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showLayCrush, setShowLayCrush] = useState(false);
  const [apiTermData, setApiTermData] = useState(0); //용어게임문제 api
  const [apiSolData, setApiSolData] = useState(0); //정답확인 api
  const [progressCount, setProgressCount] = useState(0);
  const [layCrushInfo, setLayCrushInfo] = useState({
    correct: null,
    point: null,
  });

  const LayScenario = [
    {
      index: 0,
      nextIndex: 1,
      image: LaySmile,
      dialog: `날 선택해줘서 고마워~${nickName}아~\n 우리 같이 용어 공부 열심히 해보자!!`,
      name: "레이",
      arrowColor: palette.ray_blue,
      menu: {
        show: false,
      },
      quiz: {
        show: false,
      },
    },
    {
      index: 1,
      nextIndex: 2,
      image: LayShiny,
      dialog: "다음날...",
      name: "레이",
      arrowColor: palette.ray_blue,
      menu: {
        show: false,
      },
      quiz: {
        show: false,
      },
    },
    {
      index: 2,
      nextIndex: "",
      image: LayThinking,
      dialog: "레이가 무슨 고민에 빠진 듯 하다..\n 가서 말을 걸어보자",
      name: "레이",
      arrowColor: palette.ray_blue,
      menu: {
        show: true,
        option: ["무슨 고민있어?", "인상 좀 펴라"],
        nextIndex: [3, 3],
      },
      quiz: {
        show: false,
      },
    },
    {
      index: 3,
      nextIndex: 4,
      image: LayThinking,
      dialog: `요즘 뉴스에 ${apiTermData.term}에 대해 많이 나오더라고... 그런데 ${apiTermData.term}이 정확하게 뭔지 모르겠어서 나 좀 도와줄래?`,
      name: "레이",
      arrowColor: palette.ray_blue,
      menu: {
        show: false,
      },
      quiz: {
        show: true,
      },
    },
    {
      index: 4,
      nextIndex: 6,
      image: LayShiny,
      dialog: `우와~ ${nickName}아 너 정말 똑똑하다~ 고마워~`,
      name: "레이",
      arrowColor: palette.ray_blue,
      menu: {
        show: false,
      },
      quiz: {
        show: false,
      },
    },
    {
      index: 5,
      nextIndex: 6,
      image: LayThinking,
      dialog: `음.. 아직 잘 모르겠다.`,
      name: "레이",
      arrowColor: palette.ray_blue,
      menu: {
        show: false,
      },
      quiz: {
        show: false,
      },
    },
    {
      index: 6,
      nextIndex: 7,
      image: SolSolution,
      dialog: "내가 다시 한번 설명해주지~",
      name: "쏠",
      arrowColor: palette.sol_text,
      menu: {
        show: false,
      },
      quiz: {
        show: false,
      },
    },
    {
      index: 7,
      nextIndex: 8,
      image: SolSolution,
      dialog: `${apiTermData.term}는(은) 한국예탁결제원에 따르면 ${apiSolData.description}(이)야~`,
      name: "쏠",
      arrowColor: palette.sol_text,
      menu: {
        show: false,
      },
      quiz: {
        show: false,
      },
    },
    {
      index: 8,
      nextIndex: 9,
      image: SolKKK,
      dialog: `하하하! 얼빠진 얼굴 하고 있네! 포기하기엔 이르다구~ 나 쏠이가 다시 쉽게 설명해줄게~\n ${apiSolData.explanation}`,
      name: "쏠",
      arrowColor: palette.sol_text,
      menu: {
        show: false,
      },
      quiz: {
        show: false,
      },
    },
    {
      index: 9,
      nextIndex: 6,
      image: LayThinking,
      dialog: `${apiTermData.term}은 무엇인지 맞춰봐!`,
      name: "레이",
      arrowColor: palette.ray_blue,
      menu: {
        show: false,
      },
      quiz: {
        show: true,
      },
    },
  ];

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleDialogBoxClick();
    }
    console.log(e.key);
  };

  // 다음 대화로 넘기기
  const handleDialogBoxClick = () => {
    if (!showFullText) {
      setShowFullText(true);
    } else {
      setShowFullText(false);
      if (
        currentScenarioIndex < LayScenario.length - 1 &&
        LayScenario[currentScenarioIndex].quiz.show === false
      ) {
        setCurrentScenarioIndex(LayScenario[currentScenarioIndex].nextIndex);
      } else if (LayScenario[currentScenarioIndex].quiz.show === true) {
        setShowDialogBox(false); // 대화 상자 감추기
        setShowQuiz(true); // 퀴즈 화면 보이기
        console.log(currentScenarioIndex);
      }
    }
  };

  //메뉴 클릭하기
  const handleMenuOptionClick = (option, currentIndex) => {
    if (option === "select1") {
      setCurrentScenarioIndex(currentIndex);
      setShowMenuBox(false);
    } else if (option === "select2") {
      setCurrentScenarioIndex(currentIndex);
      setShowMenuBox(false);
    }
  };

  // 용어게임 문제 API
  const getData = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_PORT}/api/term-quiz/questions`,
        {
          headers,
        }
      );
      console.log("용어게임 문제 API", response.data);
      setApiTermData(response.data.data);
    } catch (error) {
      console.error("Error fetching data from API: ", error);
    }
  };

  // 용어게임 해설 API
  const getDataSol = async (currentId) => {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_PORT}/api/term-quiz/questions/${currentId}/solution`,
        {
          headers,
        }
      );
      console.log("용어게임 해설 API", response.data.data);
      <div
        dangerouslySetInnerHTML={{ __html: setApiSolData(response.data.data) }}
      />;
    } catch (error) {
      console.error("Error fetching data from API: ", error);
    }
  };

  //퀴즈 종료 이후
  const handleQuizFinish = (quizResult) => {
    const termId = quizResult.termId;
    const correct = quizResult.userCorrect;
    const point = quizResult.userPoint;
    setLayCrushInfo({ correct, point }); // 호감도 상태 설정
    console.log("정답 여부:", correct);
    console.log("호감도 변화 값:", point);

    getDataSol(termId);
    setShowQuiz(false);
    setShowDialogBox(true);

    if (correct) {
      setCurrentScenarioIndex(4);
      setShowLayCrush(true);
      const timeoutId = setTimeout(() => {
        setShowLayCrush(false);
      }, 5000);
    } else {
      setCurrentScenarioIndex(5);
      setShowLayCrush(true);
      const timeoutId = setTimeout(() => {
        setShowLayCrush(false);
      }, 5000);
    }
  };

  //프로그레스바 상승
  useEffect(() => {
    if (currentScenarioIndex === 3 || currentScenarioIndex === 8) {
      console.log("프로그레스바 단계", progressCount);
      setProgressCount((prev) => prev + 1);
      const crushPercent = parseInt(localStorage.getItem("crushPercent"));
      //10단계 끝나면 레이 결과창으로 이동
      if (crushPercent == 100) {
        navigate("/lay-result");
      }
      else if (crushPercent == 0) {
        navigate("/lay-result");
      }
      else if (progressCount == 10) {
        navigate("/lay-result");
      }
    }
  }, [currentScenarioIndex]);

  //용어 게임 시작 POST API
  const postTermGameStart = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      // 요청 데이터 (비어있는 객체 또는 필요한 데이터를 넣을 수 있음)
      const requestData = {};
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_PORT}/api/term-quiz/start`,
        requestData,
        {
          headers: headers,
        }
      );

      console.log("용어 게임 시작", response.data);
      localStorage.setItem("crushPercent", 50);
      localStorage.setItem("nickName", response.data.data);
    } catch (error) {
      console.error("Error submitting answer: ", error);
    }
  };

  //용어 게임 문제 API 호출
  useEffect(() => {
    if (currentScenarioIndex === 2 || currentScenarioIndex === 8) {
      getData();
    }
  }, [currentScenarioIndex]);

  //마지막 대화가 종료된 후 1초 후에 선택지 보여주기
  useEffect(() => {
    if (LayScenario[currentScenarioIndex].menu.show) {
      const timeoutId = setTimeout(() => {
        setShowMenuBox(true);
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [currentScenarioIndex]);

  useEffect(() => {
    postTermGameStart();
  }, []);

  return (
    <div
      key={currentScenarioIndex}
      className={`${styles.root} ${
        LayScenario[currentScenarioIndex].name === "쏠"
          ? styles.solBackground
          : LayScenario[currentScenarioIndex].name === "레이"
          ? styles.layBackground
          : ""
      }`}
    >
      <div className={styles.dialogContainer}>
        <div
          tabIndex={1}
          onClick={
            LayScenario[currentScenarioIndex] &&
            LayScenario[currentScenarioIndex].menu.show
              ? null
              : handleDialogBoxClick
          }
          onKeyDown={
            LayScenario[currentScenarioIndex] &&
            LayScenario[currentScenarioIndex].menu.show
              ? null
              : handleKeyDown
          }
        >
          {showDialogBox && (
            <div>
              {/* 프로그레스바 & 호감도 */}
              <div className={styles.hometop}>
                <img
                  src={HomeIcon}
                  alt="HomeIcon"
                  className={styles.homeIcon}
                  onClick={() => navigate("/home")}
                />
                <div className={styles.progressWrap}>
                  <ProgressBar character="레이" progressCount={progressCount} />
                </div>
                <CrushBar />
              </div>

              {/* 이미지 렌더링 */}
              <div className={styles.character_wrap}>
                <img
                  src={LayScenario[currentScenarioIndex].image}
                  alt="Scenario"
                />
              </div>

              {/* 대화 상자 렌더링 */}
              <DialogBox
                name={LayScenario[currentScenarioIndex].name}
                backgroundColor={palette.main_dialog}
                arrowColor={LayScenario[currentScenarioIndex].arrowColor}
              />
              <div className={styles.dialogText}>
                {showFullText ? (
                  LayScenario[currentScenarioIndex].dialog
                ) : (
                  <ReactTyped
                    key={currentScenarioIndex}
                    strings={[LayScenario[currentScenarioIndex].dialog]}
                    typeSpeed={40}
                    onComplete={() => setShowFullText(true)}
                  />
                )}
              </div>
            </div>
          )}
        </div>

        {/* 메뉴 박스 렌더링 */}
        {showMenuBox && (
          <MenuBox
            select={LayScenario[currentScenarioIndex].menu}
            onOptionClick={handleMenuOptionClick}
          />
        )}

        {/* 퀴즈 화면 */}
        {showQuiz && (
          <div className={styles.top}>
            {/* 퀴즈 타이틀 */}
            <TermQuiz
              id={apiTermData.id} //용어 문제 번호
              term={apiTermData.term} //용어
              items={apiTermData.items} //리스트 배열
              onQuizFinish={(quizResult) => handleQuizFinish(quizResult)} //퀴즈 끝나면 호출
            />
            {/* 호감도 */}
            <CrushBar />
          </div>
        )}

        {/* 레이 호감도 변화 */}
        {showLayCrush && (
          <LayCrush correct={layCrushInfo.correct} point={layCrushInfo.point} />
        )}
      </div>
    </div>
  );
};

export default Lay;
