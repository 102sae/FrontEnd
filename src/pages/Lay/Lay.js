import React, { useEffect, useState } from "react";
import "../../styles/reset.css";
import "../../styles/global.css";
import styles from "./Lay.module.css";
import DialogBox from "../../componets/DialogBox";
import palette from "../../styles/color";
import MenuBox from "../../componets/MenuBox";
import CrushBar from "../../componets/CrushBar";
import LaySmile from "../../assets/images/Lay/lay_smile.svg"
import LayShiny from "../../assets/images/Lay/lay_shiny.svg"
import LayThinking from "../../assets/images/Lay/lay_thinking.svg"
import ProgressBar from "../../componets/ProgressBar";


function Lay() {
    const LayScenario = [
        {
            index: 0,
            nextIndex:1,
            image: LaySmile,
            dialog: "날 선택해줘서 고마워~ㅇㅇ아~\n 우리 같이 용어 공부 열심히 해보자!!",
            menu: {
                show: false,
              },
        },
        {
            index: 1,
            nextIndex: 2,
            image: LayShiny,
            dialog: "다음날...",
            menu: {
                show: false,
            },
        },
        {
            index: 2,
            nextIndex: "",
            image: LayThinking,
            dialog: "레이가 무슨 고민에 빠진 듯 하다..\n 가서 말을 걸어보자",
            menu: {
              show: true,
              option: ["무슨 고민있어?", "인상 좀 펴라"],
              nextIndex: [3, 3],
            },
        },
        {
            index: 3,
            nextIndex: 4,
            image: LayThinking,
            dialog: "요즘 뉴스에 (채권)을 사라는 말이 많더라고... \n그런데 (채권)이 정확하게 뭔지 모르겠어서 나 좀 도와줄래?",
            menu: {
                show: false,
            },
        }
    ];

    const [showMenuBox, setShowMenuBox] = useState(false);
    const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);

    //다음 대화로 넘기기
    const handleDialogBoxClick = () => {
        if (currentScenarioIndex < LayScenario.length - 1) {
            setCurrentScenarioIndex(LayScenario[currentScenarioIndex].nextIndex);
        }
        console.log(currentScenarioIndex);
    };

    const handleMenuOptionClick = (option, currentIndex) => {
        if (option === "select1") {
          setCurrentScenarioIndex(currentIndex);
          setShowMenuBox(false);
          console.log("1선택");
        } else if (option === "select2") {
          setCurrentScenarioIndex(currentIndex);
          setShowMenuBox(false);
          console.log("2선택");
        }
      };

    return (
        <div className={styles.root}>
            <div className={styles.dialogContainer} onClick={handleDialogBoxClick}>
            {currentScenarioIndex >= 0 ? (
            <div>
                <div className={styles.top}>
                    {/* 프로그레스 바 */}
                    <ProgressBar />
                    {/* 호감도 */}
                    <CrushBar />
                </div>
                <div className={styles.img_container}>
                    {/* 이미지 렌더링 */}
                    <img src={LayScenario[currentScenarioIndex].image} alt="Scenario" />
                </div>
                
                {/* 대화 상자 렌더링 */}
                <DialogBox
                dialog={LayScenario[currentScenarioIndex].dialog}
                name="레이"
                backgroundColor={palette.main_dialog}
                arrowColor={palette.ray_blue}
                />
            </div>
            ):null}
            {showMenuBox && (
                <MenuBox
                    select={LayScenario[currentScenarioIndex].menu}
                    onOptionClick={handleMenuOptionClick}
                />
            )}
            </div>
        </div>
    );
}

export default Lay;
