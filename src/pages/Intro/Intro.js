import React, { useState } from "react";
import "../../styles/reset.css";
import "../../styles/global.css";
import styles from "./Intro.module.css";
import DialogBox from "../../componets/DialogBox";
import palette from "../../styles/color";
import MenuBox from "../../componets/MenuBox";
import { ReactComponent as SolHi } from "../../assets/images/sol_hi.svg";

function Intro() {
  const introScenario = [
    "밤하늘의 북쪽에서 가장 밝게 빛나는 별, \n북극성에 우주여행작가 쏠이 살고 있었어요.\n 그날도 어느 때와 같이 글을 써 내려가고 있었습니다.\n 다녀왔던 별들은 전부 아름다웠지만,",
    "10년 후...",
    "안녕? 난 쏠이야",
    "북극성에서 또 다른 내 친구들이 온대! 혹시 그 친구들도 지구에서 부자가 될 수 있도록 도와줄 수 있을까?",
  ];
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const handleDialogBoxClick = () => {
    if (currentScenarioIndex < introScenario.length - 1) {
      setCurrentScenarioIndex(currentScenarioIndex + 1);
    }
  };
  return (
    <div className={styles.root}>
      <div className={styles.dialogContainer} onClick={handleDialogBoxClick}>
        {currentScenarioIndex > 2 ? (
          //쏠이 등장 이후
          <div>
            <SolHi></SolHi>
            <DialogBox
              dialog={introScenario[currentScenarioIndex]}
              name="쏠"
              backgroundColor={palette.main_dialog}
              arrowColor={palette.sol_text}
            />
          </div>
        ) : (
          //쏠 등장 전
          <DialogBox
            dialog={introScenario[currentScenarioIndex]}
            name="??"
            backgroundColor={palette.main_dialog}
            arrowColor={palette.sol_text}
          />
        )}
        {currentScenarioIndex === introScenario.length - 1 ? (
          <MenuBox select1={"나한테 맡겨!"} select2={"내가 왜?"} />
        ) : null}
      </div>
      <div></div>
    </div>
  );
}
export default Intro;
