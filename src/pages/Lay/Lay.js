import React, { useState } from "react";
import "../../styles/reset.css";
import "../../styles/global.css";
import styles from "./Lay.module.css";
import DialogBox from "../../componets/DialogBox";
import palette from "../../styles/color";
import MenuBox from "../../componets/MenuBox";
import CrushBar from "../../componets/CrushBar";
import LaySmile from "../../assets/images/Lay/Lay_Smile.svg"
import LayShiny from "../../assets/images/Lay/Lay_Shiny.svg"
import LayThinking from "../../assets/images/Lay/Lay_Thinking.svg"


function Lay() {
    const LayScenario = [
        {
            text: "날 선택해줘서 고마워~ㅇㅇ아~\n 우리 같이 용어 공부 열심히 해보자!!",
            image: LaySmile
        },
        {
            text: "다음날...",
            image: LayShiny
        },
        {
            text: "레이가 무슨 고민에 빠진 듯 하다..\n 가서 말을 걸어보자",
            image: LayThinking
        }
    ];

    const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
    const handleDialogBoxClick = () => {
        if (currentScenarioIndex < LayScenario.length - 1) {
            setCurrentScenarioIndex(currentScenarioIndex + 1);
        }
    };

    return (
        <div className={styles.root}>
            <div className={styles.dialogContainer} onClick={handleDialogBoxClick}>
                {currentScenarioIndex >= 0 ? (
                    <div>
                        {/* 호감도 */}
                        <CrushBar />
                        {/* 이미지 렌더링 */}
                        <img src={LayScenario[currentScenarioIndex].image} alt="Scenario" />
                        {/* 대화 상자 렌더링 */}
                        <DialogBox
                            dialog={LayScenario[currentScenarioIndex].text}
                            name="레이"
                            backgroundColor={palette.main_dialog}
                            arrowColor={palette.lay_text}
                        />
                    </div>
                ) : null}
                {currentScenarioIndex === 2 ? (
                    <MenuBox select1={"무슨 고민있어?"} select2={"인상 좀 펴라"} />
                ) : null}
            </div>
        </div>
    );
}

export default Lay;
