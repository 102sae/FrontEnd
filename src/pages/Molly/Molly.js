import React, { useState, useEffect } from "react";
import styles from "./Molly.module.css";
import axios from "axios";
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
import MollyHi from "../../assets/images/Molly/molly_hi.png";
import StockChart from "../../componets/StockChart";
import { useNavigate } from "react-router-dom";
import MollyCrush from "../../componets/MollyCrush";
import HomeIcon from "../../assets/images/home_icon.png";

const Molly = () => {
  const navigate = useNavigate();

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
  const [showMollyCrush, setShowMollyCrush] = useState(false);
  const [startStockGame, setStartStockGame] = useState(false);
  const [stockGameCount, setStockGameCount] = useState(0);
  const [stockGameYear, setStockGameYear] = useState(2018);
  const [newsData, setNewsData] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [buySellApiData, setBuySellApiData] = useState(0);
  const [companyApiData, setCompanyApiData] = useState(0);
  const [crushPercent, setCrushPercent] = useState(
    parseInt(localStorage.getItem("crushPercent"))
  );

   //시나리오 파일 가져오기
   const MollyScenario = [
    {
      index: 0,
      nextIndex: 1,
      image: MollyHi,
      dialog:
        "안녕! 나를 선택해줘서 고마워~ 우리 같이 투자 연습을 해보면서 실제 투자에 대한 감각을 높여보자!",
      name: "몰리",
      arrowColor: palette.molly_purple,
      menu: {
        show: false,
      },
    },
    {
      index: 1,
      nextIndex: 2,
      image: MollyHi,
      dialog: "같이 투자 연습을 해볼래?",
      name: "몰리",
      arrowColor: palette.molly_purple,
      menu: {
        show: true,
        option: ["렛츠 고!", "마음의 준비가 필요해"],
        nextIndex: [2, 3],
      },
    },
    {
      index: 2,
      nextIndex: 4,
      image: MollyHi,
      dialog: "그럼 먼저 투자 게임에 대한 설명을 해줄게~",
      name: "몰리",
      arrowColor: palette.molly_purple,
      menu: {
        show: false,
      },
    },
    {
      index: 3,
      nextIndex: "",
      image: MollyHi,
      dialog: "용어 공부를 더 하다가 올래? 조급해하지 않아도 돼~",
      name: "몰리",
      arrowColor: palette.molly_purple,
      menu: {
        show: true,
        navigate: true,
        option: ["용어 공부를 하고 올게", "가보자고~"],
        nextIndex: [3, 2],
      },
    },
    {
      index: 4,
      nextIndex: 5,
      image: MollyHi,
      dialog: `우리가 투자 연습을 해볼 회사는 ${companyApiData.companyName}야~ ${companyApiData.companyInfo} 같이 주요 뉴스를 확인하며 연습해보자~`,
      name: "몰리",
      arrowColor: palette.molly_purple,
      menu: {
        show: false,
      },
    },
    {
      index: 5,
      nextIndex: 6,
      image: MollyHi,
      dialog: `${companyApiData.startYear}년부터 ${companyApiData.endYear}년까지의 ${companyApiData.companyName}회사의 주가를 보여줄게! 그리고 너는 1년마다 매수를 할건지 매도를 할건지 선택할 수 있어!`,
      name: "몰리",
      arrowColor: palette.molly_purple,
      menu: {
        show: false,
      },
    },
    {
      index: 6,
      nextIndex: 7,
      image: MollyHi,
      dialog:
        "매수를 한 후에 그 해에 주가가 오르거나 매도를 한 후에 주가가 내려가면 나의 호감도는 높아질거야!",
      name: "몰리",
      arrowColor: palette.molly_purple,
      menu: {
        show: false,
      },
    },
    {
      index: 7,
      nextIndex: 8,
      image: MollyHi,
      dialog:
        "반대로 매수를 했는데 그해의 주가가 떨어지거나 매도를 했는데 주가가 상승하면 나의 호감도는 떨어지겠지? 실제 게임화면으로 이동해서 설명해줄게~",
      name: "몰리",
      arrowColor: palette.molly_purple,
      menu: {
        show: false,
      },
    },
  ];

  //투자 게임 시작 POST API
  const postTradingGameStart = async () => {
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


  //회사 정보 GET API
  const getCompanyInfo = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.get(
        "http://shinhan-stock-friends-lb-252672342.ap-northeast-2.elb.amazonaws.com/api/stock-quiz/companies/question",
        {
          headers,
        }
      );
      console.log("회사 정보 API", response.data.data);
      setCompanyApiData(response.data.data);

      //시작 연도 로컬스토리지에 저장
      console.log("회사 정보 API - companyApiData", companyApiData);
      console.log("회사 정보 API - startYear", response.data.data.startYear);
      localStorage.setItem("stockGameYear", response.data.data.startYear);
      setStockGameYear(response.data.data.startYear);
      console.log("setStockGameYear", stockGameYear)
    } catch (error) {
      console.error("Error fetching data from API: ", error);
    }
  };

  //뉴스정보 GET API
  const getNewsData = async (stockGameYear) => {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get(
        `http://shinhan-stock-friends-lb-252672342.ap-northeast-2.elb.amazonaws.com/api/stock-quiz/companies/news?year=${stockGameYear}`,
        {
          headers: headers,
        }
      );
      console.log("투자 게임 뉴스 API", response.data);
      setNewsData(response.data.data);
      return response.data.data;
    } catch (error) {
      console.error("Error : ", error);
    }
  };

    //주가조회 GET API
    const getChartData = async (stockGameYear) => {
      console.log("주가조회 api 안에 년도",stockGameYear);
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };
  
        const response = await axios.get(
          `http://shinhan-stock-friends-lb-252672342.ap-northeast-2.elb.amazonaws.com/api/stock-quiz/companies/stocks?year=${stockGameYear}`, 
          {
            headers,
          }
        );
        console.log("차트 데이터 API", response.data.data);
        setChartData(response.data.data);
        return response.data.data;
      } catch (error) {
        console.error("Error : ", error);
      }
    };


  //투자 게임 시작 버튼
  const handleStartGame = () => {
    setStartStockGame(true);
    getChartData(stockGameYear);
    getNewsData(stockGameYear);
  };

  //매수 버튼 클릭
  const onBuyClick = (stockGameYear) => {
    console.log("매수 버튼 클릭");
    const updateStockGameYear = handleGameCount();
    console.log("매수 클릭후 다음년도", updateStockGameYear);
    postBuySell(updateStockGameYear,"BUY");
    getChartData(updateStockGameYear);
    handleQuizFinish();
  };

  //매도 버튼 클릭
  const onSellClick = (stockGameYear) => {
    console.log("매도 버튼 클릭");
    const updateStockGameYear = handleGameCount();
    console.log("매수 클릭후 다음년도", updateStockGameYear);
    postBuySell(updateStockGameYear,"SELL");
    getChartData(updateStockGameYear);
    handleQuizFinish();
  };

  //투자 게임 내년으로 넘어가기(다음 단계로 넘어가기
  const handleGameCount = () => {
    setStockGameCount((prev) => prev + 1);
    const updateStockGameYear = stockGameYear +1;
    console.log("setStockGameCount",stockGameCount)
    console.log("updateStockGameYear",stockGameYear);
    return updateStockGameYear;
  };


  //퀴즈 종료 이후
  const handleQuizFinish = () => {
    //호감도 변경값 저장
    console.log("기존 호감도: ", crushPercent);
    const updateCrushPercent = Math.min(
      100,
      Math.max(0, crushPercent + buySellApiData.point)
    );
    setCrushPercent(updateCrushPercent);
    console.log("변화한 호감도: ", updateCrushPercent);
    localStorage.setItem("crushPercent", updateCrushPercent);

    //몰리 호감도 창
    if (buySellApiData.correct) {
      setShowMollyCrush(true);
      const timeoutId = setTimeout(() => {
        setShowMollyCrush(false);
      }, 5000);
    } else {
      setShowMollyCrush(true);
      const timeoutId = setTimeout(() => {
        setShowMollyCrush(false);
      }, 5000);
    }
  };

  //결과 확인 POST API
  const postBuySell = async (stockGameYear, userAnswer) => {
    console.log("연도 ", stockGameYear);
    console.log("BUY or SELL", userAnswer);
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.post(
        "http://shinhan-stock-friends-lb-252672342.ap-northeast-2.elb.amazonaws.com/api/stock-quiz/answers/check",
        {
          year: stockGameYear,
          userAnswerId: userAnswer,
        },
        {
          headers: headers,
        }
      );
      console.log("매수&매도 POST API", response.data.data);
      setBuySellApiData(response.data.data);
      //return response.data.data;
    } catch (error) {
      console.error("Error: ", error);
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

  useEffect(() => {
    setCrushPercent(parseInt(localStorage.getItem("crushPercent")))
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await postTradingGameStart(); // postTradingGameStart 함수 실행
      await getCompanyInfo(); // getCompanyInfo 함수 실행
      await getChartData(stockGameYear);
    };
    fetchData(); // fetchData 함수 호출
  }, []);

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
                <img
                  src={HomeIcon}
                  alt="HomeIcon"
                  className={styles.homeIcon}
                  onClick={() => navigate("/home")}
                />
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
                <StockChart chartData={chartData}/>
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
                  newsData={newsData}
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

              {/* 몰리 호감도 변화 */}
              {showMollyCrush && (
                <MollyCrush
                  correct={buySellApiData.correct}
                  point={buySellApiData.point}
                  stockRate={buySellApiData.stockRate}
                />
              )}
            </div>
          </div>
        )
      }
    </div>
  );
};
export default Molly;