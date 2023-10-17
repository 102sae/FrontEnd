import React, { useState, useEffect } from "react";
import styles from "./Molly.module.css";
import axios from "axios";
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
import { useNavigate } from "react-router-dom";

const Molly = () => {
  const navigate = useNavigate();
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
  const [stockGameCount, setStockGameCount] = useState(0); //프로그레스바
  const [stockGameYear, setStockGameYear] = useState(2018);
  const [crushPercent, setCrushPercent] = useState(
    parseInt(localStorage.getItem("crushPercent"))
  );

  const [chartData, setChartData] = useState({
    id: 1,
    year: 2019,
    price: [56000, 56100, 57000, 56500],
    date: ["2019-01-01", "2019-01-02", "2019-01-03", "2019-01-04"],
  });

  const [buySellApiData, setBuySellApiData] = useState({
    id: 0,
    stockRate: 19.23,
    answer: false,
    point: 10,
  });

  //투자 게임 시작 API 호출
  const postGameStart = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      // 요청 데이터
      const requestData = {};
      const response = await axios.post(
        "http://shinhan-stock-friends-lb-252672342.ap-northeast-2.elb.amazonaws.com/api/stock-quiz/start",
        requestData,
        {
          headers: headers,
        }
      );

      console.log("투자 게임 시작", response.data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  //투자 게임 시작 버튼
  const handleStartGame = () => {
    setStartStockGame(true);
    //postGameStart();
  };

  //매수 버튼 클릭
  const onBuyClick = (currentYear) => {
    console.log("매수 버튼 클릭");
    handleGameCount();
    console.log(currentYear);
    //postBuySell(currentYear,"BUY");
    //getChartData(currentYear);
    handleCrushPercent();
  };

  //매도 버튼 클릭
  const onSellClick = (currentYear) => {
    console.log("매도 버튼 클릭");
    handleGameCount();
    console.log(currentYear);
    //postBuySell(currentYear,"SELL");
    //getChartData(currentYear);
    handleCrushPercent();
  };

  //투자 게임 내년으로 넘어가기(다음 단계로 넘어가기
  const handleGameCount = () => {
    setStockGameCount((prev) => prev + 1);
    setStockGameYear((prev) => prev + 1);
  };

  //호감도 변경
  const handleCrushPercent = () => {
    console.log("기존 호감도: ", crushPercent);
    setCrushPercent(crushPercent + buySellApiData.point);
    console.log("변화한 호감도: ", crushPercent);
    localStorage.setItem(
      "crushPercent",
      Math.min(100, Math.max(0, crushPercent))
    );
  };

  //매수&매도 API 연결
  const postBuySell = async (currentYear, userAnswer) => {
    console.log("연도 ", currentYear);
    console.log("BUY or SELL", userAnswer);
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.post(
        `매수매도API`,
        {
          year: currentYear,
          userAnswerId: userAnswer,
        },
        {
          headers: headers,
        }
      );
      console.log("매수&매도 POST API", response.data);
      setBuySellApiData(response.data);
      return response.data;
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  //차트 데이터 API
  const getChartData = async (currentYear) => {
    try {
      const response = await axios.get("차트 데이터 API", {
        params: {
          year: currentYear,
        },
      });
      console.log("차트 데이터 API", response.data);
    } catch (error) {
      console.error("Error : ", error);
    }
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

  //뉴스 보는 버튼
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

  // 메뉴 선택창
  const handleMenuOptionClick = (option, currentIndex) => {
    if (option === "select1") {
      if (MollyScenario[currentIndex].menu.navigate) {
        console.log(MollyScenario[currentIndex].dialog);
        navigate("/lay");
      }
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

  //프로그레스바 상승
  useEffect(() => {
    if (stockGameCount === 5) {
      navigate("/molly-result");
    }
  }, [stockGameCount]);

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
                  <TradingButton year={2020} startStockGame={startStockGame} />
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
                {/* 게임 배경 */}
                <StockGameBox />
                {/* 주가 차트 */}
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
            {/* 헤더  */}
            <div className={styles.top}>
              <HintButton onClick={handleHintButtonClick} />
              {/* 뉴스 버튼이 눌리면 뉴스 기사 나타남 */}
              {showStockGameNews && (
                <StockGameNewsPaper
                  year={stockGameYear}
                  showStockGameNews={showStockGameNews}
                  toggleStockGameNews={handleHintButtonClick}
                />
              )}
              {/* 프로그레스바 */}
              <div className={styles.progressWrap}>
                <ProgressBar character="몰리" progressCount={stockGameCount} />
              </div>
              {/* 호감도 바 */}
              <CrushBar />
            </div>

            {/* 투자 게임 화면 */}
            <div>
              {/* 현재 연도 */}
              <div className={styles.bubbleContainer}>
                <TradingButton
                  onBuyClick={onBuyClick}
                  onSellClick={onSellClick}
                  year={stockGameYear}
                  startStockGame={startStockGame}
                />
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
                {/* 게임이 시작되고 마우스가 올라가면 몰리의 말풍선 보여주기*/}
                {showBubbleStart && (
                  <img
                    className={styles.bubbleStartMsg}
                    src={BubbleStartMsg}
                    alt="BubbleStartMsg"
                  />
                )}

                <img
                  className={styles.mollyImg}
                  src={MollyTrading}
                  alt="MollyTrading"
                />
              </div>

              {/* 게임 배경 */}
              <StockGameBox />
              {/* 주가 차트 */}
              <StockChart chartData={chartData} />
            </div>
          </div>
        )
      }
    </div>
  );
};
export default Molly;
