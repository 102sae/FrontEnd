import React, { useState, useEffect } from "react";
import styles from "./Molly.module.css";
import MollyScenario from "./MollyScenario";
import DialogBox from "../../componets/DialogBox";
import palette from "../../styles/color";
import ReactTyped from "react-typed";
import CrushBar from "../../componets/CrushBar";
import MenuBox from "../../componets/MenuBox";
import StockGameBox from "../../componets/StockGameBox";
import { ReactComponent as HintButton } from "../../assets/images/hint_button.svg";
import ProgressBar from "../../componets/ProgressBar";
import TradingButton from "../../componets/TradingButton";
import StockGameNews from "../../componets/StockGameNews";
import BubbleHint from "../../assets/images/Bubble/bubble_hint.svg"
import BubbleProgress from "../../assets/images/Bubble/bubble_progress.svg"
import BubbleYear from "../../assets/images/Bubble/bubble_year.svg"
import BubbleSell from "../../assets/images/Bubble/bubble_sell.svg"
import BubbleBuy from "../../assets/images/Bubble/bubble_buy.svg"


const Molly = () => {
  const [showMenuBox, setShowMenuBox] = useState(false);
  const [showDialogBox, setShowDialogBox] = useState(true);
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [showFullText, setShowFullText] = useState(false);
  const [showBubbleHint, setShowBubbleHint] = useState(false);
  const [showBubbleProgress, setShowBubbleProgress] = useState(false);
  const [showBubbleYear, setShowBubbleYear] = useState(false);
  const [showBubbleSell, setShowBubbleSell] = useState(false);
  const [showBubbleBuy, setShowBubbleBuy] = useState(false);
  const [showStockGameNews, setShowStockGameNews] = useState(false);


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

  const handleHintButtonClick = () => {
    setShowStockGameNews(true);
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
              <div className={styles.introHeader}>
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
          /* 투자 설명 이후 투자 게임창 */
          !showDialogBox && (
            <div>
              <div className={styles.top}>

            {/* 호감도 */}
            <div
              className={styles.bubble_container}
              onMouseEnter={() => setShowBubbleHint(true)}
              onMouseLeave={() => setShowBubbleHint(false)}>
              <HintButton 
                onClick={handleHintButtonClick} />
              {showBubbleHint && <img className={styles.bubble_hint} src={BubbleHint} alt="BubbleHint" />}
              {showStockGameNews && <StockGameNews />}
            </div>

            <div
              className={styles.bubble_container}
              onMouseEnter={() => setShowBubbleProgress(true)}
              onMouseLeave={() => setShowBubbleProgress(false)}>
              <ProgressBar character="몰리"/>
              {showBubbleProgress && <img className={styles.bubble_progress} src={BubbleProgress} alt="BubbleProgress" />}
            </div>
          
              <CrushBar />
            </div>
            <div>
            <div
              className={styles.bubble_container}
              onMouseEnter={() => {
                setShowBubbleYear(true);
                setShowBubbleSell(true);
                setShowBubbleBuy(true);
              }}
              onMouseLeave={() => {
                setShowBubbleYear(false);
                setShowBubbleSell(false);
                setShowBubbleBuy(false);
              }}
            >
              <TradingButton />
              {showBubbleYear && <img className={styles.bubble_year} src={BubbleYear} alt="BubbleYear" />}
              {showBubbleSell && <img className={styles.bubble_sell} src={BubbleSell} alt="BubbleSell" />}
              {showBubbleBuy && <img className={styles.bubble_buy} src={BubbleBuy} alt="BubbleBuy" />}
            </div>

              <StockGameBox />
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};
export default Molly;
