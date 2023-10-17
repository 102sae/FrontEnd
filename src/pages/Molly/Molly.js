import React, { useState, useEffect } from "react";
import styles from "./Molly.module.css";
import MollyScenarioIntro from "./MollyScenario";
import DialogBox from "../../componets/DialogBox";
import palette from "../../styles/color";
import ReactTyped from "react-typed";
import CrushBar from "../../componets/CrushBar";
import MenuBox from "../../componets/MenuBox";
import StockGameBox from "../../componets/StockGameBox";
import { ReactComponent as HintButton } from "../../assets/images/hint_button.svg";
import ProgressBar from "../../componets/ProgressBar";
import TradingButton from "../../componets/TradingButton";
import StockGameNewsPaper from "../../componets/StockGameNews";
import MollyTrading from "../../assets/images/Molly/molly_trading.png";
import BubbleHint from "../../assets/images/Bubble/bubble_hint.svg";
import BubbleProgress from "../../assets/images/Bubble/bubble_progress.svg";
import BubbleYear from "../../assets/images/Bubble/bubble_year.svg";
import BubbleSell from "../../assets/images/Bubble/bubble_sell.svg";
import BubbleBuy from "../../assets/images/Bubble/bubble_buy.svg";
import BubbleStart from "../../assets/images/Bubble/bubble_start.svg";
import BubbleStartMsg from "../../assets/images/Bubble/bubble_start_message.svg";
import StockChart from "../../componets/StockChart";

const Molly = () => {
  //시나리오 파일 가져오기
  const MollyScenario = MollyScenarioIntro();

  const [showMenuBox, setShowMenuBox] = useState(false);
  const [showDialogBox, setShowDialogBox] = useState(true);
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [showFullText, setShowFullText] = useState(false);
  const [showBubbleHint, setShowBubbleHint] = useState(false);
  const [showBubbleProgress, setShowBubbleProgress] = useState(false);
  const [showBubbleYear, setShowBubbleYear] = useState(false);
  const [showBubbleSell, setShowBubbleSell] = useState(false);
  const [showBubbleBuy, setShowBubbleBuy] = useState(false);
  const [showBubbleStart, setShowBubbleStart] = useState(false);
  const [showStockGameNews, setShowStockGameNews] = useState(false);
  const [startStockGame, setStartStockGame] = useState(false);
  const [stockGameCount, setStockGameCount] = useState(0);

  //투자 게임 시작 버튼
  const handleStartGame = () => {
    setStartStockGame(true);
  };

  //투자 게임 내년으로 넘어가기(다음 단계로 넘어가기
  const handleGameCount = () => {
    setStockGameCount((prev) => prev + 1);
  };

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
    setShowStockGameNews((prev) => !prev);
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
            {showDialogBox && (
              <div className={styles.introHeader}>
                {/* 호감도 */}
                <CrushBar />
              </div>
            )}
            {showDialogBox && (
              <div>
                {console.log(MollyScenario)}
                <div className={styles.characterWrap}>
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
          /* 게임 설명 이후 투자 게임창 */
          !showDialogBox && !startStockGame && (
            <div>
              <div className={styles.top}>
                <div
                  className={styles.bubbleContainer}
                  onMouseEnter={() => setShowBubbleHint(true)}
                  onMouseLeave={() => setShowBubbleHint(false)}
                >
                  <HintButton onClick={handleHintButtonClick} />
                  {showBubbleHint && (
                    <img
                      className={styles.bubbleHint}
                      src={BubbleHint}
                      alt="BubbleHint"
                    />
                  )}
                </div>

                <div
                  className={styles.bubbleContainer}
                  onMouseEnter={() => setShowBubbleProgress(true)}
                  onMouseLeave={() => setShowBubbleProgress(false)}
                >
                  <div className={styles.progressWrap}>
                    <ProgressBar character="몰리" progressCount={2} />
                  </div>
                  {showBubbleProgress && (
                    <img
                      className={styles.bubbleProgress}
                      src={BubbleProgress}
                      alt="BubbleProgress"
                    />
                  )}
                </div>

                <CrushBar />
              </div>
              <div>
                <div
                  className={styles.bubbleContainer}
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
                  <TradingButton year={2020} />
                  {showBubbleYear && (
                    <img
                      className={styles.bubbleYear}
                      src={BubbleYear}
                      alt="BubbleYear"
                    />
                  )}
                  {showBubbleSell && (
                    <img
                      className={styles.bubbleSell}
                      src={BubbleSell}
                      alt="BubbleSell"
                    />
                  )}
                  {showBubbleBuy && (
                    <img
                      className={styles.bubbleBuy}
                      src={BubbleBuy}
                      alt="BubbleBuy"
                    />
                  )}
                </div>

                <div
                  className={styles.mollyImgWrap}
                  onMouseEnter={() => {
                    setShowBubbleStart(true);
                  }}
                  onMouseLeave={() => {
                    setShowBubbleStart(false);
                  }}
                >
                  {showBubbleStart && (
                    <img
                      className={styles.bubbleStart}
                      src={BubbleStart}
                      alt="bubbleStart"
                    />
                  )}
                  {/* 몰리를 클릭하면 투자 게임 시작 */}
                  <img
                    onClick={handleStartGame}
                    className={styles.mollyImg}
                    src={MollyTrading}
                    alt="MollyTrading"
                  />
                </div>

                <StockGameBox />
                <StockChart />
              </div>
            </div>
          )
        }
      </div>
      {
        /* 실제 투자 게임 시작 */
        startStockGame && (
          <div>
            <div className={styles.top}>
              <HintButton onClick={handleHintButtonClick} />
              {showStockGameNews && (
                <StockGameNewsPaper
                  year={2021}
                  showStockGameNews={showStockGameNews}
                  toggleStockGameNews={handleHintButtonClick}
                />
              )}
              <div
                className={styles.bubbleContainer}
                onMouseEnter={() => setShowBubbleProgress(true)}
                onMouseLeave={() => setShowBubbleProgress(false)}
              >
                <div className={styles.progressWrap}>
                  <ProgressBar
                    character="몰리"
                    progressCount={stockGameCount}
                  />
                </div>
              </div>
              <CrushBar />
            </div>
            <div>
              <div className={styles.bubbleContainer}>
                <TradingButton year={2020} />
              </div>

              <div
                className={styles.mollyImgWrap}
                onMouseEnter={() => {
                  setShowBubbleStart(true);
                }}
                onMouseLeave={() => {
                  setShowBubbleStart(false);
                }}
              >
                {showBubbleStart && (
                  <img
                    className={styles.bubbleStartMsg}
                    src={BubbleStartMsg}
                    alt="BubbleStartMsg"
                  />
                )}

                <img
                  onClick={handleDialogBoxClick}
                  className={styles.mollyImg}
                  src={MollyTrading}
                  alt="MollyTrading"
                />
              </div>

              <StockGameBox />
              <StockChart />
            </div>
          </div>
        )
      }
    </div>
  );
};
export default Molly;
