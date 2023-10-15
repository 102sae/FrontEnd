import React, { useState, useEffect } from "react";
import styles from "./Molly.module.css";
import MollyScenario from "./MollyScenario";
import DialogBox from "../../componets/DialogBox";
import palette from "../../styles/color";
import ReactTyped from "react-typed";
import CrushBar from "../../componets/CrushBar";
import MenuBox from "../../componets/MenuBox";
import StockGameBox from "../../componets/StockGameBox";
import { ReactComponent as HintButton } from "../../assets/images/hintButton.svg";
import ProgressBar from "../../componets/ProgressBar";

export const Molly = () => {
  const [showMenuBox, setShowMenuBox] = useState(false);
  const [showDialogBox, setShowDialogBox] = useState(true);
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [showFullText, setShowFullText] = useState(false);

  // 다음 대화로 넘기기
  const handleDialogBoxClick = () => {
    if (!showFullText) {
      setShowFullText(true);
    } else {
      setShowFullText(false);
      if (currentScenarioIndex < MollyScenario.length - 1) {
        setCurrentScenarioIndex(MollyScenario[currentScenarioIndex].nextIndex);
      } else if (currentScenarioIndex === MollyScenario.length - 1) {
        setShowDialogBox(false);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleDialogBoxClick();
    }
    console.log(e.key);
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

  //마지막 대화가 종료된 후 1초 후에 선택지 보여주기
  useEffect(() => {
    if (MollyScenario[currentScenarioIndex].menu.show) {
      const timeoutId = setTimeout(() => {
        setShowMenuBox(true);
      }, 1500);

      return () => clearTimeout(timeoutId);
    }
  }, [currentScenarioIndex]);

  return (
    <div className={styles.root}>
      <div className={styles.dialogContainer}>
        <div>
          <div>
            {/* 프로그레스 바와 호감도 */}
            {showDialogBox && (
              <div className={styles.top}>
                {/* 호감도 */}
                <CrushBar />
              </div>
            )}
            {showDialogBox && (
              <div>
                <div className={styles.character_wrap}>
                  <img
                    src={MollyScenario[currentScenarioIndex].image}
                    alt="mollyImage"
                  />
                </div>
                {/* 대화 상자 렌더링 */}
                <div
                  tabIndex={1}
                  onClick={
                    MollyScenario[currentScenarioIndex] &&
                    MollyScenario[currentScenarioIndex].menu.show
                      ? null
                      : handleDialogBoxClick
                  }
                  onKeyDown={
                    MollyScenario[currentScenarioIndex] &&
                    MollyScenario[currentScenarioIndex].menu.show
                      ? null
                      : handleKeyDown
                  }
                >
                  <DialogBox
                    name="몰리"
                    backgroundColor={palette.main_dialog}
                    arrowColor={palette.molly_purple}
                  />
                  <div className={styles.dialogText}>
                    {showFullText ? (
                      MollyScenario[currentScenarioIndex].dialog
                    ) : (
                      <ReactTyped
                        key={currentScenarioIndex}
                        strings={[MollyScenario[currentScenarioIndex].dialog]}
                        typeSpeed={50}
                        onComplete={() => setShowFullText(true)}
                      />
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* 메뉴 박스 렌더링 */}
        </div>
        {showMenuBox && (
          <MenuBox
            select={MollyScenario[currentScenarioIndex].menu}
            onOptionClick={handleMenuOptionClick}
          />
        )}

        {
          /* 마지막 시나리오 후 프렌즈 선택창 */
          !showDialogBox && (
            <div>
              <div className={styles.top}>
                {/* 호감도 */}
                <HintButton />
                <ProgressBar />
                <CrushBar />
              </div>
              <StockGameBox />
            </div>
          )
        }
      </div>
    </div>
  );
};
