import React, { useEffect, useState } from "react";
import styles from "./LayResult.module.css"
import palette from "../../styles/color";
import LayShiny from "../../assets/images/Lay/lay_shiny.svg"
import LayThinking from "../../assets/images/Lay/lay_thinking.svg"
import CrushBar from "../../componets/CrushBar";
import DialogBox from "../../componets/DialogBox";
import ReactTyped from "react-typed";
import MenuBox from "../../componets/MenuBox";
import { useNavigate } from "react-router-dom";

const LayResult = () => {
    const navigate = useNavigate();
    const [showMenuBox, setShowMenuBox] = useState(false);
    const [showDialogBox, setShowDialogBox] = useState(true);
    const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
    const [showFullText, setShowFullText] = useState(false);
    

    const result = localStorage.getItem("crushPercent");

    const LayResultScenario = [
        {
            index: 0,
            nextIndex: 1,
            image:LayShiny,
            dialog: "호감도를 다 채웠어! 짝짝짝~ \n 축하해!! 이제 나와 친구가 되었어. 너에게 줄 선물이 있어!",
            name: "레이",
            arrowColor: palette.ray_blue,
            menu: {
                show: false,
              },
        },
        {
            index: 1,
            nextIndex: "",
            image:LayShiny,
            dialog: "짜잔~ 지금 바로 투자하면 수수료가 면제야!\n 투자하러 가볼까?",
            name: "레이",
            arrowColor: palette.ray_blue,
            menu: {
                show: true,
                option: ["바로 투자하러 가기", "투자게임 하기"],
                nextIndex: [0, 0],
              },
        },
        {
            index: 2,
            nextIndex: "레이",
            image:LayThinking,
            dialog: "호감도 달성에 실패했어... \n 아직 준비가 더 필요해 보여",
            name: "",
            arrowColor: palette.ray_blue,
            menu: {
                show: true,
                option: ["다시 시도", "다른 게임하기"],
                nextIndex: [0, 0],
            }
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
        if ( currentScenarioIndex < LayResultScenario.length - 1) {
            setCurrentScenarioIndex(LayResultScenario[currentScenarioIndex].nextIndex);
        } else if (LayResultScenario[currentScenarioIndex].quiz.show === true) {
            setShowDialogBox(false); // 대화 상자 감추기
            console.log(currentScenarioIndex);
        }};
    };

    //메뉴 클릭하기
    const handleMenuOptionClick = (option, currentIndex) => {
        console.log("Option:", option);
        console.log("Current Index:", currentIndex);
        if (option === "select1") {
        navigate("/lay")
        } else if (option === "select2") {
        navigate("/molly")
        }
    };

    //마지막 대화가 종료된 후 1초 후에 선택지 보여주기
    useEffect(() => {
        if (LayResultScenario[currentScenarioIndex].menu.show) {
        const timeoutId = setTimeout(() => {
            setShowMenuBox(true);
        }, 2000);

        return () => clearTimeout(timeoutId);
        }
    }, [currentScenarioIndex]);


    return(
        <div
            key={currentScenarioIndex}
            className={`${styles.root} ${
                LayResultScenario[currentScenarioIndex].name === "레이"
                  ? styles.layBackground
                  : ""
              }`}
        >
        <div>
            <div
                tabIndex={1}
                onClick={
                    LayResultScenario[currentScenarioIndex] &&
                    LayResultScenario[currentScenarioIndex].menu.show
                    ? null
                    : handleDialogBoxClick
                }
                onKeyDown={
                    LayResultScenario[currentScenarioIndex] &&
                    LayResultScenario[currentScenarioIndex].menu.show
                    ? null
                    : handleKeyDown
                }
            >
            {showDialogBox && (
            <div>
              {/* 프로그레스바 & 호감도 */}
              <div className={styles.top}>
                <CrushBar />
              </div>

              {/* 이미지 렌더링 */}
              <div className={styles.character_wrap}>
                <img
                  src={LayResultScenario[currentScenarioIndex].image}
                  alt="Scenario"
                />
              </div>

              {/* 대화 상자 렌더링 */}
              <DialogBox
                name={LayResultScenario[currentScenarioIndex].name}
                backgroundColor={palette.main_dialog}
                arrowColor={LayResultScenario[currentScenarioIndex].arrowColor}
              />
              <div className={styles.dialogText}>
                {showFullText ? (
                  LayResultScenario[currentScenarioIndex].dialog
                ) : (
                  <ReactTyped
                    key={currentScenarioIndex}
                    strings={[LayResultScenario[currentScenarioIndex].dialog]}
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
            select={LayResultScenario[currentScenarioIndex].menu}
            onOptionClick={handleMenuOptionClick}
          />
        )}
        </div>
    </div>
    )
}

export default LayResult;